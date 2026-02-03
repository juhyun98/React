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
        <li key="a">a</li>,
        <li key="b">b</li>,
        <li key="c">c</li>,
        <li key="d">d</li>
    ]

    const teacherList = ["정형", "신정욱", "김운비", "박병관", "류이수"];
    const newTeacherList = teacherList.map((e, index) => <h1 key={index}>{e} 선생님</h1>);

    // 객체 배열을 통해서 map함수 사용
    const people = [
        {name : "홍길동", age : 30, bloodType : "A"},
        {name : "고길동", age : 60, bloodType : "AB"},
        {name : "둘리", age : 10, bloodType : "O"},
    ];

    // <></>를 사용하는 map함수
    const flowers = [
        {name : "장미", mean : "사랑과 열정"},
        {name : "튤립", mean : "고백과 설렘"},
        {name : "해바라기", mean : "당신만 바라봅니다"},
    ];

    /* 
        2. filter 함수 : 기존 배열에서 조건을 주고,
           해당 조건이 true면 요소를 유지, false면 삭제한 형태의
           새로운 배열을 반환
           - 기존배열.filter(콜백함수)

          ※ 콜백함수의 형태
          (element, index, array) => {
            return 조건식 
          }
          - index, array는 생략 가능
          - 조건식이 true인 요소만으로 새롭게 배열 생성

        ※ map함수와 filter함수의 가장 큰 차이점
           map함수의 결과로 생성된 새로운 배열의 길이는 항상 원형이 배열의 길이와 같다!
           filter함수의 결과로 생성된 새로운 배열의 길이는 원형의 배열의 길이와
           같을 수도 있고, 다를 수도 있다.
    */

    const intList = [1, 2, 3, 4, 5];
    const evenList = intList.filter(num => num % 2 === 0);
    console.log(evenList);

    const fruits = [
        "apple",
        "orange",
        "banana",
        "pineapple",
        "strawberry",
        "peach",
    ];
    const resFruits = fruits.filter(e => e.length > 6);
    console.log(resFruits);
    
    

  return (
    <div>
        <ul>
            {liList}
        </ul>
        {newTeacherList}
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>혈액형</th>
                </tr>
            </thead>
            <tbody>
                {/* {people.map( (e, index) => 
                    <tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.bloodType}</td>
                    </tr>
                )} */}
                {/* 30살 이상인 사람만 출력 */}
                {people
                    .filter(e => e.age >= 30)
                    .map( (e, index) =>
                        <tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.bloodType}</td>
                    </tr>
                    )}
            </tbody>
        </table>
        {/* 
            map함수를 사용해서, 요소를 2개 이상 출력할 때
            <></> (빈태그)를 쓰고 싶다면,
            그 원형인 <React.Fragment>의 형태로 사용해야만 한다!
             => <></>형태로는 key props를 쓸 수 없기 때문!!
        */}
        {flowers.map( (e, index) =>
            <React.Fragment key={index}>
                <h2>{e.name}</h2>
                <p>{e.mean}</p>
            </React.Fragment>
        )}
        <hr />
        {/* map만을 사용해서 화면 출력(렌더링) */}
        {/* {fruits.map( (e, index) => <p key={index}>{e}</p>) } */}
        {/* filter와 amp을 사용해서 화면 출력(렌더링) */}
        {/* {resFruits.map( (e, index) => <p key={index}>{e}</p>)} */}
        {fruits
            .filter(e => e.length > 6)
            .map( (e, index) => <p key={index}>{e}</p>)}
    </div>
    
  )
}

export default Ex05