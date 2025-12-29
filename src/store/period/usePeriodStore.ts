import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IPeriod } from '../../types/periods/periods'

interface PeriodStore {
	periods: IPeriod[]
	setPeriods: (list: IPeriod[]) => void
	clear: () => void
}

export const usePeriodStore = create<PeriodStore>()(
	persist(
		set => ({
			periods: [],
			setPeriods: list => set({ periods: list }),
			clear: () => set({ periods: [] }),
		}),
		{
			name: 'periods-store',
			partialize: state => ({ periods: state.periods }),
			migrate: (persisted: any) => ({
				...persisted,
				periods: (persisted?.periods || []).map((p: any) => ({
					...p,
					startDate: new Date(p.startDate),
					endDate: new Date(p.endDate),
				})),
			}),
		}
	)
)
