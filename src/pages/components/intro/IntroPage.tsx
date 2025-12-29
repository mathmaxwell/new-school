import BottomNavigate from '../../components/Navigation/BottomNavigate'
import StarIcon from '../../../../images/icons/StarIcon'
import Right from '../../../../images/icons/Right'
import LogOut from '../../../../images/icons/LogOut'
import LangIcon from '../../../../images/icons/LangIcon'
import CameraIcon from '../../../../images/icons/CameraIcon'
import BellIcon from '../../../../images/icons/BellIcon'
import { useTranslationStore } from '../../../store/language/useTranslationStore'
import { useNavigate } from 'react-router-dom'
const IntroPage = () => {
	const navigate = useNavigate()
	const { t, lang, setLang } = useTranslationStore()
	return (
		<>
			<div className='relative max-w-md w-full h-screen flex flex-col mx-auto'>
				<div className="w-full h-1/3 bg-[url('../../../images/intro.png')] bg-cover bg-bottom flex items-center justify-center flex-col gap-5">
					<div className='w-30 h-30 flex items-center justify-center bg-gray-400 rounded-full border-white border-2 text-2xl text-white'>
						AA
					</div>
				</div>

				<div
					className=' bg-gray-200 h-full w-full'
					style={{ padding: '24px 20px' }}
				>
					<ul className='w-full'>
						<li
							className='flex justify-between gap-8'
							style={{
								padding: '16px 20px',
								borderBottom: '0.5px solid gray',
							}}
						>
							<StarIcon />
							<p className='w-full'>{t.restore}</p>
						</li>
						<li
							className='flex justify-between gap-8'
							style={{ padding: '16px 20px', borderBottom: '0.5px solid gray' }}
						>
							<BellIcon />
							<p className='w-full'>{t.notifications}</p>
						</li>{' '}
						<li
							onClick={() => {
								navigate('/register')
							}}
							className='flex justify-between gap-8'
							style={{ padding: '16px 20px', borderBottom: '0.5px solid gray' }}
						>
							<CameraIcon />
							<p className='w-full'>{t.video_analytics}</p>
							<Right />
						</li>{' '}
						<li
							onClick={() => {
								setLang(lang == 'uz' ? 'ru' : lang == 'ru' ? 'eng' : 'uz')
							}}
							className='flex justify-between gap-8'
							style={{ padding: '16px 20px', borderBottom: '0.5px solid gray' }}
						>
							<LangIcon />
							<p className='w-full'>
								{t.language}: {lang}
							</p>
							<Right />
						</li>{' '}
						<li
							className='flex justify-between gap-8'
							style={{ padding: '16px 20px', borderBottom: '0.5px solid gray' }}
						>
							<StarIcon />
							<p className='w-full'>{t.support}</p>
						</li>{' '}
						<li
							className='flex justify-between gap-8'
							style={{ padding: '16px 20px', borderBottom: '0.5px solid gray' }}
						>
							<LogOut />
							<p className='w-full text-red-500'>{t.logout}</p>
						</li>{' '}
					</ul>
				</div>

				<BottomNavigate />
			</div>
		</>
	)
}

export default IntroPage
