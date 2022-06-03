import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList/ItemList';
import './Home.css'
import itemProps from "../utils/productsMock"


export const Home = () => {
    const [item, setItem] = useState([])

    
    
    const filtrarItems = (array) => {
        return array.map( (items) => {
            //esto luego lo haré dinamico
            const recommended = [7, 2, 3, 13]
            if(recommended.includes(items.id)) {
                return setItem(item => [...item, items])
            }
        })
    }
    useEffect( () => {
        filtrarItems(itemProps)
    }, [])

    return (
        <> 
            <div className="body_home">
                <section className="section_1">
                    <video src="./fitness_back.mp4" autoPlay  muted loop poster="https://carontestudio.com/img/contacto.jpg"></video>
                    <img alt='logo' src='./maxfitlogo.png' className='logo_fit' />
                    <img alt='mercadoenvios' src='./malenvios.png' className='section_2' />
                </section>
            </div>
            <h1>Producto más vendidos</h1>
            <ItemList className='itemHomeList' itemProps={item} />
        </>
    )
}