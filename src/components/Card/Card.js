import './Card.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';






export const CardItem = (props) => {
  const {img, title, price} = props;
    return (
        <Card sx={{minwidth: 250}} className='Card'>
          <img className='img_card' src={`./${img}`} alt="pesas"></img>
          <h3 className='title_card'>{title}</h3>
          <span className='price_card'>{`$${price}`}</span>
          <Button variant="outlined" className='button_card'>Comprar</Button>
      </Card>

    )
}

