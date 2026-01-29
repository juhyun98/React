import React from "react";

// React 컴포넌트 만들기
// 1. 컴포넌트 함수 선언하기 (함수명은 파일명과 동일하게 유지 (권장) )
//    함수명, 파일명은 항상 대문자로 시작
const Menu = (props) => {

    // console.log(props);

    // 2. return문을 가지고 있어야 한다
    //    html요소를 return해야한다
    return (
        <div style={{
            border: "1px solid black",
            padding: "2%",
            margin: "2%",
        }}>
            <h1>{props.drink}</h1>
            <p>{props.price}원</p>
        </div>
    );
}

// 3.export를 해준다.
export default Menu;