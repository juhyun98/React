import React from 'react'
import '../css/ex09.css'
import Header from '../components/Ex09/Header'
import Content from '../components/Ex09/Content'
import Footer from '../components/Ex09/Footer'
import DarkModeProvider from '../provider/DarkModeProvider'

const Ex09 = () => {
    // 다크 모드 <-> 라이트 모드 실습

    // STEP 1. 다크 코드와 라이트 모드를 서로 전환하기 위한
    //         Context를 세팅
    // - darkModeContext.js 파일 생성
    // - DarkModeProvider.jsx 파일 생성
    // - DarkModeProvider 컴포넌트에는 다크모드를 구별할 수 있는
    //   isDark라는 state 선언 (true / false)
    //    => true면 다크 모드, false면 라이트 모드

    // STEP 2. DarkModeProvider 컴포넌트는 Header, Content, Footer
    //         컴포넌트를 감싸기

    // STEP 3. Header, Content 컴포넌트에서 isDark 불러와 사용하기
    //         Footer 컴포넌트에서 isDark, setIsDark 불러와 사용하기

    // STEP 4. 다크모드 / 라이트모드에 따라서 배경색과 글자색 변경
    //         이때 삼항연산자 사용
    
  return (
    <div className='page'>
        <DarkModeProvider>
            <Header />
            <Content />
            <Footer />
        </DarkModeProvider>
    </div>
  )
}

export default Ex09