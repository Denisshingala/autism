import BackButton from "../../components/BackButton";
import Timer from "../../components/Timer";
import "./Game.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import gameContainerBackground from "../../images/game-container-background.svg";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import React, { useState } from "react";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ArrangeTheShapesGame from "../../components/ArrangeTheShapesGame/ArrangeTheShapesGame";
import { useNavigate } from "react-router";
import { CardMatchingThumb, Game1, Game2 } from "../../images/images";
import LearnPlayModel from "../../components/LearnPlayModel/LearnPlayModel";
import AfterGamePlay from "../../components/AfterGamePlay/AfterGamePlay";
import CardMatchingGame from "../../components/CardMatchingGame";
import Levels from "../../components/Levels/Levels";


export default function Game(props) {
  const handle = useFullScreenHandle();
  const navigate=useNavigate();
  const [levelScreen,setLevelScreen]=useState(false)
  const [repeatTimer,setRepeatTimer]=useState(false);
  const [last10SecsRemaining, setLast10SecsRemaining] = useState(false);
  const [startFlag,setStartFlag]=useState(false)
  const [learnPlayModel,setLearnPlayModel]=useState(true);
  const [gameStarted,setGameStarted]=useState(false);
  const onNewLevelClick=()=>{
    console.log("new level btn clicked")
    setLevelScreen(false)
    props.setGameCompleted(false);
    props.setGameInCompleted(false);
    setStartFlag(true)
    repeatTimer(true)
  }
  const onPlayClick=()=>{
    setLearnPlayModel(false);
    setGameStarted(true);
    setStartFlag(true);
  }

  return (
    <div className="game">
      <BackButton onClick={()=>{navigate(-1)}}/>
      <div className="game-header">
        <h2 className="game-title">{props.title}</h2>
        <Timer
          repeatTimer={repeatTimer}
          secs={180}
          onLast10SecsRemaining={() => setLast10SecsRemaining(true)}
          onTimerChange={(timer) => props.setTimer(timer)}
          startFlag={startFlag}
        />
      </div>

      <FullScreen handle={handle} id="game-div">
        <div
          className="game-container"
          style={{
            backgroundImage: startFlag && !(gameStarted&&(props.gameCompleted||props.gameInCompleted))?`url(${gameContainerBackground})`:`url(${gameContainerBackground})`,
            backgroundSize:startFlag && !(gameStarted&&(props.gameCompleted||props.gameInCompleted))?handle.active?"100% auto" : "100% auto":handle.active?"100%" : "100% 65vh",
            height:startFlag && !(gameStarted&&(props.gameCompleted||props.gameInCompleted))?handle.active?"100vh" : "":handle.active?"100vh" : "65vh",
            width:"100%",
            position: handle.active?"fixed":'relative',
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "fit-content",
                zIndex: 1,
                visibility:
                  handle.active && last10SecsRemaining ? "visible" : "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                paddingRight: "6vw",
              }}
            >
              Remaining Time:
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                  fontSize: "2rem",
                  marginLeft: "10px",
                }}
              >
                {props.timer.substring(3)}
              </span>
            </div>

            <div
              className="fullscreen-icon-container"
              onClick={handle.active ? handle.exit : handle.enter}
            >
              {handle.active ?
                <FullscreenExitIcon />
                :
                <FullscreenIcon />
              }
            </div>
          </div>
          {
            levelScreen?<div className="levelscreen"><Levels gameLevel={props.gameLevel} onPlayClick={onNewLevelClick} setGameLevel={props.setGameLevel}/></div>:learnPlayModel?<LearnPlayModel onPlayClick={onPlayClick}/>:gameStarted && (props.gameCompleted || props.gameInCompleted)?<AfterGamePlay gameLevel={props.gameLevel} setGameLevel={props.setGameLevel}  levelScreen={levelScreen} setLevelScreen={setLevelScreen} Completed={props.gameCompleted} setStartFlag={setStartFlag}/>:props.gameElement
          }    
          {
            console.log("updated game lvl",props.gameLevel)
          }
          
        </div>
      </FullScreen>
      <div className="game-details">
        <h3>Details</h3>
        <p>
          {props.details}
        </p>
      </div>
    </div>
  );
}
