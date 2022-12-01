import React from 'react'
import { NavLink } from 'react-router-dom';
import logoPath from '../../images/logo.png';
import { Search as SearchIcon, Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { Box, SwipeableDrawer, Button, List, Divider, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import './Navbar.css';

const Navbar = () => {

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem>
                    <form className='navbar-form'>
                        <input type="search" name="search" className="navbar-search-input" placeholder='Search...' />
                        <button type="submit" name='submit' className='search-btn'><SearchIcon /></button>
                    </form>
                </ListItem>
                <Divider />
                {Object.entries({ 'explore': 'Explore', 'games': 'Games', 'contact-us': 'Contact Us', 'pricing': 'Pricing' }).map(([key, value]) => (
                    <ListItem key={key} disablePadding>
                        <ListItemButton>
                            <NavLink to={'/' + key} className={({ isActive }) => isActive ? 'active-link navbar-link' : 'navbar-link'}> <ListItemText primary={value} /> </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to='/setting' className={({ isActive }) => isActive ? 'active-link navbar-link' : 'navbar-link'}> <ListItemText primary='Setting' /> </NavLink>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <nav className="nav-bar">
                {/* <button class='menu-btn' id='menu-btn'><MenuIcon /></button> */}
                <div className="container-fluid w-100">
                    <NavLink to="/" className=" navbar-link"><img src={logoPath} alt="Autism Logo" /></NavLink>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active-link navbar-link main-navbar-link' : 'navbar-link main-navbar-link'}>Explore</NavLink>
                    <NavLink to="/games" className={({ isActive }) => isActive ? 'active-link navbar-link main-navbar-link' : 'navbar-link main-navbar-link'}>Games</NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active-link navbar-link main-navbar-link' : 'navbar-link main-navbar-link'}>Contact Us</NavLink>
                    <NavLink to="/pricing" className={({ isActive }) => isActive ? 'active-link navbar-link main-navbar-link' : 'navbar-link main-navbar-link'}>Pricing</NavLink>
                    <NavLink to="/setting" className={({ isActive }) => isActive ? 'active-link navbar-link main-navbar-link' : 'navbar-link main-navbar-link'}>Setting</NavLink>
                    <IconButton className='float-end ms-3 profile-btn'>
                        <AccountCircle fontSize="large" />
                    </IconButton>
                    <form className='navbar-form float-end main-navbar-link'>
                        <input type="search" name="search" className="navbar-search-input" placeholder='Search...' />
                        <button type="submit" name='submit' className='search-btn'><SearchIcon /></button>
                    </form>
                    <React.Fragment>
                        <Button className="menu-btn float-end mx-0 my-2" onClick={toggleDrawer(true)}><MenuIcon /></Button>
                        <SwipeableDrawer
                            open={state}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            className='box'
                        >
                            {list()}
                        </SwipeableDrawer>
                    </React.Fragment>
                </div>
            </nav>
        </>
    );
}

export default Navbar;