import { useEffect, useState } from 'react'
import useMonthStore from '../../stores/Month'
import { generateMonthData } from '../../utils'
import DateComponent from './Date'
import CalendarHeader from './Header'
import Wrapper from './Wrapper'

import './style.css'

export const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState([])
  const currentSelectedMonth = useMonthStore(
    (state) => state.currentSelectedMonth,
  )

  useEffect(() => {
    const selectedDate = new Date(currentSelectedMonth)
    const month = generateMonthData(selectedDate)

    setSelectedMonth(month)
  }, [currentSelectedMonth])

  return (
    <Wrapper>
      <CalendarHeader />
      <div className="calendar">
        {selectedMonth.map((day, index) => (
          <DateComponent key={index} day={day} />
        ))}
      </div>
    </Wrapper>
  )
}
