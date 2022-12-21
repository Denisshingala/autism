import "./CardMatchingGame.css";
import { handsList } from "./utils/fakeData";
import { shuffle } from "./utils/helper";
import { DropTarget } from "react-drag-drop-container";
import { DragDropContainer } from "react-drag-drop-container";
import { useEffect, useRef, useState } from "react";

function CardMatchingGame() {
  const [score, setScore] = useState(0);
  console.log(score);

  const [positions, setPositions] = useState(
    shuffle(new Array(12).fill(0).map((_, i) => i))
  );
  console.log(positions);

  const [cardMatchedList, updateCardMatchedList] = useState([]);
  console.log(cardMatchedList);

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, positions.length);
  }, [positions]);

  const gameCells = new Array(12).fill(0);
  handsList.forEach((hands, idx) => {
    const rightHandPosition = positions[2 * idx];
    const leftHandPosition = positions[2 * idx + 1];

    gameCells[rightHandPosition] = {
      ...hands,
      img: hands.img.r,
      target: leftHandPosition,
    };

    gameCells[leftHandPosition] = {
      ...hands,
      img: hands.img.l,
      target: rightHandPosition,
    };
  });

  console.log(gameCells);
  const gameObjs = gameCells.map((cell, idx) =>
    cell === 0 ? (
      <div className="game-object" key={idx}>
        <img src={`${cell.img}.png`} alt="" />
      </div>
    ) : (
      <div className="game-object" key={idx}>
        <DropTarget
          targetKey={idx.toString()}
          onHit={function (e) {
            console.log(e);
            e.target.style.visibility = "hidden";
            e.dragElem.style.visibility = "hidden";
            updateCardMatchedList((oldList) => [
              ...oldList,
              { ...handsList[e.dragData.imgId - 1] },
            ]);
            setScore(score + 1);
          }}
        >
          <DragDropContainer
            targetKey={cell.target}
            dragData={{
              imgRef: imageRefs.current,
              idx: idx,
              imgId: cell.id,
            }}
            onDragStart={(data) => {
              const img = data.imgRef[data.idx];
              const gameObj = document.querySelector(".game-object");
              img.style.width = `${gameObj.clientWidth}px`;
            }}
          >
            <img
              src={`${cell.img}.png`}
              alt=""
              ref={(el) => (imageRefs.current[idx] = el)}
            />
          </DragDropContainer>
        </DropTarget>
      </div>
    )
  );

  return (
    <>
      <div className="game-container grid-container">{gameObjs}</div>
      <div className="game-result-container">
        {cardMatchedList.map((cell) => (
          <div key={cell.id} style={{ display: "flex", width: "20%" }}>
            <div>
              <img className="CardMatchingGame-img" src={`${cell.img.l}.png`} draggable={false} alt="" />
            </div>
            <div>
              <img className="CardMatchingGame-img" src={`${cell.img.r}.png`} draggable={false} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardMatchingGame;
