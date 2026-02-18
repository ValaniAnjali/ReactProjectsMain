import React, { useContext } from 'react'
import { ThemeContext } from './store/ThemeContext'
const ThemeButton = () => {
    const themeCtx=useContext(ThemeContext)
  return (
    <div>
        ThemeButton
        <button onClick={themeCtx.changeTheme}>Change Theme</button>
        </div>
  )
}

export default ThemeButton