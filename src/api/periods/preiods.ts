import type { IPeriod } from '../../types/periods/periods'
import { API_CONFIG } from '../auth/auth'
import api from '../axios'

export async function getAcademicPeriods(token: string) {
	try {
		const responce = await api.post('/schedule/getAcademicPeriods', {
			...API_CONFIG,
			data: {
				token: `Token ${token}`,
				description: '',
				title: '',
				startDate: '',
				endDate: '',
				limit: 200,
				page: 1,
			},
		})
		const result = responce.data.data as IPeriod[]
		return result
	} catch (error) {
		console.log(error)
		return []
	}
}
