import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import VideoModel from "../../components/VideoModel/VideoModel";
import './LearnPlayModel.css'
import { LearnPlayImg } from '../../images/images';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 4,
    px: 4,
    pb: 4,
    overflow:'',
    height:'220px'
    
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
        container={() => document.getElementById("game-div")}
        open={open}
        onClose={handleClose}
        disableEnforceFocus={false}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ ...style, width: "500px" }}>
          {/* <div className=""> */}
            <div className="text-center">
              <h3 id="w-100 parent-modal-description">Please choose any one</h3>
            </div>
            <div className="mt-4 d-flex justify-content-around align-items-center">
              <VideoModel />
              <Button
                className="learn-play-btn"
                onClick={() => {
                  handleClose();
                  props.onPlayClick();
                }}
              >
                {" "}
                Play{" "}
              </Button>
            </div>
            {/* <div className="d-flex justify-content-center learn-play-img-div"> */}
              <img src={LearnPlayImg} className="learn-play-img" />
            {/* </div> */}
          {/* </div> */}
        </Box>
      </Modal>
    </>
  );
}

export default LearnPlayModel