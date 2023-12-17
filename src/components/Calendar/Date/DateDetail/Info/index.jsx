import { getFullDateText } from '@/utils'
import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area'
import PropTypes from 'prop-types'

import FreeNotice from '@/components/FreeNotice'
import './scrollArea.css'
import './style.css'
import AddTask from '../AddTask'
import RemoveAll from '../RemoveAll'

const Info = ({ day }) => {
  const { tasks } = day

  return (
    <div className="info">
      <div className="info-fullDate">{getFullDateText(day)}</div>
      <div className="info-todo">
        <Root className="ScrollAreaRoot">
          <Viewport className="ScrollAreaViewport">
            <div className="info-todo-content">
              {tasks.length > 0 ? (
                <>
                  <div className="info-todo-title">Your todo</div>
                  <ul>
                    {tasks.map((item, index) => (
                      <li className="info-todo-content-item" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <FreeNotice />
              )}
            </div>
          </Viewport>
          <Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
            <Thumb className="ScrollAreaThumb" />
          </Scrollbar>
          <Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
            <Thumb className="ScrollAreaThumb" />
          </Scrollbar>
          <Corner className="ScrollAreaCorner" />
        </Root>
      </div>

      <div className="info-action">
        <RemoveAll day={day} />
        <AddTask day={day} />
      </div>
    </div>
  )
}

Info.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    inCurrentMonth: PropTypes.bool,
    isToday: PropTypes.bool,
    tasks: PropTypes.array,
  }),
}

export default Info
