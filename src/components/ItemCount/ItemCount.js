import { useEffect, useState } from "react";
import './ItemCount.css';
import Button from '@mui/material/Button';
import itemProps from '../../utils/productsMock'
import { useContext } from 'react';
import cartContext from '../../context/cartContext';


const ItemCount = ({id, setQuantity, quantity, setShowButton, items}) => {
    const [stock, setStock] = useState();
    const { addProductToCart } = useContext(cartContext)

    const seteaStock = () => {
        
        itemProps.map( item => {
            if (item.id === id) {
                setStock(item.stock)
            }
        })
    }

    useEffect( () => {
        seteaStock()
    }, [])

    return (
        <>
            <h4>Add to cart:</h4>
            <div className="button_container">
                <Button className="button_count" variant="outlined" size="small" onClick={
                    () => {setQuantity(quantity-1)}
                } disabled={quantity < 2}>-</Button>
                    <span>{quantity}</span>
                <Button className="button_count" variant="outlined" size="small" onClick={
                    () => {setQuantity(quantity+1)}
                } disabled={quantity >= stock }>+</Button>
            </div>
            <Button variant="contained" color='primary' onClick={() => {
                    setShowButton(true); addProductToCart(items,quantity)}}
                className='button_card'>
                Add to cart
            </Button>
        </>
    )

}

export default ItemCount;