import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'
export default function Sidepanel() {
  return (
    <div className='sidePanel'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}
