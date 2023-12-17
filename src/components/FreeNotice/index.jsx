import { RocketIcon } from '@radix-ui/react-icons'

import './style.css'

const FreeNotice = () => {
  return (
    <div className="free-notice">
      <div className="free-notice-icon">
        <RocketIcon />
      </div>
      <div className="free-notice-content">
        <div className="free-notice-content-title">You have the free date!</div>
      </div>
    </div>
  )
}

export default FreeNotice
