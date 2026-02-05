import React, { useState } from 'react'
import ClassComponent from '../components/ClassComponent';

const Ex11 = () => {
    const [isShow, setIsShow] = useState(true);


  return (
    <div>
        <h1>React 생명주기 (클래스형 컴포넌트)</h1>
        <button 
            onClick={() => setIsShow(!isShow)}
        >
            Toggle
        </button>
        {isShow && <ClassComponent />}
    </div>
  )
}

export default Ex11