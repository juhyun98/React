import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dice from '../components/Dice';
import "../css/ex04.css";

const Ex04 = () => {
    // 주사위 게임 실습
    // STEP 1. 유저가 던지기 버튼 클릭 => throwDice 함수 실행
    // STEP 2. throwDice 함수 내용
    //         1). 나의 숫자 : 1~6까지 랜덤으로 뽑힌다
    //         2). 컴퓨터의 숫자 : 1~6까지 랜덤으로 뽑힌다
    //         3). Dice컴포넌트에 각각의 숫자 전달
    // STEP 3. Dice 컴포넌트에서는 숫자를 전달받아서 숫자에 따른 이미지 출력
    // STEP 4. 나의 숫자 < 컴퓨터의 숫자, 나 == 컴퓨터 : 패배
    //         나의 숫자 > 컴퓨터의 숫자 : 승리
    //         if문 대신, 삼항연산자 사용 권장
    // STEP 5. RESET버튼 클릭 시 => resetDice 함수 실행
    // STEP 6. resetDice 함수 내용
    //         1). 나의 숫자, 컴퓨터의 숫자 전부 1로 변경
    //         2). Dice컴포넌트에도 1을 각각 전달

    const [myNum, setmyNum] = useState(1);
    const [comNum, setcomNum] = useState(1);

    const throwDice = () => {
        setmyNum(Math.floor(Math.random() * 6 + 1));
        setcomNum(Math.floor(Math.random() * 6 + 1));
    }

    const resetDice = () => {
        setmyNum(1);
        setcomNum(1);
    }
    
    
  return (
    <div className='box'>
        <h1>주사위 게임</h1>

        <div>
            <Button onClick={throwDice}>던지기</Button> {" "}
            <Button onClick={resetDice} variant='danger'>RESET</Button>
        </div>

        <div className='dice-container'>
            <Dice name="나" num={myNum}></Dice>
            <Dice name="컴퓨터" num={comNum}></Dice>
        </div>
        
        <h2>{(myNum > comNum) ? "승리" : myNum == comNum ? "무승부" : "패배"}</h2>
    </div>
  )
}

export default Ex04