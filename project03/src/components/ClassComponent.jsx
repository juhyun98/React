import React, { Component } from 'react'

export class ClassComponent extends Component {
    /* 
        Class Component
        - React에서 컴포넌트는 함수형, 클래스형 2가지가 존재
        - 함수형 컴포넌트의 경우에는 state, LifeCycle 등이 없음
        - React Hook이 도입되면서 그 기능들을 함수형에서도
          사용할 수 있게 되었다.
        - react Hook은 일반적으로 use~ 의 형태를 띈다.
        - 함수형 프로그래밍이 유행하게 되면서 React에서도 이를
          지원하기 위한 React Hook이 도입
    */

    // 1. 생성자 : 최초 생성
    //  => state 관리, 변수 선언, 함수 선언,
    //     화면을 구성하기 위한 초기 데이터 관리
    constructor(props) {
        console.log("1. constructor");
        

        super(props);

        this.state = {
            num : 0,
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState({
            num : this.state.num + 1
        })
    }
    handleDecrement() {
        this.setState({
            num : this.state.num - 1
        })
    }

    // 3. 화면이 렌더링 된 직후 실행
    //  역할 : API Call, 무거운 데이터 읽어오기, 타이머 기능
    //        사용자들은 조금이라도 화면이 먼저 떠야 "빠르다"라고 느낌
    //        그렇기 때문에 화면을 먼저 띄우고(render 이후)
    //        무거운 작업을 수행해야 한다!
    componentDidMount() {
        console.log("3. componentDidMount");
        
    }

    // 4. 갱신이 일어난 직후 실행
    //  역할 : state나, props의 값이 갱신되었을 때, 실행
    //        (useRef는 제외)
    componentDidUpdate() {
        console.log("4. componentDidUpdate");
    }

    // 5. 컴포넌트가 제거되기 직전 실행
    //  역할 : 타이머, 이벤트 리스너, 네트워크 연결 등 정리(clean-up)
    componentWillUnmount() {
        console.log("5. componentWillUnmount");
        
    }

    // 2. render 함수 : 화면을 구성
    //  => render에서 사용할 state나 함수는 생성자에 미리
    //     만들어져 있어야만 한다.
    render() {
        console.log("2. render");
        
        return (
            <div>
                <h1>Counter {this.state.num}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
            </div>
        )
    }
}
export default ClassComponent