import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({changeTheme}) => {
  return (
    <div>
        Layout
        <Sidebar changeThemelayout={changeTheme}/>
    </div>
  )
}

export default Layout