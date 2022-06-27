import { Link } from 'react-router-dom';
import './underConstruction.css'

export const UnderConstruction = () => {

    return (
        <div className="body_home">
            <section className="section_1">
                <video src="./fitness_back.mp4" autoPlay  muted loop poster="https://carontestudio.com/img/contacto.jpg"></video>
                <h1 className="info_web">UNDER CONSTRUCCTION</h1>
            </section>
            <Link to={'/market'} className='shop_button under-shop_button blink'>
                    SHOP NOW
            </Link>
            <div className='img_oferta_container'>
                <img alt='oferta' src='./free-shipping.png' className='section_2' />
            </div> 
        </div>
    )
}