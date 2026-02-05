import React from 'react'
import darkModeContext from '../../context/darkModeContext'
import { useContext } from 'react'

const Content = () => {
    const { isDark } = useContext(darkModeContext);

  return (
    <div
        className='content'
        style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black",
        }}
    >
        <h3>좌우명 : </h3>
    </div>
  )
}

export default Content