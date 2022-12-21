import React from 'react'
import Navbar from '../../components/Navbar/NavbarComponent'
import SearchIcon from '@mui/icons-material/Search';
import StartIcon from '@mui/icons-material/Start';
import heroImg from '../../images/herogames.png'
import game1 from '../../images/game1.png';
import game2 from '../../images/game2.png';

import './Games.css'
import FooterComponent from '../../components/Footer/FooterComponent';
import GameCard from '../../components/GameCard/GameCard';
const Games = () => {
  return (
    <>
      {/* navbar section import*/}
      <Navbar />
      {/* main section */}
      <div className='games-page'>
        <div className='games-hero-img'>
          <div className='text-center page-title'>
            <h4>Learn with Fun</h4>
            <p>f a child can’t learn the way we teach, maybe we should teach the way they learn</p>
          </div>
          <img src={heroImg} alt="autism game" />
        </div>
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-3 col-sm-12 center-class'>
              <div className='games-left-section'>
              <div className=''>
                <div className='title'>
                  Search Activites
                </div>
                <div className='mt-2 mb-1'>
                  <div className='search-box'>
                    <div className='search-icon col-md-2'>
                      <SearchIcon />
                    </div>
                    <div className='col-md-8'>
                      <input
                        type='text'
                        placeholder="search here.."
                        className='search-input'
                      />
                    </div>
                    <div className='col-md-2'>
                      <button className='search-submit-btn' type='reset'><StartIcon /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className='title'>
                    Categories
                  </div>
                  <div>
                    <div className='game-ls-active'>All Games</div>
                    <div className='game-ls'>Card Games</div>
                    <div className='game-ls'>Match the pattern Games</div>
                    <div className='game-ls'>Color matching Games</div>
                    <div className='game-ls'>Communication card</div>
                    <div className='game-ls'>Dot connect</div>
                    <div className='game-ls'>Body part recognition</div>
                    <div className='game-ls'>Sentence making</div>
                    <div className='game-ls'>Arrange the shapes</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className='col-md-9 col-sm-12'>
              <div className='row games-right-section'>

                <GameCard
                imgSrc={game1}
                backgroundColor="#FFE2E5"
                gameTitle="Color matching card"
                />
                <GameCard
                imgSrc={game2}
                backgroundColor="#D3E3DC"
                gameTitle="First then cards"
                />
                 <GameCard
                imgSrc={game2}
                backgroundColor="#D3E3DC"
                gameTitle="First then cards"
                />
                <GameCard
                imgSrc={game1}
                backgroundColor="#FFE2E5"
                gameTitle="Color matching card"
                />
                <GameCard
                imgSrc={game2}
                backgroundColor="#D3E3DC"
                gameTitle="First then cards"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default Games