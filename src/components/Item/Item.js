import './Item.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'


export const Item = (props) => {
  const {title, price, img} = props;

  return (
    <Card sx={{minwidth: 250}} className='Card'>
      <img className='img_card' src={`./${img}.jpg`} alt="pesas"></img>
      <h3 className='title_card'>{title}</h3>
      <span className='price_card'>{`$${price}`}</span>
      <ItemCount />
      <Button variant="outlined" className='button_card'>Add to cart:</Button>
    </Card>
  )
}

