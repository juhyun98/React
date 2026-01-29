import Menu from "./components/Menu";

// 컴포넌트 export / import
// 기본적으로 컴포넌트도 JS모듈!
// JS모듈을 사용하기 위해서 export / import가 필수!

// 모듈 export / import 방식
// 1. CommonJS방식 (CJS)
//  - 고전적인 node.js 공식 방식
//  - node.js서버, express에서 사용하는 방식
//  - 수출 : module.exports = 모듈명
//  - 수입 : require("모듈명")

// 2. ES Module 방식 (ESM)
//  - JS표준 방식
//  - React, 브라우저 등에서 사용하는 방식
//  - 수출 : export default 모듈명;
//  - 수입 : import 모듈명 from "경로";


function App() {
    // 컴포넌트(Component)
    //  - React로 만들어진 앱을 이루는 최소 단위
    //  - 반복되는 코드를 하나로 묶어 컴포넌트를 만든다.
    //  - 내가 원하는 코드를 묶어서 태그화 시키는 것
    //  ※ 반드시 "대문자"로 시작한다! html태그와 구분하기 위함

    // 프로퍼티(props, property)
    //  - 상위 컴포넌트에서 하위 컴포넌트에 값을 전달할 때 사용
    // 상위 컴포넌트
    //  <하위컴포넌트이름 속성="값" 속성="값" ...>
    //  값이 단순 문자열인 경우 : "값"
    //  값이 다른 자료형인 경우 : {값}
    // 하위 컴포넌트
    //  함수의 매개변수로 Object(객체)형태로 값을 전달 받는다.
    //  const 컴포넌트이름 = (props) => {
    //      props.속성 <- 값이 넘어온다.
    //  }
    
    let saledPrice = "1000";

  return (
    <>
    <Menu drink="아이스티" price={3500} />
    <Menu drink="카페모카" price={4000} />
    <Menu drink="아메리카노" price={saledPrice} />
    </>
  )
}

export default App
