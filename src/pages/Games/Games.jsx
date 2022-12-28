import React from 'react'
import Navbar from '../../components/Navbar/NavbarComponent'
import './Games.css'
import FooterComponent from '../../components/Footer/FooterComponent';
import { Outlet } from 'react-router';


const Games = () => {
    return (
        <>
            {/* navbar section import*/}
            <Navbar />
            {/* main section */}
            <div className='games-page'>
                <Outlet />
            </div>
            <FooterComponent />
        </>
    )
}

export default Games