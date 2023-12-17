import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import PropTypes from 'prop-types'
import Info from './Info'

import './style.css'

const Dialog = ({ children, day, ...props }) => (
  <Root {...props}>
    <Trigger asChild>{children}</Trigger>
    <Portal>
      <Overlay className="DialogOverlay" />
      <Content className="DialogContent">
        <Info day={day} />

        <Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Close>
      </Content>
    </Portal>
  </Root>
)

Dialog.propTypes = {
  children: PropTypes.node,
  day: PropTypes.shape({
    date: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    inCurrentMonth: PropTypes.bool,
    isToday: PropTypes.bool,
  }),
  open: PropTypes.bool,
}

export default Dialog
