import React from 'react'
import Menu from './Menu'

const Sidebar = ({changeThemelayout}) => {
  return (
    <div>
        Sidebar
        
        <Menu changeThemeSidebar={changeThemelayout}/>    
    </div>
  )
}

export default Sidebar