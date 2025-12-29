import { useState } from 'react'
import { useTranslationStore } from '../../store/language/useTranslationStore'
import { logIn } from '../../api/auth/auth'
import type { IUser } from '../../types/user/userType'
import { useAuthStore } from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { getAcademicPeriods } from '../../api/periods/preiods'
import { usePeriodStore } from '../../store/period/usePeriodStore'
const Register = () => {
	const { t } = useTranslationStore()
	const { setAuth } = useAuthStore()
	const { setPeriods } = usePeriodStore()
	const navigate = useNavigate()

	const [login, setLogin] = useState('testadmin')
	const [password, setPassword] = useState('tadi123$')
	async function handleLogin() {
		try {
			const result = (await logIn({ password, login })).data.data as IUser
			setAuth({ user: result, token: result.token })
			const res = await getAcademicPeriods(result.token)
			setPeriods(res)
			navigate('/diary')
		} catch (error) {
			alert(error)
			navigate('/')
		}
	}
	return (
		<div className='relative max-w-md w-full h-screen '>
			<form
				action=''
				className='flex flex-col mx-auto gap-10'
				onSubmit={e => {
					e.preventDefault()
					handleLogin()
				}}
			>
				<input
					type='text'
					value={login}
					className='border'
					onChange={e => {
						setLogin(e.target.value)
					}}
					placeholder='login'
				/>
				<input
					type='text'
					className='border'
					value={password}
					onChange={e => {
						setPassword(e.target.value)
					}}
					placeholder='password'
				/>
				<button className='border bg-blue-500 text-white' type='submit'>
					{t.login}
				</button>
			</form>
		</div>
	)
}

export default Register
