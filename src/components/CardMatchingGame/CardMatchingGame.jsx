import "./CardMatchingGame.css";
import { handsList } from "./utils/fakeData";
import { shuffle } from "./utils/helper";
import { DropTarget } from "react-drag-drop-container";
import { DragDropContainer } from "react-drag-drop-container";
import { useEffect, useRef, useState } from "react";

function CardMatchingGame(props) {
  const [score, setScore] = useState(0);
  const [flag,setFlag]=useState(true);
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
  console.log(props.timer)
  if(flag && (props.timer=="00" || cardMatchedList.length==4)){
    if(cardMatchedList.length==4){
      console.log("complete call");
      props.CompleteCall(props.timer);
      setFlag(false);
    }else{
      console.log("incomplete call");
      props.InCompleteCall();
    }
    
  }
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
            e.target.parentElement.style.display = "none";
            e.target.style.display = "none";
            e.dragElem.parentElement.style.display = "none";
            e.dragElem.style.display = "none";
            updateCardMatchedList((oldList) => [
              ...oldList,
              { ...handsList[e.dragData.imgId - 1] },
            ]);
            setScore(score + 1);
          }}
        >
          <DragDropContainer
            id={"con" + idx}
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
              alt="game-icons"
              className="img-fluid"
              ref={(el) => (imageRefs.current[idx] = el)}
            />
          </DragDropContainer>
        </DropTarget>
      </div>
    )
  );

  return (
    <>
      <div className="grid-container">{gameObjs}</div>
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
