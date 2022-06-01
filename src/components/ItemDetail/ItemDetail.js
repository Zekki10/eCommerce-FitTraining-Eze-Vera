import { Container, Grid } from "@mui/material"
import { useState, useEffect } from "react"
import './ItemDetail.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import itemProps from '../../utils/productsMock'

export const ItemDetail = (props) => {
    const [items, setItems] = useState([])
    const [load, setLoad] = useState(true)

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
                <Container style={{ padding: '0px 0px 0px 0px', height:'100%' }} className="container_detail" > 
                    <Grid container justifyContent="center" sx={{height:'80vh'}} className='grid_container'> 
                        <Grid item justifyContent="center" md={8} className='product_container'> 
                            {
                                Object.values({items}).map( (item, index) => {
                                
                                    return (
                                        <div className="imageContainer" key={index}>
                                            <img className="mainPicture" src={`./${item.pictureUrl}.jpg`} alt="img"></img>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Grid item className="desc_container" justifyContent="center" alignItems="center" md={4}>
                                            
                            {
                                Object.values({items}).map( ({title, price, pictureUrl, id}, index) =>{
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
                                            <ItemCount id={id}></ItemCount>
                                            <Button variant="contained" color='primary' className='button_card'>Buy now</Button>
                                        </div>
                                    ) 
                                
                                })
                            }                        
                            <Grid item sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1}}>
                                <Container sx={{justfyContent: 'right'}} className='fixed_container' >
                                    <Button className="back_button"  variant="text" onClick={props.onClick}><ArrowBackIcon />Volver</Button>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            )
        } else {
        return (
            <span>loading...</span>
        )}
    }