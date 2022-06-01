
import { Item } from '../Item/Item'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './ItemList.css';
import { useEffect, useState } from 'react';
import itemProps from '../../utils/productsMock'


const ItemList = (props) => {
    const [items, setItems] = useState([])
    const [load, setLoad] = useState(false)
   
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
                                <Item index={props.index} id={id} title={title} price={price} img={pictureUrl} />
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