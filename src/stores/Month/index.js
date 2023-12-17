import { getCurrentMonth } from '@/utils'
import { create } from 'zustand'

const useMonthStore = create((set) => ({
  currentSelectedMonth: getCurrentMonth(),
  setCurrentSelectedMonth: (month) =>
    set(() => ({ currentSelectedMonth: month })),

  monthData: [],
  setMonthData: (monthData) => set(() => ({ monthData })),

  createTask: (task, day) => {
    const { date, month, year } = day

    set((state) => {
      const monthData = [...state.monthData]
      const dayObj = monthData.find(
        (day) => day.date === date && day.month === month && day.year === year,
      )
      dayObj.tasks.push(task)

      return { monthData }
    })
  },
  removeAllTasks: (day) => {
    const { date, month, year } = day

    set((state) => {
      const monthData = [...state.monthData]
      const dayObj = monthData.find(
        (day) => day.date === date && day.month === month && day.year === year,
      )
      dayObj.tasks = []

      return { monthData }
    })
  },
}))

export default useMonthStore
