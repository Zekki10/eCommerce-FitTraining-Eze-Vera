import { Container, Grid } from "@mui/material"
import { useState, useEffect } from "react"
import './ItemDetail.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import itemProps from '../../utils/productsMock'
import { Link } from 'react-router-dom';


export const ItemDetail = (props) => {
    const [items, setItems] = useState([])
    const [load, setLoad] = useState(true)
    const [quantity, setQuantity] = useState(1) 
    const [showButton, setShowButton] = useState(false)


    const getItems = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(itemProps)
            }, 500 )
        })
    }
    useEffect( () => {
        setLoad(true)
        getItems()
        .then((response) => {
            setLoad(false)
        })
        .catch( (err) => {
            console.log('error')
        })
    }, [])

    useEffect( () => {
        setItems(itemProps[props.index-1])
    }, [])


    
    if (load === false ) {
        
            return (
                <Container style={{height:'100%',padding: '0 0 0 0' }} wrap={'wrap'} className="container_detail" > 
                    <Grid container justifyContent="space-around" sx={{height:'100%',padding: '0px 0px 0px 0px'}} className='grid_container'> 
                        <Grid item justifyContent="center" sx={{height:'100%',padding: '0px 0px 0px 0px'}} sm={7} md={8} className='product_container'> 
                            {
                                Object.values({items}).map( (item, index) => {
                             
                                    return (
                                        <div className="imageContainer" key={index}>
                                            <img className="mainPicture" src={`/${item.img}`} alt="img"></img>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Grid item className="desc_container" justifyContent="center" alignItems="center"  sm={5} md={4}>
                                            
                            {
                                Object.values({items}).map( ({title, price, img, id}, index) =>{
                                    return (
                                        <div key={index} className="infoContainer">
                                            <h1>{title}</h1>
                                            <p className="description">Descripcion del producto,
                                                son mancuernas de plastico de varias medidas
                                            </p>
                                            <div className="precio_container">
                                                <span className="precio">{`$${price}`}</span>
                                                <span className="cuotas">{`3 cuotas sin interes de $${Math.round(price/3)}`}</span>
                                            </div>
                                            { !showButton ? 
                                            <ItemCount id={id} items={items} quantity={quantity} setQuantity={setQuantity} setShowButton={setShowButton}></ItemCount>
                                            :
                                            <Button variant="contained" color='primary' className='button_card'>
                                                <Link to='/cart'>Buy now</Link>
                                            </Button>}
                                        </div>
                                    ) 
                                
                                })
                            }                        
                        </Grid>
                    </Grid>
                </Container>
            )
        } else {
        return (
            <span>loading...</span>
        )}
    }