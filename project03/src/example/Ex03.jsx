import React, { useState } from 'react'

const Ex03 = () => {
    // 랜덤게임 실습
    // STEP 1. 버튼을 클릭 시, 내가 누른 버튼의 숫자를 inputNum에 저장
    // STEP 2. 1번과 동시에 컴퓨터는 랜덤한 숫자를 뽑는다 (범위 1~3) => ranNum에 저장
    // STEP 3. 내가 누른 버튼의 숫자 === 컴퓨터의 랜덤한 숫자
    //         같다면 : "정답입니다" 출력
    //         다르다면 : "땡~!" 출력
    //         (if문 사용하지 않기를 권장. return문 안에 삼항연산자 사용)
    const [inputNum, setinputNum] = useState(0);
    const [ranNum, setranNum] = useState(0);
    
    
    const handleBtn = (e) => {
        setinputNum(e.target.innerText);
        let random = Math.floor(Math.random() * 3 + 1);
        setranNum(random);
    }

  return (
    <div>
        <button onClick={handleBtn}>1</button>
        <button onClick={handleBtn}>2</button>
        <button onClick={handleBtn}>3</button>

        <div>
            <p>내가 선택한 숫자 : {inputNum}</p>
            <p>컴퓨터가 뽑은 랜덤 숫자 : {ranNum}</p>
            <hr />
            <p>{(Number(inputNum) === Number(ranNum)) ? "정답입니다!" : "땡~!"}</p>
        </div>
    </div>


  )
}

export default Ex03