import React from 'react'

const Ex07SubItem = ({ inputData, changeDataSub }) => {


  return (
    <div>
        <p>
            1-2. 상위에서 입력한 정보를 하위에서 출력 : {inputData}
        </p>
        <hr />
        <p>
            2-1. 하위에서 입력한 정보 : 
            <input type="text"  onChange={changeDataSub}/>
        </p>
    </div>
  )
}

export default Ex07SubItem