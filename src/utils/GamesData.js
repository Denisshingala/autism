import CardMatchingGame from "../components/CardMatchingGame";
import Game from "../pages/Game/Game";
import { Game1, Game2 } from "../images/images";

const GamesData = [
    {
        title: "Card matching",
        imgSrc: Game1,
        backgroundColor: "#FFE2E5",
        url: "card-matching-game",
        gameElement: <Game
            gameElement={<CardMatchingGame />}
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
    }
];

export default GamesData