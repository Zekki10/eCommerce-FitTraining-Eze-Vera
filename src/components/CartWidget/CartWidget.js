import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../../context/cartContext';
import Button from '@mui/material/Button';
import './CartWidget.css'
const CartWidget = () => {

    const { cartListItems, removeItem, clear } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <div className='cartButton'>
            <IconButton onClick={handleClick} color="inherit" >
                <ShoppingCartIcon 
                    className='CartIcon'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="/market" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                            
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.img}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                                <div>
                                <p>qty:</p>
                                <span>{item.qty}</span>
                                </div>
                            </div>
                            <div className='cart-prod__action'>
                                <button >
                                    <DeleteIcon onClick={() => removeItem(item.id)} />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    { cartListItems.length >= 1 && (
                        <>
                            <Button variant="contained"  className='button_card'>
                               <Link className="link_buy" to='/cart'>Buy now</Link>
                            </Button>
                            <button className='delete-all-button' onClick={clear}>Delete all</button>
                        </>
                    )} 
                </div>
            </Menu>
        </div>
    )

}

export default CartWidget