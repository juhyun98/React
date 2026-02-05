import React from 'react'
import darkModeContext from '../../context/darkModeContext'
import { useContext } from 'react'

const Header = () => {
    const { isDark } = useContext(darkModeContext);


  return (
    <div
        className='header'
        style={{
            backgroundColor: isDark ? "black" : "skyblue",
            color: isDark ? "white" : "black",
        }}
    >
        <h1>EST 캠프</h1>
    </div>
  )
}

export default Header