import React, { useState } from 'react'
import colorContext from '../../context/colorContext';
import { useContext } from 'react';

const ColorList = () => {
    const { setColor } = useContext(colorContext);
    const colorList = 
        ["red", "orange", "yellow", "green", "blue"];
    

  return (
    <div>
        <h1>색상 변경하기</h1>
        <div style={{display: "flex"}}>
            {colorList.map((e, index) =>
                <div
                    key={index}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: e,
                        cursor: "pointer",
                    }}
                    onClick={() => {setColor(e)}}
                >

                </div>
            )}
        </div>
    </div>
  )
}

export default ColorList