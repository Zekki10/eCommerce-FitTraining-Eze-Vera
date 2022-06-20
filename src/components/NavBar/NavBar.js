
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../CartWidget/CartWidget'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import './NavBar.css'

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event.preventDefault()
        setAnchorEl(event.target);
    };
    const handleClose = (category) => {
        setAnchorEl(null);

    };

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
                        <li className='nav_item' >
                            <Link className="link_nav" to="/"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Market
                            </Link>
                            <Menu
                                className="link_menu_nav"
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClick={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                sx={{
                                    top:'18px',
                                    transform: 'translateX(-25px)',
                                    
                                }}
                            >   
                                <MenuItem onClick={handleClose}><Link className="link_menu_nav" to='/market'><strong>Market</strong></Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link className="link_menu_nav" to='/products/accessories'>Accessories</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link className="link_menu_nav" to="/products/box">Box</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link className="link_menu_nav" to="/products/funcional">Funcional</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link className="link_menu_nav" to="/products/kits">Kits</Link></MenuItem>
                            </Menu>
                        </li>
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