import React from 'react'

const Ex05 = () => {
    /* 
        1. map함수 : 기존 배열을 이용해서 새로운 배열을 만드는 배열 함수
           - 기존배열.map(콜백함수)

        ※ 콜백함수의 형태
        (element, index, array) => {
            return 새로운 배열 규칙
        }
        index와 array는 생략이 가능
    */

    // 1). 가장 축약된 형태의 콜백함수
    // const callbackFunc = num => num * 2;

    // 2). 콜백함수의 원형
    // const callbackFunc = (num, index, array) => {
    //     console.log(num);
    //     console.log("index", index);
    //     console.log("array", array);
    //     return num * 2;
    // }

    // 3). 인자값의 소괄호의 생략 해제
    // 함수의 인자값이 1개인 경우, 소괄호가 생략이 가능
    // const callbackFunc = (num) => num * 2;

    // 4). 중괄호와 return의 동시 생략 해제
    // 함수의 코드블럭을 만드는 중괄호와 return은 동시 생략이 가능
    // 반드시 동시에 생략되어야만 한다!
    // 함수 내의 내용이 무조건 return문 1줄만 있어야 한다!!
    const callbackFunc = num => {return num * 2;}

    const list = [1, 2, 3, 4, 5];
    const resList = list.map(callbackFunc);
    console.log(resList);
    
    // react에서는 배열 안에, html요소 혹은 컴포넌트를 넣는 것이 가능
    const liList = [
        <li>a</li>,
        <li>b</li>,
        <li>c</li>,
        <li>d</li>
    ]

  return (
    <div>
        <ul>
            {liList}
        </ul>
    </div>
    
  )
}

export default Ex05