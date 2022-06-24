import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

import './menuResponsive.css'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({left: false});
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({left: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200, zIndex:10}}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      className='box_list'
    >
    <img className='img_logo_responsive img_logo' src="../logofit_black.png" alt='logo' />
    <Divider />
      <List>   
          <ListItem >
            <ListItemButton onClick={toggleDrawer('left', false)}>
              <Link className="link_nav_responsive" to={`/`}>
                <ListItemText primary={'Home'} />
              </Link>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
      <ListItemButton onClick={handleClick}>
        <Link className="link_nav_responsive" to={`/Market`}>
          <ListItemText primary="Market"></ListItemText>
        </Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List>
        {['Accessories', 'Box', 'Funcional', 'Kits'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={toggleDrawer('left', false)}>
              <Link className="link_nav_responsive" to={`/products/${text.toLowerCase()}`}>
                <ListItemText className='submenu_item' primary={text}/>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>
      </List>
      <Divider />
      <List>   
          <ListItem >
            <ListItemButton onClick={toggleDrawer('left', false)}>
              <Link className="link_nav_responsive" to={`/contact`}>
                <ListItemText primary={'Contact'} />
              </Link>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>   
          <ListItem >
            <ListItemButton onClick={toggleDrawer('left', false)}>
              <Link className="link_nav_responsive" to={`/about`}>
                <ListItemText primary={'About us'} />
              </Link>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='menu-responsive_container'>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}            
            edge="start"
            sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1, fontSize:'2rem' }} />
        </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
    </div>
  );
}