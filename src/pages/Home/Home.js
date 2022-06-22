import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './Home.css'
import { useContext } from 'react';
import cartContext from '../../context/cartContext';
import CircularStatic from '../../components/LoadProgress/LoadProgress';

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
                        <img alt='mercadoenvios' src='./malenvios.png' className='section_2' />
                    </section>  
                </div>
                <h1>POPULAR RIGHT NOW</h1>
                {loading 
                ? <CircularStatic />
                : <ItemList className='itemHomeList' itemProps={item} />
                }
                
            </>
        )
    } 