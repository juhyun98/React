import React, { useState } from 'react'
import DarkModeContext from '../context/darkModeContext'

const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);


  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
        {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider