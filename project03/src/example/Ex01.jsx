import React from 'react'
import { useState } from 'react'

const Ex01 = () => {
    /* 
        React Event
         : react에서 이벤트를 등록할 때는 "on이벤트"를 사용
        1. onClick : camelCase로 작성
        2. {}를 사용 (""를 사용하지 않는다!)
        3. {}안에 함수 이름만 작성 (함수 실행을 위한 소괄호 사용 않는다!)
        4. { () => {}} 형태로도 사용 가능 -> onClick={() => {}}
        5. HTML요소에만 이벤트 설정이 가능하다.
           - 내가 만든 컴포넌트에는 이벤트 설정 불가능
           - 컴포넌트에 이벤트를 주고 싶다면, 컴포넌트 내부의
             HTML 요소에 이벤트를 줘야 한다!
    */

    // 변수를 통한 화면의 값 증가
    // 기존 JavaScript에서는 p요소를 가져와서
    // p요소.innerText에 새롭게 변수를 넣어주는 것으로
    // 화면을 변경 가능!
    //  -> React에서는 document를 통한 요소 가져오기가 불가능!!
    //  -> 변수를 통한 화면의 값 증가 사용 불가능!!
    //  -> React에서는 state를 사용!!

    // state : component 내부에서 변경 가능한 데이터
    //  => 데이터가 변경되면 UI(화면)이 같이 변경됨
    // useState 사용방법
    // 1. useState import하기
    //    import { useState } from 'react'
    // 2. state변수 선언하기
    //    const [state명, setState명] = useState(초기값)
    //    ex). const [text, setText] = useState("Hello");
    // 3. state변수 값 변경
    //    setState명 함수를 사용
    //    ex). setText("Hello World");

    // let num = 0; 변수로는 화면 변경이 어렵다!!

    const [num, setNum] = useState(0);

    const increase = () => {
        // console.log("증가함수 실행");
        // num++;
        setNum(num + 1)
    }

    const decrease = () => {
        // console.log("감소함수 실행");
        // num--;
        setNum(num - 1)
    }


  return (
    <div>
        <p>{num}</p>
        <button onClick={increase}>+1</button> {/* React는 함수에 () 사용하지 않는다 */} 
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex01