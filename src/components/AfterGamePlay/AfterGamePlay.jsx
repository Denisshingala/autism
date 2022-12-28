import React, { useEffect, useRef, useState } from 'react'
import './AfterGamePlay.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Completed, Tryagain } from '../../images/images';
import { useNavigate } from 'react-router';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    TransitionDelay:'2s',
    display:'flex'
  };


const AfterGamePlay = (props) => {
    const [open, setOpen] = useState(true);
    const timer = useRef(null);
    const navigate=useNavigate();
    const handleOpen = () => {
        timer.current=setTimeout(() => {
                setOpen(true);
            }, 2000)
        return () => clearTimeout(timer);
     }
    const handleClose = () => {
      setOpen(false);
    };
    const handleNextLevel=()=>{
      console.log("function called game level updated",props.gameLevel)
      props.setStartFlag(false);
      props.setGameLevel(props.gameLevel+1)
      props.setLevelScreen(true);
      
    }
    return (
      <>
      {props.Completed?<><Button onClick={handleOpen}></Button>
        <Modal
          disableEscapeKeyDown={true}
          disablePortal={true}
          hideBackdrop={true}
          container={() => document.getElementById('game-div')}
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: "40%",height:"50%" }}>
            <div className='game-complted-div'>
                <div className='col-md-6 col-sm-12 text-center'>
                    <img src={Completed}/>
                </div>
                <div className='col-md-6 col-sm-12 text-center'>
                    <h3>Well Done!!</h3>
                    <Button className='next-game-btn' onClick={()=>{handleNextLevel()}}>Next Level</Button>
                </div>
            </div>
          </Box>
  
        </Modal></>:<><Button onClick={handleOpen}></Button>
        <Modal
          disablePortal={true}
          disableEscapeKeyDown={true}
          hideBackdrop={true}
          container={() => document.getElementById('game-div')}
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: "40%",height:"50%" }}>
            <div className='game-complted-div'>
                <div className='col-md-6 col-sm-12 text-center'>
                    <img src={Tryagain}/>
                </div>
                <div className='col-md-6 col-sm-12 text-center'>
                    <h3>Oops!!</h3>
                    <Button className='next-game-btn' onClick={()=>{navigate(-1)}}>Try Again</Button>
                </div>
            </div>
          </Box>
  
        </Modal></>}
      
    </>
  )
}

export default AfterGamePlay