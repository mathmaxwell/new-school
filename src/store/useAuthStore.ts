import { create } from 'zustand'
import type { IUser } from '../types/user/userType'

interface AuthState {
	token: string | null
	user: IUser | null
	setAuth: (data: { user: IUser; token: string }) => void
	logout: () => void
	isAuthenticated: boolean
}

const getUserFromStorage = (): IUser | null => {
	try {
		const storedUser = localStorage.getItem('user')
		if (!storedUser) return null
		return JSON.parse(storedUser)
	} catch {
		return null
	}
}

const getTokenFromStorage = (): string | null => {
	return localStorage.getItem('token')
}

export const useAuthStore = create<AuthState>((set, get) => ({
	token: getTokenFromStorage(),
	user: getUserFromStorage(),

	setAuth: ({ user, token }) => {
		localStorage.setItem('token', token)
		localStorage.setItem('user', JSON.stringify(user))
		set({ user, token })
	},

	logout: () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		set({ user: null, token: null })
	},

	get isAuthenticated() {
		return !!get().token
	},
}))
