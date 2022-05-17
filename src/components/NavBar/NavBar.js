
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../CartWidget/CartWidget'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <nav className="navBar">
            <AppBar className='AppBar' position="static">
                <Toolbar className='toolbar' disableGutters>
                    <div className='responsiveButton'>
                        <IconButton color="inherit" >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <img className='img_logo' src="../logofit.png" alt='logo' />

                    <ul className='nav_container'>
                        <li className='nav_item'>Home</li>
                        <li className='nav_item'>Products</li>
                        <li className='nav_item'>Gym</li>
                        <li className='nav_item'>Contact</li>
                    </ul>
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </nav>
        </>
    )
}

export default NavBar;