import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// ========== [STEP 1. 상태(state) 관리] =============
// 1. useState개념 + React Event 사용법
// import App from "./example/Ex01.jsx"

// 2. useState 좋아요 실습
// import App from "./example/Ex02.jsx"

// 3.useState 랜덤게임 실습
// import App from "./example/Ex03.jsx"

// 4.useState 주사위 게임 실습 (bootstrap 사용)
// import App from "./example/Ex04.jsx"

// ============ [STEP 2. 배열함수를 이용한 렌더링] ============
// 5. map, filter 함수 사용
import App from "./example/Ex05.jsx"

createRoot(document.getElementById('root')).render(
    <App />
)
