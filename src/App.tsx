import { Route, Routes } from 'react-router-dom'
import IntroPage from './pages/components/intro/IntroPage'
import './App.css'
import Register from './pages/Register/Register'
import Diary from './pages/diary/Diary'
import DayOnfo from './pages/diary/DayOnfo'
import EngagementModal from './modal/EngagementModal'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<IntroPage />} />
				<Route path='/diary' element={<Diary />} />
				<Route path='/diary/:day' element={<DayOnfo />} />
				<Route path='*' element={<IntroPage />} />
				<Route path='/register' element={<Register />} />
			</Routes>
			<EngagementModal />
		</>
	)
}

export default App
