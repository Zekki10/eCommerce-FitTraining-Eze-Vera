import { useState } from "react";
import './ItemCount.css';

const ItemCount = () => {
    
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(5);

    return (
        <div className="button_container">
            <button onClick={
                () => {setCount(count-1)}
            } disabled={count < 2}>-</button>
                <span>{count}</span>
            <button onClick={
                () => {setCount(count+1)}
            } disabled={count >= stock }>+</button>
        </div>
    )

}

export default ItemCount;