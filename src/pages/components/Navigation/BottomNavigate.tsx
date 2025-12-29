import HomeIcon from '../../../../images/icons/HomeIcon'
import SearchIcon from '../../../../images/icons/SearchIcon'
import BookIcon from '../../../../images/icons/BookIcon'
import AnaliticIcon from '../../../../images/icons/AnaliticIcon'
import ProfilIcon from '../../../../images/icons/ProfilIcon'
import { useTranslationStore } from '../../../store/language/useTranslationStore'
import { useNavigate } from 'react-router-dom'
const BottomNavigate = () => {
	const navigate = useNavigate()
	const { t } = useTranslationStore()
	return (
		<div className='w-full h-20 bg-gray-200 border-t-[0.5px]'>
			<ul className='h-full flex items-center justify-around'>
				<li className='flex flex-col items-center justify-center'>
					<HomeIcon />
					<p>{t.home_page}</p>
				</li>
				<li className='flex flex-col items-center justify-center'>
					<SearchIcon />
					<p>{t.search}</p>
				</li>
				<li className='flex flex-col items-center justify-center'>
					<BookIcon />
					<p>{t.diary}</p>
				</li>
				<li className='flex flex-col items-center justify-center'>
					<AnaliticIcon />
					<p>{t.progress}</p>
				</li>
				<li
					onClick={() => {
						navigate('/')
					}}
					className='flex flex-col items-center justify-center'
				>
					<ProfilIcon />
					<p>{t.profile}</p>
				</li>
			</ul>
		</div>
	)
}

export default BottomNavigate
