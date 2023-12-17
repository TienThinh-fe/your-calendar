import cn from 'classnames'
import PropTypes from 'prop-types'
import Dialog from './DateDetail'

import './style.css'

const Date = ({ day }) => {
  const { date, inCurrentMonth, isToday } = day

  return inCurrentMonth ? (
    <Dialog day={day}>
      <div
        className={cn('calendar__date', {
          'calendar__date--current': inCurrentMonth,
          'calendar__date--today': isToday,
        })}
      >
        <span>{date}</span>
      </div>
    </Dialog>
  ) : (
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
    date: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    inCurrentMonth: PropTypes.bool,
    isToday: PropTypes.bool,
  }),
}

export default Date
