import { create } from 'zustand'
import { getCurrentMonth } from '../../utils'

const useMonthStore = create((set) => ({
  currentSelectedMonth: getCurrentMonth(),
  setCurrentSelectedMonth: (month) =>
    set(() => ({ currentSelectedMonth: month })),
}))

export default useMonthStore
