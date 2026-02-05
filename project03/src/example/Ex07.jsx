import React, { useState } from 'react'
import Ex07SubItem from '../components/Ex07SubItem'

const Ex07 = () => {
/* 
    리액트는 단방향 데이터 흐름을 가지고 있다.
    상위(부모) 컴포넌트에서 하위(자식) 컴포넌트로 값을 전달하는 것은
    가능하지만 반대 방향은 전달이 불가능 (props를 사용)
*/

const [inputData, setinputData] = useState("");
const [inputDataSub, setinputDataSub] = useState("");

const changeData = (e) => {
    // console.log(e.target.value);
    setinputData(e.target.value);
}

const changeDataSub = (e) => {
    setinputDataSub(e.target.value);
}

  return (
    <div>
        <h2>컴포넌트 간 양방향 데이터 전달을 해보자</h2>
        <p>
            1-1. 상위에서 입력한 정보 : 
            <input type="text" onChange={changeData} />
        </p>
        <Ex07SubItem 
            inputData={inputData} 
            changeDataSub={changeDataSub}    
        />
        <p>
            2-2. 하위에서 입력한 정보를 상위에서 출력 : {inputDataSub}
        </p>
    </div>
  )
}

export default Ex07