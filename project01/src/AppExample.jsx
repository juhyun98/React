function AppExample () {
    // React JSX문법 실습
    // STEP 1. prompt를 통해서 사용자에게 이름을 입력받는다
    let userName = prompt("이름을 입력해주세요.");

    // STEP 2. 오늘 날짜를 가져온다
    //         new Date(); => 오늘 날짜 가져오기
    //         .toLocaleDateString(); => 날짜 문자열 정리하기
    let today = new Date();
    let todayString = today.toLocaleDateString();

    let todayMonth = today.getMonth() + 1;

    let season;

    if (todayMonth >= 3) {
        season = "봄";
    } else if (todayMonth >= 6) {
        season = "여름";
    } else if (11 >= todayMonth >= 9) {
        season = "가을"
    } else {
        season = "겨울"
    }

    // STEP 3. 현재 월에 따른 계절을 대입
    //         .getMonth() + 1; => 현재 달 가져오기
    //         3~5 : 봄
    //         6~8 : 여름
    //         9~11 : 가을
    //         12, 1~2 : 겨울


    return (
        // STEP 4. 결과창 구성하기
        // 오늘 날짜
        // 000님 지금은 겨울입니다. 좋은 하루 보내세요!

        <>
            <h1>{todayString}</h1>
            <hr />
            <h2>{userName}님 지금은 {season}입니다. 좋은 하루 보내세요!</h2>
        </>
    );
}

export default AppExample;