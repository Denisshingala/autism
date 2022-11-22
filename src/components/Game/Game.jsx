import BackButton from "../BackButton";
import Timer from "../Timer";
import "./Game.css";
import CardMatchingGame from "../CardMatchingGame";

export default function Game() {
  return (
    <div className="game">
      <BackButton />
      <div className="game-header">
        <h2 className="game-title">Card matching</h2>
        <Timer mins={9} />
      </div>
      <CardMatchingGame />
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
