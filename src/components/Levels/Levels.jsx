import React, { useState } from "react";
import "./Levels.css";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Levels = (props) => {
  const [level,setLevel]=useState(10)
  const unLock=props.gameLevel;
  console.log("props.gameLevel at Levels",props.gameLevel)
  const handleGameLevelClick=(gamelevel)=>{
    props.setGameLevel(gamelevel);
    props.onPlayClick();
    // props.setGameLevel(gamelevel);
  }
  const renderelements=()=>{
    let data=[];
    for(let i=1;i<=level;i++){
      if(Number(i)<=unLock){
        if(Number(i)%2==0){
          data.push(<div className="level-box" onClick={()=>{handleGameLevelClick(i)}} style={{background:'linear-gradient(rgba(0, 255, 0, 0.15), rgba(0, 255, 0, 0.15)), url("../../images/level-card-bg.png");'}}>{i>0 && i<=9 ?'0'+i:i}</div>)
        }else{
          data.push(<div className="level-box-green" onClick={()=>{handleGameLevelClick(i)}} style={{background:'linear-gradient(rgba(0, 0, 255, 0.15), rgba(0, 0, 255, 0.15)), url("../../images/level-card-bg.png");'}}>{i>0 && i<=9 ?'0'+i:i}</div>)
        }
      }else{
        data.push(<div className="level-box-locked" style={{background:'rgba(211, 211, 211,1)'}}><LockOutlinedIcon style={{fontSize:"2rem"}}/></div>)
      }
    }
    return (data);
  }
  return (
    <>
      <div className="container levels-outer-div">
          {
            renderelements()
          }
      </div>
    </>
  );
};

export default Levels;
