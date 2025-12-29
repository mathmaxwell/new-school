import { useTranslationStore } from '../store/language/useTranslationStore'
import { useModalStore } from '../store/modal/useModalStore'

const EngagementModal = () => {
	const { isOpen, image, description, time, closeModal } = useModalStore()
	const { t } = useTranslationStore()
	if (!isOpen) return null
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* overlay */}
			<div className='absolute inset-0 bg-black/50' onClick={closeModal} />

			{/* modal */}
			<div
				className='relative z-10 w-full max-w-md rounded-2xl bg-white p-4 shadow-xl'
				style={{ padding: 20 }}
			>
				{/* header */}
				<div className='mb-3 flex items-center justify-between'>
					<div></div>
					<button
						onClick={closeModal}
						className='text-gray-400 hover:text-gray-600'
					>
						✕
					</button>
				</div>

				{/* image */}
				{image && (
					<img
						src={image}
						className='mb-3 h-48 w-full rounded-xl object-cover'
					/>
				)}

				{/* description */}
				<p className='mb-2 text-sm text-gray-700'>{description}</p>

				{/* time */}
				<p className='text-xs text-gray-500'>
					{t.time}: {time}
				</p>
			</div>
		</div>
	)
}

export default EngagementModal
