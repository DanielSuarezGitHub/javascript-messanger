import React from 'react'
import Conversation from './Conversation'
import Sendchat from './Sendchat'
export default function Chat() {
  return (
    <div className='chat'>
        <div className='chatBar'>
            <span>John Doe</span>
        </div>
        <Conversation/>
        <Sendchat/>
    </div>
  )
}
