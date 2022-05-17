import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartButton'>
            <IconButton color="inherit" >
                <ShoppingCartIcon className='CartIcon'/>
            </IconButton>
        </div>
    )

}

export default CartWidget