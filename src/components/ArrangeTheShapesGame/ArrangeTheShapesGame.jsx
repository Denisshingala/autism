// import "./ArrangeTheShapesGame.css";
// // import Draggable from "react-draggable";
// import { shuffle } from "./utils/helper";
// import { useEffect } from "react";
// import { useState } from "react";
// // import { useEffect, useState } from "react";

// const shapesData = [
//   {
//     id: 1,
//     color: "#F6DE84",
//     width: "200px",
//     height: "40px",
//   }ž
//   {
//     id: 2,
//     color: "#00A6E9",
//     width: "300px",
//     height: "40px",
//   },
//   {
//     id: 3,
//     color: "#FFA7F6",
//     width: "400px",
//     height: "40px",
//   },
// ];

function ArrangeTheShapesGame(props) {
//   const [score, setScore] = useState(0);
//   const [flag, setFlag] = useState(true);
//   const [shuffledShapes] = useState(shuffle([...shapesData]));
//   const [totalMatchedShapes, setTotalMatchedShapes] = useState(0);

//   const isShapeArranged = (id) => {
//     let sourcePos = document
//       .getElementById(`source-${id}`)
//       ?.getBoundingClientRect();
//     let targetPos = document
//       .getElementById(`target-${id}`)
//       ?.getBoundingClientRect();

//     if (!sourcePos || !targetPos) {
//       return false;
//     }

//     if (
//       Math.abs(sourcePos.x - targetPos.x) < 20 &&
//       Math.abs(sourcePos.y - targetPos.y) < 20
//     ) {
//       document.getElementById(`source-${id}`).style.display = "none";
//       document.getElementById(`target-${id}`).style.backgroundColor = `${
//         shapesData[id - 1].color
//       }`;
//       setTotalMatchedShapes(totalMatchedShapes + 1);
//       setScore(score + 1);
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   console.log(totalMatchedShapes);
//   if (flag && (props.timer === "00" || totalMatchedShapes === 3)) {
//     if (totalMatchedShapes === 3) {
//       console.log("complete call");
//       props.CompleteCall(props.timer);
//       setFlag(false);
//     } else {
//       console.log("incomplete call");
//       props.InCompleteCall();
//     }
//   }

//   return (
//     <>
//       <div
//         className="d-flex justify-content-between align-items-center p-5 "
//         style={{ height: "60vh" }}
//       >
//         <div style={{ width: "50%" }} className="d-flex flex-column">
//           {shapesData &&
//             shuffledShapes.map((shape, index) => {
//               return (
//                 <Draggable
//                   bounds={".game-container"}
//                   onStop={(e, d) => {
//                     if (isShapeArranged(d.node.dataset.name)) {
//                       console.log("yes");
//                     } else {
//                       console.log("no");
//                     }
//                   }}
//                 >
//                   <div
//                     id={`source-${shape.id}`}
//                     data-name={`${shape.id}`}
//                     style={{
//                       width: `${shape.width}`,
//                       height: `${shape.height}`,
//                       backgroundColor: `${shape.color}`,
//                       border: "1px solid rgba(0,0,0,0.5)",
//                       margin: "20px 0",
//                     }}
//                   ></div>
//                 </Draggable>
//               );
//             })}
//         </div>

//         <div style={{ width: "50%" }} className="d-flex">
//           <div className="d-flex flex-column align-items-center">
//             {shapesData &&
//               shapesData.map((shape, index) => {
//                 return (
//                   <div
//                     id={`target-${shape.id}`}
//                     style={{
//                       width: `${shape.width}`,
//                       height: `${shape.height}`,
//                       backgroundColor: "#00000033",
//                       border: "1px solid rgba(0,0,0,0.5)",
//                     }}
//                     key={index}
//                   ></div>
//                 );
//               })}
//           </div>
//           {/* <div className="d-flex flex-column">
//             {shapesData &&
//               shapesData.map((shape, index) => {
//                 return (
//                   <div
//                     style={{
//                       width: `${shape.width / 2}`,
//                       height: `${shape.height / 2}`,
//                       backgroundColor: `${shape.color}`,
//                       border: "1px solid rgba(0,0,0,0.5)",
//                     }}
//                   ></div>
//                 );
//               })}
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
}

export default ArrangeTheShapesGame;
