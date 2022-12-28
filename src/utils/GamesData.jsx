import CardMatchingGame from "../components/CardMatchingGame";
import Game from "../pages/Game/Game";
import { Game1, Game2, Game3 } from "../images/images";
import { useState } from "react";
import { useParams } from "react-router";
import ArrangeTheShapesGame from "../components/ArrangeTheShapesGame";

const GamesData=()=>{
    const [timer, setTimer] = useState("03:00");
    const [gameCompleted,setGameCompleted]=useState(false);
    const [gameInCompleted,setGameInCompleted]=useState(false);
    const {gameTitle}=useParams();
    const [gameLevel,setGameLevel]=useState(1);
    const onComplete=(timeTaken)=>{
        setTimer("03:00")
        setGameCompleted(true);
        console.log("complete called at sec",timeTaken);
      }
      const onInComplete=()=>{
        setGameInCompleted(true);
        console.log("incomplete called");
      }
      
    const gameDataArray =[
        {
            title: "Card matching",
            imgSrc: Game1,
            backgroundColor: "#FFE2E5",
            url: "card-matching-game",
            gameElement: <Game
                gameCompleted={gameCompleted}
                gameInCompleted={gameInCompleted}
                timer={timer}
                setTimer={setTimer}
                gameLevel={gameLevel} 
                setGameLevel={setGameLevel}
                setGameCompleted={setGameCompleted}
                setGameInCompleted={setGameInCompleted}
                gameElement={<CardMatchingGame timer={timer} CompleteCall={(timeTaken)=>{onComplete(timeTaken)}} InCompleteCall={onInComplete} gameLevel={gameLevel} setGameLevel={setGameLevel}/>}
                title="Card matching"
                details="This game can help your pupils learn to draw shapes and lines easily.You will get multiple objects for this activity.You can use our AutsiPen to make it more connected to the real world.You can get it from our Explore page."
            />,
        },
        {
            title: "First Then Game",
            imgSrc: Game2,
            backgroundColor: "#FFE2E5",
            url: "first-then-game",
            gameElement: <Game
                gameElement={<CardMatchingGame />}
                title="First Then Game"
                details="This game can help your pupils learn to draw shapes and lines easily.You will get multiple objects for this activity.You can use our AutsiPen to make it more connected to the real world.You can get it from our Explore page."
            />,
        },
        {
            title: "Arrange The Shapes",
            imgSrc: Game3,
            backgroundColor: "#FFE2E5",
            url: "arrange-the-shapes-game",
            gameElement: <Game
                gameCompleted={gameCompleted}
                gameInCompleted={gameInCompleted}
                timer={timer}
                setTimer={setTimer}
                gameElement={<ArrangeTheShapesGame timer={timer.substring(3)} CompleteCall={(timeTaken)=>{onComplete(timeTaken)}} InCompleteCall={onInComplete}/>}
                title="Arrange The Shapes"
                details="This game can help your pupils learn to draw shapes and lines easily.You will get multiple objects for this activity.You can use our AutsiPen to make it more connected to the real world.You can get it from our Explore page."
            />,
        },
    ];
    return (
        <>
        {
            gameTitle? gameDataArray && gameDataArray.map((d,i)=>{
                return d.url===gameTitle?d.gameElement:null
            }):<h1>Not Found game</h1>
        }
        </>
    )
}

export default GamesData