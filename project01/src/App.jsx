
function App() {

    /* 
        JSX : 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성
         => 가독성이 좋고, 작성이 쉽다
         => HTML과 JS의 분리감이 적다.

         - JSX는 확장자가 기본적으로 .jsx (.js로도 사용은 가능!)

        [JSX 문법 특징]
        1. 여러 요소가 있을 경우, 반드시 하나의 부모요소로 감싸줄 것!
           이 때, 꼭 div가 아니어도 가능 (다른 태그, <></>(빈태그)도 가능)

        2. HTML작성 부분에는 JS사용을 위해서, {}를 쓸 수 있다!
           이 때, {}안에는 표현식(expression)만 가능
           구문(statement)는 사용 불가능

        3. 조건문 사용
          3.1). 삼항연산자 -> return문 안에 {조건식 ? true실행 : false실행}
          3.2). &&연산자 -> return문 안에 {조건식 && true실행}
          3.3). if문 -> return문 안에는 사용 불가!
                        JS를 작성하는 부분에서는 얼마든지 사용 가능

        4. HTML의 class 속성을 사용할 때는,
           class대신 className을 사용한다!

        5. 인라인 스타일(CSS) 적용시에는, 객체 형태로 style 속성에 삽입

        6. HTML 태그 사용 시, 무조건 소문자만 사용
           끝태그는 생략이 불가능
           <br /> 가능
           <br> 불가능
    */


    // JS 작성 부분

    let name = "신정욱";
    let nameStyle = {
        backgroundColor : "black",
        color : "pink",
        fontSize : "30px",
    };



  return (
    // HTML 작성하는 부분
    
    <div className="container">
        <h1 style={nameStyle}>{name}님의 홈페이지입니다.</h1>

        {/* 조건식 (삼항연산자 사용) */}
        {name === "신정욱" ? <p>환영합니다</p> : <p>로그인해주세요.</p>}

        {/* 조건식 (&&연산자 사용) */}
        {name === "신정욱" && <a>회원정보보기</a>}

        <br />
        <span>끝태그는</span>
        <br />
        <span>생략 불가능</span>

        <h1>Hello React!!</h1>
    </div>

  )
}

export default App
