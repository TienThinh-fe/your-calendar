import { useEffect } from 'react'
import useMonthStore from '../../stores/Month'
import { generateMonthData } from '../../utils'
import DateComponent from './Date'
import CalendarHeader from './Header'
import Wrapper from './Wrapper'

import './style.css'

export const Calendar = () => {
  const [monthData, setMonthData] = useMonthStore((state) => [
    state.monthData,
    state.setMonthData,
  ])

  const currentSelectedMonth = useMonthStore(
    (state) => state.currentSelectedMonth,
  )

  useEffect(() => {
    const selectedDate = new Date(currentSelectedMonth)
    const newMonth = generateMonthData(selectedDate)

    setMonthData(newMonth)
  }, [currentSelectedMonth, setMonthData])

  return (
    <Wrapper>
      <CalendarHeader />
      <div className="calendar">
        {monthData.map((day, index) => (
          <DateComponent key={index} day={day} />
        ))}
      </div>
    </Wrapper>
  )
}
