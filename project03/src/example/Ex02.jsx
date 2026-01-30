import React from 'react'
import { useState } from 'react'
import img from '../assets/imgs/img.jpg'

const Ex02 = () => {
    /* 
        React에서 정적인 요소(이미지 등) 가져오는 방법
        1). src 폴더 사용
          - import 이미지변수 from 경로
          - <img src={이미지변수} />

        2). public 폴더 사용
          - 별도의 import없이, 바로 주소 접근 가능
          - 시작 경로는 '/' (루트경로)다.
          -> static파일은 public 폴더에 저장한다!!
    */

    const [like, setLike] = useState("♡");
    const [likeCount, setlikeCount] = useState(0);

    const upLike = () => {
        if (like == "♡") {
            setLike("💖");
            setlikeCount(likeCount + 1);
        } else {
            setLike("♡")
            setlikeCount(likeCount - 1);
        }
    }

    const disLike = () => {
        if (like > 0) {
            setLike(like - 1);
        }
    }

  return (
    <div>
        {/* src 폴더 방식 */}
        {/* <img src={img} alt="고양이" /> */}
        {/* public 폴더 방식 */}
        <img width="300px" src="/imgs/catimg.jpg" alt="고양이" />
        <p>
            <span 
                onClick={upLike} 
                style={{cursor:"pointer"}}>
                {like}
            </span>
            <span>좋아요 {likeCount}개</span>
        </p>
    </div>
  )
}

export default Ex02