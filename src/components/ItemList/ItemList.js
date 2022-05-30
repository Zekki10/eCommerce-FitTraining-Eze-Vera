
import { Item } from '../Item/Item'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './ItemList.css';
import { useEffect, useState } from 'react';



const ItemList = ({title_list}) => {
    const [items, setItems] = useState([])
    const [load, setLoad] = useState(false)
    const itemProps = [
        {
            id: 1,
            price: 2500,
            title: 'Kit - Pesas plasticas',
            pictureUrl: 'pesas_clases'
        },
        {
            id: 2,
            price: 5000,
            title: 'Kit - Pesas metalicas',
            pictureUrl: 'kit_mancuernas'
    
        },
        {
            id: 3,
            price: 1700,
            title: 'Colchoneta MIT',
            pictureUrl: 'colchoneta_mancuerna'
        },
        {
            id: 4,
            price: 10000,
            title: 'Kit - Kettlebells',
            pictureUrl: 'Kettlebells-Recubiertas'
        }
    ]
    const getItems = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(itemProps)
            }, 2000 )
        })
    }
    useEffect( () => {
        setLoad(true)
        getItems()
        .then((response) => {
            setItems(response)
            setLoad(false)
        })
        .catch( (err) => {
            console.log('error')
        })
    }, [])


    if (load) {
        return (
        <>
            <Container className='container' >
                <span>Loading..</span>
            </Container>
        </>)
    } else {

    return (
        <>
        <Container className='container' >
            <Grid container justifyContent="center" spacing={2} className='grid_container'> 
                {
                    itemProps.map( ({title, price, pictureUrl, id}) => {
                        return (
                            <Grid item md={3} key={id}>
                                <Item title={title} price={price} img={pictureUrl} />
                            </Grid>
                        )
                    })
                }
            </Grid>
    </Container>
    </>)
    }
}

export default ItemList;