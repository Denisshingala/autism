import "./Game.css";

export default function Game() {
  return (
    <div className="game">
      {/* <BackButton /> */}
      <div className="game-header">
        <div className="game-title">Card matching</div>
        <div className="game-timer">Remaining Time: 09:00</div>
      </div>
    </div>
  );
}
