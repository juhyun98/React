import React from 'react'

const Dice = ( { name, num } ) => {

  return (
    <div className='dice-area'>
        <h3>{name}</h3>
        <img src={`/imgs/dice${num}.png`} alt="주사위" />
    </div>
  )
}

export default Dice