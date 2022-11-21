import BackButton from "../BackButton";
import Timer from "../Timer";
import "./Game.css";
import CardMatchingGame from "../CardMatchingGame";

export default function Game() {
  return (
    <div className="game">
      <BackButton />
      <div className="game-header">
        <div className="game-title">Card matching</div>
        <Timer mins={9} />
      </div>
      <CardMatchingGame />
    </div>
  );
}
