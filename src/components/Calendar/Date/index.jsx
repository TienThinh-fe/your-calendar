import PropTypes from 'prop-types'
import cn from 'classnames'

import './style.css'

const Date = ({ day }) => {
  const { date, inCurrentMonth, isToday } = day

  return (
    <div
      className={cn('calendar__date', {
        'calendar__date--current': inCurrentMonth,
        'calendar__date--today': isToday,
      })}
    >
      <span>{date}</span>
    </div>
  )
}

Date.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.string,
    inCurrentMonth: PropTypes.bool,
    isToday: PropTypes.bool,
  }),
}

export default Date
