
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import './NavBar.css'

//Componente Material
const pages = ['Productos', 'Nutrición', 'Extras'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className='AppBar' position="static">
        <Toolbar disableGutters>
          <img className='img_logo' src="../logofit.png" alt='logo' />

          <ul className='nav_container'>
            <li className='nav_item'>Home</li>
            <li className='nav_item'>Products</li>
            <li className='nav_item'>Gym</li>
            <li className='nav_item'>Contact</li>
          </ul>
        </Toolbar>
    </AppBar>
  );
};


const NavBar = () => {
    return (
        <>
            <nav className="navBar">
                <ResponsiveAppBar />
            </nav>
        </>
    )
}

export default NavBar;