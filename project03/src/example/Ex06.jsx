import React from 'react'
import data from '../json/ex06.json'
import Ex06tag from '../components/Ex06tag';

const Ex06 = () => {
    // 구조분해할당을 이용해서 객체에서 특정 key값만
    // 변수로 할당해서 빼내올 수 있다.
    const { result } = data;
    
    // 실습 : 포토카드 만들기
    // STEP 1. json 데이터의 result 내의 배열 데이터를
    //         각각의 연예인 Ex06Card.jsx에 부여하기
    // STEP 2. map함수를 이용해서 Ex06Card.jsx를 화면에 반복 렌더링
    // STEP 3. filter함수를 이용해서 1994년생보다 나이가 많거나 같은
    //         연예인만은 따로 하단에 출력(map함수 사용)

    console.log(result);
    
  return (
    <div>
        <h1>목록</h1>
        <div style={{
            display: "flex",
        }}>
            {/* Ex06Card를 각각의 연예인별로 반복 렌더링 */}
            {result
                .map( (e, index) =>
                    <Ex06tag key={index} title={result[index].title} imgSrc={result[index].imgSrc} content={result[index].content} sns={result[index].SNS} />
                )}
        </div>
        <hr />
        <h1>1994년생보다 나이가 많거나 같은 연예인</h1>
        <div style={{
            display: "flex"
        }}>
            {/* 실습 : Ex06Card를 1994년생보다 나이가 많거나 같은 연예인별로 반복 렌더링 */}
                {result
                    .filter(e => e.birthYear <= 1994)
                    .map( (e, index) =>
                        <Ex06tag key={index} title={result[index].title} imgSrc={result[index].imgSrc} content={result[index].content} sns={result[index].SNS} />
                )}
        </div>
    </div>
  )
}

export default Ex06