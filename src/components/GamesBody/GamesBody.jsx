import React from 'react'
import { FormControl, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StartIcon from '@mui/icons-material/Start';
import heroImg from '../../images/herogames.png'
import GameCard from '../../components/GameCard/GameCard';
import { NavLink } from 'react-router-dom';
import GamesData from '../../utils/GamesData';

const GamesBody = () => {
    return (
        <>
            <div className='games-hero-img'>
                <div className='text-center page-title mt-2'>
                    <h4>Learn with Fun</h4>
                    <p>f a child can’t learn the way we teach, maybe we should teach the way they learn</p>
                </div>
                <img src={heroImg} alt="autism game" />
            </div>
            <div className="container-fluid games-page-body">
                <div className="left-section">
                    <div className="title">
                        Search Activities
                    </div>
                    <FormControl variant="standard" >
                        <TextField
                            required
                            className="search-bar"
                            id="outlined-required"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                endAdornment: <InputAdornment position="end"><Button className="search-btn"><StartIcon /></Button></InputAdornment>,
                            }}
                        />
                    </FormControl>
                    <div className='title'>
                        Categories
                    </div>
                    <div className='w-100'>
                        <NavLink to="" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>All Games</NavLink><br />
                        <NavLink to="/card-game" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Card Games</NavLink><br />
                        <NavLink to="/pattern-matching" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Match the pattern Games</NavLink><br />
                        <NavLink to="/card-matching" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Color matching Games</NavLink><br />
                        <NavLink to="/communication-card" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Communication card</NavLink><br />
                        <NavLink to="/dot-connect" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Dot connect</NavLink><br />
                        <NavLink to="/body-part-recognition" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Body part recognition</NavLink><br />
                        <NavLink to="/sentence-making" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Sentence making</NavLink><br />
                        <NavLink to="/arrange-shape" className={({ isActive }) => 'game-ls ' + (isActive ? 'game-ls-active' : '')}>Arrange the shapes</NavLink><br />
                    </div>
                </div>
                <div className="right-section">
                    {GamesData.map((data, index) => {
                        return <GameCard
                            gameUrl={data.url}
                            imgSrc={data.imgSrc}
                            backgroundColor={data.backgroundColor}
                            gameTitle={data.title}
                            key={index}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default GamesBody