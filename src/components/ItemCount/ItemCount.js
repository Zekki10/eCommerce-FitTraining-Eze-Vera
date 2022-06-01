import { useEffect, useState } from "react";
import './ItemCount.css';
import Button from '@mui/material/Button';
import itemProps from '../../utils/productsMock'


const ItemCount = ({id}) => {
    
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState();
    
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
                    () => {setCount(count-1)}
                } disabled={count < 2}>-</Button>
                    <span>{count}</span>
                <Button className="button_count" variant="outlined" size="small" onClick={
                    () => {setCount(count+1)}
                } disabled={count >= stock }>+</Button>
            </div>
        </>
    )

}

export default ItemCount;