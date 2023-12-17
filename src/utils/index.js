import dayjs from 'dayjs'

export const getCurrentMonth = () => {
  const date = new Date()

  return date
}

export function generateMonthData(selectedDate) {
  let startDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1,
  ).getDay()
  startDay = startDay === 0 ? 6 : startDay - 1 // Adjust so Monday is 0, Sunday is 6

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
        date: inCurrentMonth ? date : null,
        month: selectedDate.getMonth() + 1, // months are 0-indexed in JavaScript
        year: selectedDate.getFullYear(),
        inCurrentMonth,
        isToday,
        tasks: [],
      }
    })
}

export const getMonthText = (date) => {
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  return `${month}, ${year}`
}

export const getFullDateText = (day) => {
  const { date, month, year } = day

  return dayjs(`${year}-${month}-${date}`).format('DD, MMMM YYYY')
}
