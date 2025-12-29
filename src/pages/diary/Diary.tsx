import { useNavigate } from 'react-router-dom'
import { useTranslationStore } from '../../store/language/useTranslationStore'
import {
	buildEmotionBars,
	getAverageEngagement,
	getEmotionPercent,
	type IEmotionBar,
} from '../../types/emotion/emotionBar'
import { weekInfo } from '../../types/info/dayInfo'

const Diary = () => {
	const navigate = useNavigate()
	const { t } = useTranslationStore()
	return (
		<>
			<div
				className='relative max-w-md w-full h-screen flex flex-col mx-auto bg-blue-400 gap-4'
				style={{ padding: 10, overflowY: 'scroll' }}
			>
				{weekInfo.map((day, index) => {
					const emotions: IEmotionBar[] =
						day.lessons.length > 0 ? buildEmotionBars(day.lessons[0]) : []
					return (
						<div
							onClick={() => {
								navigate(`/diary/${day.date}`)
							}}
							key={index}
							className='w-full bg-white rounded-2xl'
							style={{ padding: 20 }}
						>
							<p className='text-left font-bold text-2xl'>{day.date}</p>
							<div className='w-full space-y-2'>
								<div className='flex h-3 w-full overflow-hidden rounded-full bg-gray-200'>
									{emotions.map((e, index) => (
										<div
											key={index}
											className={e.color}
											style={{ width: `${e.value}%` }}
										/>
									))}
								</div>
								<div className='text-sm grid grid-cols-2'>
									{emotions.map(e => (
										<span
											key={e.label}
											style={{
												color:
													e.label == 'angry'
														? 'red'
														: e.label == 'happy'
														? 'green'
														: e.label == 'neutral'
														? 'grey'
														: 'blue',
											}}
										>
											{t[e.label]} — {e.value}
										</span>
									))}
								</div>
								<div className='flex flex-col gap-2'>
									{day.lessons.map((les, index) => {
										const eng = getAverageEngagement(les)
										const emt = getEmotionPercent(les)
										return (
											<div key={les.id}>
												<div
													className='flex flex-col gap-2 bg-gray-100 rounded-2xl'
													style={{ padding: 10 }}
												>
													<div className='flex justify-between'>
														<div className='flex items-center justify-center gap-2 text-2xl'>
															<p className='text-blue-500'>{index + 1}.</p>
															<h3>{t[les.name as keyof typeof t]}</h3>
														</div>
														<p
															className='font-extrabold text-2xl'
															style={{
																color:
																	les.grade == 5
																		? 'green'
																		: les.grade == 4
																		? '#FF9800'
																		: 'red',
															}}
														>
															{les.grade}
														</p>
													</div>
													<div className='flex justify-between'>
														<p className='text-xl'>{t.lessonTime}</p>
														<p>
															{les.startTime} - {les.endTime}
														</p>
													</div>
													<div className='flex justify-between'>
														<p className='text-xl'>{t.homeWork}</p>
														<p>{les.homeWork}</p>
													</div>
													<div className='flex justify-between'>
														<p className='text-xl'>{t.engagement}</p>
														<p
															style={{
																color:
																	eng > 80
																		? 'green'
																		: eng > 70
																		? '#FF9800'
																		: 'red',
															}}
														>
															{eng}%
														</p>
													</div>
													<div className='flex justify-between'>
														<p className='text-xl'>{t.emotionalState}</p>
														<p
															style={{
																color:
																	emt > 80
																		? 'green'
																		: emt > 70
																		? '#FF9800'
																		: 'red',
															}}
														>
															{emt}%
														</p>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Diary
