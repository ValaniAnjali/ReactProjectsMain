import React from 'react'
import ThemeButton from './ThemeButton'

const Menu = ({changeThemeSidebar}) => {
  return (
    <div>
        Menu
        <ThemeButton changeThemeMenu={changeThemeSidebar}/>
    </div>
  )
}

export default Menu