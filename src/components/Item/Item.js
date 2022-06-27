import './Item.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import cartContext from '../../context/cartContext'

export const Item = (props) => {
  const {title, price, img, id} = props;
  const { addProductToCart } = useContext(cartContext)
  const [added, setAdded] = useState(false)
  const navigate = useNavigate()
  

  const navigateToItem = () => {
    navigate(`/product/${id}`)
  }
  const handleClick = () => {
    addProductToCart({title, price, img, id}, 1)
    setAdded(true)


  }

  return (
    <>
      <Card sx={{minwidth: 250}} className='Card'>
        <Button onClick={navigateToItem}>
          <img className='img_card' src={`/${img}`} alt="pesas"></img>
        </Button>
        <h3 className='title_card'>{title}</h3>
        <span className='price_card'>{`$${price}`}</span>
        {added ? <Button 
            variant="contained"
            // color='primary' 
            className='button_card'
            onClick={handleClick}
            disabled
          >
            Added
          </Button>
        : <Button 
            variant="contained" 
            // color='primary' 
            className='button_card'
            onClick={handleClick}
          >
            Add to cart
          </Button>
        }
      </Card>
    </>
  )
}

