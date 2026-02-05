import React from 'react'
import ColorList from '../components/Ex08/ColorList'
import ColorResult from '../components/Ex08/ColorResult'
import ColorProvider from '../provider/ColorProvider'


const Ex08 = () => {
/* 
    Context API란? React에서 컴포넌트간 값을 전역적으로
    공유할 수 있도록 해주는 기능

    Q. props로만 데이터를 전달했을 때 발생할 수 있는 문제?
    A. 깊숙히 위치한 커모넌트로 데이터를 전달해야 하는 경우
       => 여러 컴포넌트를 연달아서 props 설정
       => 이 과정에서 실수가 잦음
       => 이 현상을 props drilling이라고 부름

       => 그래서 전역적으로 데이터를 보관할 수 있는
          Context를 생성/관리

    [만드는 순서]
    1. context파일을 생성
      - createContext (꼭 import까지 해야함)
      - export

    2. contextProvider 컴포넌트를 생성
      - 생성한 context import
      - 하위 컴포넌트를 가져오기 위해 { children } props 사용
      - { children }을 Context.Provider로 감싼다
      - Context Provider의 value 속성에다가 관리하고자 하는
        데이터 (state, 함수 등)를 넣기

    3. 사용할 컴포넌트들을 최상위에서 contextProvider 컴포넌트로
       감싸기
    
    4. 데이터를 사용하고 싶은 컴포넌트에서 useContext를 통해
       데이터를 가져오기
       => const { 사용할 데이터 } = useContext(사용할 Context)
*/
    
  return (
    <div>
        <ColorProvider>
            <ColorList />
            <ColorResult />
        </ColorProvider>
    </div>
  )
}

export default Ex08