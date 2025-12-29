import type { ILesson } from '../info/dayInfo'

export interface IEmotionBar {
	label: 'happy' | 'neutral' | 'sad' | 'angry'
	value: number
	color: 'bg-green-500' | 'bg-gray-500' | 'bg-blue-500' | 'bg-red-500'
}
const emotionConfig = {
	happy: 'bg-green-500',
	neutral: 'bg-gray-500',
	sad: 'bg-blue-500',
	angry: 'bg-red-500',
} as const

export const buildEmotionBars = (lesson: ILesson): IEmotionBar[] => {
	return (Object.keys(lesson.emotion) as Array<IEmotionBar['label']>).map(
		label => ({
			label,
			value: lesson.emotion[label],
			color: emotionConfig[label],
		})
	)
}
export const getAverageEngagement = (lesson: ILesson): number => {
	if (!lesson.engagement.length) return 0

	const total = lesson.engagement.reduce(
		(sum, item) => sum + item.engagementLevel,
		0
	)

	return Math.round(total / lesson.engagement.length)
}
export const getEmotionPercent = (lesson: ILesson): number => {
	const { happy, neutral, sad, angry } = lesson.emotion

	const weightedSum = happy * 3 + neutral * 2 + sad * 1 + angry * 0

	const maxPossible = 100 * 3

	return Math.round((weightedSum / maxPossible) * 100)
}
