import React, { useState, useEffect } from 'react'

const FunctionComponent = () => {
    // 1. 생성자 대체 (state, 변수, 함수 선언)
    //  => 화면을 구성하기 위한 준비물들을 이쪽에서 선언
    //  => state, props 등의 값이 변경되었을 때, render와 함께
    //     다시 실행되는 특징을 가지고 있다.
    //     (constructor와의 차이)
    console.log("1. constructor 대체");
    
    const [num, setNum] = useState(0);

    // 3. 화면 마운트
    //  => componentDidMount()를 대체
    //  useEffect(콜백함수, 빈배열)
    useEffect(() => {
        console.log("3. 화면 Mount완료");
        
    }, [])

    // 4. 값 update
    //  => componentDidUpdate()를 대체
    //  - 첫 렌더링때도 실행되는 특징을 가지고 있다. 
    //    (componentDidUpdate와의 차이)
    //  - 변화를 감지하는 대상은 복수가 될 수 있다.
    // useEffect(콜백함수, [변화 감지 대상])
    useEffect(() => {
        console.log("4. 값 변화 완료");
    }, [num])

    // 5. 화면 unmount
    //  => componentWillUnmount()를 대체
    //  useEffect(() => {
    //    return () => {이곳에서 unmount를 확인}
    //  }, [빈배열])
    useEffect(() => {

        return () => {
            console.log("5. 컴포넌트 Unmount");
        }
    }, []);



    const handleIncrement = () => {
        setNum(num + 1);
    }
    
    const handleDecrement = () => {
        setNum(num - 1);
    }

  return (
    <div>
        {/* 
            2. render 대체
             => 화면 구성
         */}
         {console.log("2. 화면 rendering")}
        <h1>Counter {num}</h1>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
    </div>
  )
}

export default FunctionComponent