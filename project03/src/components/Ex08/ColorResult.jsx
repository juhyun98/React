import React from 'react'
import colorContext from '../../context/colorContext'
import { useContext } from 'react'


const ColorResult = () => {
    const { color } = useContext(colorContext);

  return (
    <div>
        <h1>선택한 색상</h1>
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: color,
            }}
        >
        </div>
    </div>
  )
}

export default ColorResult