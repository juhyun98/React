// MemberBox 컴포넌트 만들기
// 확장프로그램 ES7 React/..snippets 설치
// rafce -> React Arrow Function Component Export

import React from "react";

const MemberBox = ({team, name, name2, name3, name4}) => {
    return (
        <div style={{
            border: "1px solid black",
            padding: "2%",
            margin: "2%",
        }}>
            <h1>{team}</h1>
            <p>팀장 : {name}</p>
            <p>팀원 : {name2}</p>
            <p>팀원 : {name3}</p>
            <p>팀원 : {name4}</p>
        </div>
    );
}

// 3.export를 해준다.
export default MemberBox;