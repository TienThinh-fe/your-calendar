export const getCurrentMonth = () => {
  const date = new Date()

  return date
}

export function generateMonthData(selectedDate) {
  const startDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1,
  ).getDay()
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0,
  ).getDate()

  const today = new Date()

  return Array(35)
    .fill(0)
    .map((_, index) => {
      const date = index - startDay + 1
      const inCurrentMonth = date > 0 && date <= daysInMonth
      const isToday =
        inCurrentMonth &&
        date === today.getDate() &&
        selectedDate.getMonth() === today.getMonth() &&
        selectedDate.getFullYear() === today.getFullYear()

      return {
        date: inCurrentMonth ? date.toString() : '',
        inCurrentMonth,
        isToday,
      }
    })
}

export const getMonthText = (date) => {
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  return `${month}, ${year}`
}
