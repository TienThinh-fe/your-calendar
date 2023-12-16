import useMonthStore from '../../stores/Month'
import { getMonthText } from '../../utils'

import './style.css'

export const Bar = () => {
  const [currentSelectedMonth, setCurrentSelectedMonth] = useMonthStore(
    (state) => [state.currentSelectedMonth, state.setCurrentSelectedMonth],
  )

  const month = getMonthText(currentSelectedMonth)

  const handlePrev = () => {
    const date = new Date(currentSelectedMonth)
    date.setMonth(date.getMonth() - 1)

    setCurrentSelectedMonth(date)
  }

  const handleNext = () => {
    const date = new Date(currentSelectedMonth)
    date.setMonth(date.getMonth() + 1)

    setCurrentSelectedMonth(date)
  }

  return (
    <div className="bar">
      <div className="bar__logo">
        <h1>Calendar</h1>
      </div>
      <div className="bar__menu">
        <div className="bar__menu--prev">
          <button onClick={handlePrev}>
            <img src="public/arrow.png" />
          </button>
        </div>
        <div className="bar__menu--month">{month}</div>
        <div className="bar__menu--next">
          <button onClick={handleNext}>
            <img src="public/arrow.png" />
          </button>
        </div>
      </div>
    </div>
  )
}
