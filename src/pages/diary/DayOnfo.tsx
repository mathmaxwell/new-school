import { useParams } from 'react-router-dom'
import { weekDays, weekInfo } from '../../types/info/dayInfo'
import { useTranslationStore } from '../../store/language/useTranslationStore'
import {
	buildEmotionBars,
	getAverageEngagement,
	type IEmotionBar,
} from '../../types/emotion/emotionBar'
import { useModalStore } from '../../store/modal/useModalStore'

const DayOnfo = () => {
	const { openModal } = useModalStore()
	const { t, lang } = useTranslationStore()
	const { day } = useParams<{ day: string }>()
	const dayInfo = weekInfo.find(item => item.date === day)
	const date = dayInfo
		? (() => {
				const [dd, mm, yyyy] = dayInfo.date.split('.').map(Number)
				return new Date(yyyy, mm - 1, dd, 10, 0, 0)
		  })()
		: new Date()

	return (
		<div
			className='flex flex-col bg-blue-400 gap-4'
			style={{ padding: 10, overflowY: 'scroll' }}
		>
			<div className='w-full bg-white rounded-2xl' style={{ padding: 20 }}>
				<h3 className='text-xl font-bold'>
					{t[weekDays[date.getDay()] as keyof typeof t].toUpperCase()}
				</h3>
				<p>{dayInfo?.date}</p>
				<div className='flex justify-between gap-2'>
					<div
						className='flex flex-col gap-2'
						onClick={() => {
							openModal({
								image: dayInfo?.entryPhoto,
								description: '',
								time: dayInfo?.entryTime,
							})
						}}
					>
						<img src={dayInfo?.entryPhoto} alt='entry' />
						<p>{t.entryTime}</p>
						<p>{dayInfo?.entryTime}</p>
					</div>
					<div
						className='flex flex-col gap-2'
						onClick={() => {
							openModal({
								image: dayInfo?.exitPhoto,
								description: '',
								time: dayInfo?.exitTime,
							})
						}}
					>
						<img src={dayInfo?.exitPhoto} alt='entry' />
						<p>{t.exitTime}</p>
						<p>{dayInfo?.exitTime}</p>
					</div>
				</div>
			</div>
			<div style={{ overflowY: 'scroll' }}>
				<div className='flex flex-col gap-2'>
					{dayInfo?.lessons.map((les, ind) => {
						const emotions: IEmotionBar[] = buildEmotionBars(les)
						const eng = getAverageEngagement(les)
						return (
							<div
								style={{ padding: 10 }}
								key={ind}
								className='w-full bg-white rounded-2xl'
							>
								<div className='flex justify-between'>
									<h3>{t.lessonName}</h3>
									<p className='text-xl font-bold'>{les.name.toUpperCase()}</p>
								</div>
								<div className='flex justify-between'>
									<h3>{t.grade}</h3>
									<p
										style={{
											color:
												les.grade == 5
													? 'green'
													: les.grade == 4
													? '#FF9800'
													: 'red',
										}}
										className='text-xl font-bold'
									>
										{les.grade}
									</p>
								</div>
								<div className='flex justify-between'>
									<h3>{t.lessonTime}</h3>
									<p className='text-xl'>
										{les.startTime} - {les.endTime}
									</p>
								</div>
								<div className='flex justify-between'>
									<h3>{t.late}</h3>
									<p className='text-xl'>{les.entryTime}</p>
								</div>
								<div className='flex justify-between'>
									<h3>{t.homeWork}</h3>
									<p className='text-xl'>{les.homeWork}</p>
								</div>
								<div className='flex justify-between'>
									<h3>{t.engagement}</h3>
									<p
										style={{
											color: eng > 80 ? 'green' : eng > 70 ? '#FF9800' : 'red',
										}}
										className='text-xl'
									>
										{eng}%
									</p>
								</div>
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
								<div className='flex gap-2 overflow-x-auto'>
									{les.engagement.map((eng, index) => {
										return (
											<div
												key={index}
												className='flex flex-col gap-1 w-25'
												onClick={() => {
													openModal({
														image: eng.image,
														description: eng.description[lang],
														time: eng.time,
													})
												}}
											>
												<img src={eng.image} alt='image' />
												<p>{eng.engagementLevel}%</p>
											</div>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default DayOnfo
