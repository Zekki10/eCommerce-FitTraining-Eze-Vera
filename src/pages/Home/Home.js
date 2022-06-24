import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './Home.css';
import { useContext } from 'react';
import cartContext from '../../context/cartContext';
import CircularStatic from '../../components/LoadProgress/LoadProgress';
import { Link } from 'react-router-dom';

const recommended = ['2ANKQY9XNv9qdVQDcsw2', 'n26xZnr3ce54uI1BDmGK', 'uxBziL8pWom0k5KIui6O', 'hpmZqdvWcyIn5jWFjrNx']

export const Home = () => {
    const [item, setItem] = useState([])
    const { itemProps, loading } = useContext(cartContext)
    
    const filtrarItems = (array) => {
        return array.map( (items) => {
            //esto luego lo haré dinamico
            if(recommended.includes(items.id)) {
                return setItem(item => [...item, items])
            } return ''
        })
    }
    useEffect( () => {
        filtrarItems(itemProps)
        return ( () => {
            setItem([])
        })
    }, [itemProps])

        return (
            <> 
                <div className="body_home">
                    <section className="section_1">
                        <video src="./fitness_back.mp4" autoPlay  muted loop poster="https://carontestudio.com/img/contacto.jpg"></video>
                        <img alt='logo' src='./maxfitlogo.png' className='logo_fit' />
                        <div className='img_oferta_container'>
                            <img alt='oferta' src='./oferta.png' className='section_2' />
                        </div>
                    </section>  
                </div>
                <Link to={'/market'} className='shop_button blink'>
                    SHOP NOW
                </Link>
                <img src="./banner_popular.png" alt='banner_popular' className='banner_img' />
                {loading 
                ? <CircularStatic />
                : <ItemList className='itemHomeList' itemProps={item} />
                }
                <div className='img_oferta_container'>
                    <img alt='oferta' src='./free-shipping.png' className='section_2' />
                </div>
            </>
        )
    } 