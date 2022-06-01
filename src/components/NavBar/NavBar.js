
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../CartWidget/CartWidget'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import './NavBar.css'
import { Box } from '@mui/material';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor:'#000' }} className='nav'>
        <nav className="navBar">
            <AppBar className='AppBar' position="static">
                <Toolbar className='toolbar' disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                <MenuIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }} />
          </IconButton>
                    <img className='img_logo' src="../logofit.png" alt='logo' />

                    <ul className='nav_container'>
                        <li className='nav_item' ><Link className="link_nav" to="/">Home</Link></li>
                        <li className='nav_item' ><Link className="link_nav" to="/market">Market</Link></li>
                        <li className='nav_item' ><Link className="link_nav" to="/contact">Contact</Link></li>
                        <li className='nav_item' ><Link className="link_nav" to="/about">About us</Link></li>
                    </ul>
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </nav>
        </Box>
    )
}

export default NavBar;