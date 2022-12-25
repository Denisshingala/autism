import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import './GameCard.css';

const GameCard = (props) => {
  const navigate = useNavigate();
  const handleRedirect = (gameUrl) => {
    navigate("/" + gameUrl);
  }
  return (
    <>
      {/* <div className='game-card' >
        <div className='game-card-img'>
          <img src={ } alt="autism game" />
        </div>
        <div className='game-card-title'>
          <h4 ></h4>
        </div>
      </div> */}
      <Card sx={{ maxWidth: 345, margin: 1 }} className='shadow-lg game-card'>
        <CardActionArea style={{ height: "100%" }} onClick={() => handleRedirect(props.gameId)}>
          <CardMedia
            component="img"
            image={props.imgSrc}
            alt="green iguana"
            className="img-fluid card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='card-title' style={{ background: props.backgroundColor }}>
              {props.gameTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default GameCard