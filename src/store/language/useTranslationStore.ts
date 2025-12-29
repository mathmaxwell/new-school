import { create } from 'zustand'
import ru from './ru'
import uz from './uz'
import eng from './eng'

type TranslationContent = typeof ru

interface TranslationState {
	lang: 'uz' | 'ru' | 'eng'
	setLang: (lang: 'uz' | 'ru' | 'eng') => void
	t: TranslationContent
}

const translations: Record<'uz' | 'ru' | 'eng', TranslationContent> = {
	uz,
	ru,
	eng,
}

export const useTranslationStore = create<TranslationState>(set => {
	const storedLang = localStorage.getItem('lang')
	const langFromStorage =
		storedLang === 'ru' || storedLang === 'uz'
			? storedLang
			: storedLang === 'eng'
			? storedLang
			: 'uz'
	return {
		lang: langFromStorage,
		t: translations[langFromStorage],
		setLang: (lang: 'uz' | 'ru' | 'eng') => {
			localStorage.setItem('lang', lang)
			set({
				lang,
				t: translations[lang],
			})
		},
	}
})
