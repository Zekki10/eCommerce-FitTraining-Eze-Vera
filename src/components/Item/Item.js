import './Item.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

export const Item = (props) => {
  const {title, price, img, id} = props;
  const navigate = useNavigate()

  const navigateToItem = () => {
    console.log(id)
    navigate(`/product/${id}`)
  }

  return (
    <>
      <Card sx={{minwidth: 250}} className='Card'>
        <Button onClick={navigateToItem}>
          <img className='img_card' src={`./${img}.jpg`} alt="pesas"></img>
        </Button>
        <h3 className='title_card'>{title}</h3>
        <span className='price_card'>{`$${price}`}</span>
        {/* <ItemCount /> */}
        <Button variant="contained" color='primary' className='button_card'>Add to cart:</Button>
      </Card>
    </>
  )
}

