import React from 'react'
import Navbar from '../../components/Navbar/NavbarComponent'
import heroImg from '../../images/herogames.png'
import game1 from '../../images/game1.png';
import game2 from '../../images/game2.png';
const GameDetails = () => {
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
                  <div className='col-md-12 col-sm-12'>
                    <div className='row'>
                      <div className='col-md-3 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game1}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#FFE2E5"}}>Color matching card</h4>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game2}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#D3E3DC"}}>First then cards</h4>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game2}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#D3E3DC"}}>First then cards</h4>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game1}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#FFE2E5"}}>Color matching card</h4>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-12 game-card'>
                        <div className='game-card-img'>
                          <img src={game1}/>
                        </div>
                        <div className='game-card-title'>
                          <h4 style={{background:"#FFE2E5"}}>Color matching card</h4>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-12 game-card'>
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

export default GameDetails