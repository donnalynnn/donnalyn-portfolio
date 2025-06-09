// Chatbot.js
import React, { useState } from 'react'
import { Webchat, Fab } from '@botpress/webchat'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Fab onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Webchat
          botId="YOUR_BOT_ID"
          hostUrl="https://cdn.botpress.cloud/webchat/v1"
          messagingUrl="https://messaging.botpress.cloud"
          clientId="YOUR_CLIENT_ID"
          botName="Donacat"
          theme={{
            color: '#000',
            background: '#fdfdfd',
          }}
        />
      )}
    </>
  )
}

export default Chatbot
