import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import VideoModel from "../../components/VideoModel/VideoModel";
import './LearnPlayModel.css'
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
  };


const LearnPlayModel = (props) => {
const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    
  return (
    <>
    <Button onClick={handleOpen}></Button>
      <Modal
        disablePortal={true}        
        container={() => document.getElementById('game-div')}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <Box sx={{ ...style, width: "400" }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <div className='d-flex justify-content-between'>
          <VideoModel />
          <Button onClick={()=>{
                handleClose();
                props.onPlayClick();
          }}> Play </Button>
          </div>
        </Box>

      </Modal>   
    </>
  )
}

export default LearnPlayModel