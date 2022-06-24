import { Link } from 'react-router-dom';
import './ShopNowButton.css'


export const ShopNowButton = () => {

    return (
        <div className='shop-button_container'>
            <Link to='/market'><img className='shop_img' alt="Shop now" src="/shopNow.png"></img></Link>
        </div>
    )
}