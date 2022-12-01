import React from 'react'
import './GameCard.css'
const GameCard = (props) => {
  return (
    <div className='col-md-6 col-sm-12 game-card'>
        <div className='game-card-img'>
          <img src={props.imgSrc} alt="autism game" />
        </div>
        <div className='game-card-title'>
          <h4 style={{ background: props.backgroundColor }}>{props.gameTitle}</h4>
        </div>
    </div>
  )
}

export default GameCard