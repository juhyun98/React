import React from 'react'
import darkModeContext from '../../context/darkModeContext'
import { useContext } from 'react'

const Footer = () => {
    const { isDark, setIsDark } = useContext(darkModeContext);

  return (
    <div
        className='footer'
        style={{
            backgroundColor: isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black",
        }}
    >
        <button
            className="button"
            style={{
                backgroundColor: isDark ? "black" : "whitesmoke",
                border: isDark ? "white 1px solid" : "gray 1px solid",
                color: isDark ? "white" : "black",
                cursor: "pointer",
            }}
            onClick={() => {
                setIsDark(!isDark);
            }}
        >
            {isDark ? "라이트 모드" : "다크모드"}
        </button>
    </div>
  )
}

export default Footer