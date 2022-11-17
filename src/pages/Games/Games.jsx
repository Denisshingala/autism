import React from 'react'
import Navbar from '../../components/Navbar/NavbarComponent'
import SearchIcon from '@mui/icons-material/Search';
import StartIcon from '@mui/icons-material/Start';
import heroImg from '../../images/herogames.png'
import game1 from '../../images/game1.png';
import game2 from '../../images/game2.png';

import './Games.css'
const Games = () => {
  return (
    <>
        {/* navbar section import*/}
        <Navbar />
        {/* main section */}
        <div className=''>
            <div className='games-hero-img'>
                <img src={heroImg}/>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                  <div className='col-md-3 col-sm-12 games-left-section'>
                    <div>
                      <div className='title'>
                        Search Activites
                      </div>
                      <div className='row mt-2 mb-1'>
                        <form className='search-box'>
                          <div className='search-icon'>
                            <SearchIcon />
                          </div>
                          <div>
                            <input
                            type='text'
                            placeholder="search here.."
                            className='search-input'
                            />
                          </div>
                          <div>
                            <button className='search-submit-btn' type='reset'><StartIcon/></button>
                          </div>
                        </form>
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
                  <div className='col-md-9 col-sm-12'>
                    <div className='row games-right-section'>
                      <div className='col-md-6 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game1}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#FFE2E5"}}>Color matching card</h4>
                        </div>
                      </div>
                      <div className='col-md-6 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game2}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#D3E3DC"}}>First then cards</h4>
                        </div>
                      </div>
                      <div className='col-md-6 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game2}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#D3E3DC"}}>First then cards</h4>
                        </div>
                      </div>
                      <div className='col-md-6 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game1}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#FFE2E5"}}>Color matching card</h4>
                        </div>
                      </div>
                      <div className='col-md-6 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game1}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#FFE2E5"}}>Color matching card</h4>
                        </div>
                      </div>
                      <div className='col-md-6 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game2}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#D3E3DC"}}>First then cards</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        {/* footer section import */}
    </>
  )
}

export default Games