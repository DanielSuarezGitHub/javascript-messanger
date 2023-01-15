import React from 'react'
import Chat from './Chat'
import Sidepanel from './Sidepanel'
export default function Main() {
  return (
    <div className="mainContainer">
        <div className="mainWrapper">
            <Sidepanel/>
            <Chat/>
        </div>
    </div>
  )
}
