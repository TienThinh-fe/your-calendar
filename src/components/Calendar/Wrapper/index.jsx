import PropTypes from 'prop-types'
import './style.css'

const Wrapper = ({ children }) => {
  return <div className="calendar-wrapper">{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper
