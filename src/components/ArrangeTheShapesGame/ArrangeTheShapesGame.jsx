import "./ArrangeTheShapesGame.css";
import Draggable from "react-draggable";
import { shuffle } from "./utils/helper";
import { useState } from "react";

const shapesData = [
  {
    id: 1,
    color: "#F6DE84",
    width: "100px",
    height: "40px",
  },
  {
    id: 2,
    color: "#00A6E9",
    width: "200px",
    height: "40px",
  },
  {
    id: 3,
    color: "#FFA7F6",
    width: "250px",
    height: "40px",
  },
  {
    id: 4,
    color: "#E4897B",
    width: "300px",
    height: "40px",
  },
  {
    id: 5,
    color: "#F7997B",
    width: "350px",
    height: "40px",
  },
  {
    id: 6,
    color: "#F9127C",
    width: "400px",
    height: "40px",
  },
];

function ArrangeTheShapesGame(props) {
  let currentLevelData = [];
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(true);
  for (let i = 0; i <= props.gameLevel + 1; i++) {
    currentLevelData.push(shapesData[i]);
  }
  const [shuffledShapes] = useState(shuffle([...currentLevelData]));
  const [totalMatchedShapes, setTotalMatchedShapes] = useState(0);

  const isShapeArranged = (id) => {
    let sourcePos = document
      .getElementById(`source-${id}`)
      ?.getBoundingClientRect();
    let targetPos = document
      .getElementById(`target-${id}`)
      ?.getBoundingClientRect();
    if (!sourcePos || !targetPos) {
      return false;
    }
    if (
      Math.abs(sourcePos.x - targetPos.x) < 20 &&
      Math.abs(sourcePos.y - targetPos.y) < 20
    ) {
      document.getElementById(`source-${id}`).style.display = "none";
      document.getElementById(`target-${id}`).style.backgroundColor = `${
        shapesData[id - 1].color
      }`;
      setTotalMatchedShapes(totalMatchedShapes + 1);
      setScore(score + 1);
      return true;
    } else {
      return false;
    }
  };

  if (
    flag &&
    (props.timer === "00" || totalMatchedShapes === Number(props.gameLevel) + 2)
  ) {
    if (totalMatchedShapes === Number(props.gameLevel) + 2) {
      console.log("complete call");
      props.CompleteCall(props.timer);
      setFlag(false);
    } else {
      console.log("incomplete call");
      props.InCompleteCall();
    }
  }

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center p-5 "
        style={{ height: "60vh" }}
      >
        <div style={{ width: "50%" }} className="d-flex flex-column">
          {shapesData &&
            shuffledShapes.map((shape, index) => {
              console.log(`index:${index}, level:${props.gameLevel}`);
              console.log(index > Number(props.gameLevel) + 1);
              if (index > Number(props.gameLevel) + 1) {
                return <></>;
              } else {
                return (
                  <Draggable
                    bounds={".game-container"}
                    onStop={(e, d) => {
                      if (isShapeArranged(d.node.dataset.name)) {
                        console.log("yes");
                      } else {
                        console.log("no");
                      }
                    }}
                  >
                    <div
                      id={`source-${shape.id}`}
                      data-name={`${shape.id}`}
                      style={{
                        width: `${shape.width}`,
                        height: `${shape.height}`,
                        backgroundColor: `${shape.color}`,
                        border: "1px solid rgba(0,0,0,0.5)",
                        margin: "20px 0",
                      }}
                    ></div>
                  </Draggable>
                );
              }
            })}
        </div>
        <div style={{ width: "50%" }} className="d-flex">
          <div className="d-flex flex-column align-items-center">
            {shapesData &&
              shapesData.map((shape, index) => {
                if (index > Number(props.gameLevel) + 1) {
                  return <></>;
                } else {
                  return (
                    <div
                      id={`target-${shape.id}`}
                      style={{
                        width: `${shape.width}`,
                        height: `${shape.height}`,
                        backgroundColor: "#00000033",
                        border: "1px solid rgba(0,0,0,0.5)",
                      }}
                      key={index}
                    ></div>
                  );
                }
              })}
          </div>
          {/* <div className="d-flex flex-column">
              {shapesData &&
                shapesData.map((shape, index) => {
                  return (
                    <div
                      style={{
                        width: `${shape.width / 2}`,
                        height: `${shape.height / 2}`,
                        backgroundColor: `${shape.color}`,
                        border: "1px solid rgba(0,0,0,0.5)",
                      }}
                    ></div>
                  );
                })}
            </div> */}
        </div>
      </div>
    </>
  );
}

export default ArrangeTheShapesGame;
