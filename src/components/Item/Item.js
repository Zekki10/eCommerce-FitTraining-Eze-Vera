import './Item.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import cartContext from '../../context/cartContext'

export const Item = (props) => {
  const {title, price, img, id} = props;
  const { addProductToCart } = useContext(cartContext)
  const navigate = useNavigate()

  const navigateToItem = () => {
    navigate(`/product/${id}`)
  }

  return (
    <>
      <Card sx={{minwidth: 250}} className='Card'>
        <Button onClick={navigateToItem}>
          <img className='img_card' src={`/${img}`} alt="pesas"></img>
        </Button>
        <h3 className='title_card'>{title}</h3>
        <span className='price_card'>{`$${price}`}</span>
        <Button 
          variant="contained" 
          color='primary' 
          className='button_card'
          onClick={() => addProductToCart({title, price, img, id}, 1)}
        >
          Add to cart:
        </Button>
      </Card>
    </>
  )
}

