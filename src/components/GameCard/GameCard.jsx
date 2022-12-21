import React from 'react'
import { useNavigate } from 'react-router'
import { unstable_HistoryRouter } from 'react-router-dom';
import './GameCard.css'
const GameCard = (props) => {
  const navigate = useNavigate();
  const handleRedirect=(gmaeId)=>{
   navigate("/game");
  }
  return (
    <div className='col-md-6 col-sm-12 game-card' onClick={()=>handleRedirect(props.gameId)}>
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