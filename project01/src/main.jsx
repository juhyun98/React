// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './AppExample.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode는 리액트 프로젝트가 문제가 있는지 검사해주는 역할
  // 하지만 그 과정에서 리액트 프로젝트를 2회 실행
  // 개발 과정에서 삭제하는 것이 일반적
//   <StrictMode>
    <App />
//   </StrictMode>,
)
