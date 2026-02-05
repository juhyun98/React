import React, { useRef } from 'react'

const Ex10 = () => {
    /* 
        uesRef
        - React Hook의 한 종류, Ref는 reference(참조)의 줄임말
        - state와 비슷하게 저장공간으로 사용하지만,
          변경 시 렌더링을 발생시키면 안되는 경우 사용
        - Vanila JS에서 특정 DOM요소에 접근할 때 처럼,
          React에서 DOM요소 접근이 필요한 경우에 사용

        - 장점 : state처럼 변경될 때마다 렌더링을 발생시키지 않기 때문에
          성능적으로 우위
        - 대표적인 사용 예시 : input태그를 포커싱하는 경우

        [사용방법]
        1. useRef import하기
           import { useRef } from "react";
        2. 선언과 초기값 할당
           const 이름 = useRef();
        3. 참조할 요소에 ref 속성을 이용해서 useRef를 연결
           <input ref={이름} />
        4. 요소의 사용 : 이름.current
           - 마치 Vanila JS에서 DOM요소를 사용한 것처럼 사용 가능

        ※ useRef는 React의 약점을 보완하기 위해서 등장한 개념으로
           가급적이면 너무 남발하지 않는 편이 좋다!
    */

    const nameFocus = useRef();

    const handleReset = () => {
        // console.log(nameFocus.current.value);
        nameFocus.current.value = "";
        nameFocus.current.focus();
        
    }

  return (
    <div>
        <h1>useRef</h1>
        <input type="text" ref={nameFocus} />
        <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Ex10