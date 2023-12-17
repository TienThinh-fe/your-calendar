import PropTypes from 'prop-types'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import useMonthStore from '@/stores/Month'

import './style.css'

const RemoveAll = ({ day }) => {
  const removeAllTasks = useMonthStore((state) => state.removeAllTasks)

  const handleClick = () => {
    removeAllTasks(day)
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="Button tomato">Remove all</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            This action cannot be undone. Are you ready to enjoy free day?
          </AlertDialog.Description>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'flex-end',
              marginTop: 4,
            }}
          >
            <AlertDialog.Cancel asChild>
              <button className="Button mauve">Changed my mind</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="Button red" onClick={handleClick}>
                Yes, free day!
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

RemoveAll.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    inCurrentMonth: PropTypes.bool,
    isToday: PropTypes.bool,
  }),
}

export default RemoveAll
