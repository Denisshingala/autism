import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import {CardMatchingVid} from '../../images/images'
import './VideoModel.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 0,
    px: 0,
    pb: 0,
  };
const VideoModel = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>  
        <Button className='learn-play-btn' onClick={handleOpen}>Learn</Button>
      <Modal
        disablePortal={true}
        container={() => document.getElementById('game-div')}
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
        <Button className='vidplay-close-btn' onClick={handleClose}>X</Button>
            <CardMedia
            src={CardMatchingVid}
            component='video'
            autoPlay
            />
          
        </Box>
      </Modal>
    </>
  )
}

export default VideoModel