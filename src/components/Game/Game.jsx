import BackButton from "../BackButton";
import Timer from "../Timer";
import "./Game.css";
import CardMatchingGame from "../CardMatchingGame";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import fullscreenIcon from "../../images/fullscreen-icon.svg";
import gameContainerBackground from "../../images/game-container-background.svg";

export default function Game() {
  const handle = useFullScreenHandle();

  return (
    <div className="game">
      <BackButton />
      <div className="game-header">
        <h2 className="game-title">Card matching</h2>
        <Timer mins={9} />
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
            className="fullscreen-icon-container"
            onClick={handle.active ? handle.exit : handle.enter}
            style={{
              height: "5vw",
              width: "5vw",
              position: "absolute",
              top: "0%",
              right: "0%",
              zIndex: "1",
            }}
          >
            <img src={fullscreenIcon} />
          </div>
          <CardMatchingGame />
        </div>
      </FullScreen>

      <div className="game-details">
        <h3>Details</h3>
        <p>
          This game can help your pupils learn to draw shapes and lines easily.
          You will get multiple objects for this activity. You can use our
          AutsiPen to make it more connected to the real world. You can get it
          from our Explore page.
        </p>
      </div>
    </div>
  );
}
