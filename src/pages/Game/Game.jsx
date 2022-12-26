import BackButton from "../../components/BackButton";
import Timer from "../../components/Timer";
import "./Game.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import gameContainerBackground from "../../images/game-container-background.svg";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useState } from "react";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// import { useNavigate } from "react-router";

export default function Game(props) {
  const handle = useFullScreenHandle();
  // const navigate=useNavigate();
  const [last10SecsRemaining, setLast10SecsRemaining] = useState(false);
  const [timer, setTimer] = useState("00:00");

  return (
    <div className="game">
      <BackButton />
      <div className="game-header">
        <h2 className="game-title">{props.title}</h2>
        <Timer
          secs={15}
          onLast10SecsRemaining={() => setLast10SecsRemaining(true)}
          onTimerChange={(timer) => setTimer(timer)}
        />
      </div>

      <FullScreen handle={handle}>
        <div
          className="game-container"
          style={{
            backgroundImage: `url(${gameContainerBackground})`,
            height: handle.active ? "100vh" : "",
            width: "100%",
            position: "relative",
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
                {timer.substring(3)}
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
          {props.gameElement}
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
