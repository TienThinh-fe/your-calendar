import { Player } from '@lordicon/react'
import { useEffect, useRef } from 'react'
import ICON from './chat.json'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const ChatIcon = () => {
  const playerRef = useRef(null)

  useEffect(() => {
    playerRef.current.playFromBeginning()
  }, [])

  return (
    <Player
      ref={playerRef}
      size={92}
      icon={ICON}
      onComplete={() =>
        wait(2000).then(() => playerRef.current?.playFromBeginning())
      }
    />
  )
}

export default ChatIcon
