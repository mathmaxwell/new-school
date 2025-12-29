import { create } from 'zustand'

interface ModalState {
	isOpen: boolean
	image: string
	description: string
	time: string

	openModal: (data: {
		image: string
		description: string
		time: string
	}) => void

	closeModal: () => void
}

export const useModalStore = create<ModalState>(set => ({
	isOpen: false,
	image: '',
	description: '',
	time: '',

	openModal: ({ image, description, time }) =>
		set({
			isOpen: true,
			image,
			description,
			time,
		}),

	closeModal: () =>
		set({
			isOpen: false,
			image: '',
			description: '',
			time: '',
		}),
}))
