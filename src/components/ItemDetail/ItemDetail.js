import { Container, Grid } from "@mui/material"
import { useState, useEffect } from "react"
import './ItemDetail.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const itemProps = [
    {
        id: 1,
        price: 2500,
        title: 'Kit - Pesas plasticas',
        pictureUrl: 'pesas_clases'
    }
]

export const ItemDetail = ({onClick}) => {
    const [items, setItems] = useState()
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

   if (!load) {
            return (
                <Container style={{ padding: '0px 0px 0px 0px' }} className="container" >
                    <Grid container justifyContent="center" className='grid_container'> 
                    <Grid item justifyContent="center" md={8} className='product_container'> 
                        {
                            itemProps.map( ({title, price, pictureUrl, id}) => {
                                return (
                                    <div className="imageContainer" key={id}>
                                        <div className="detailPictureContainer">
                                            <img className="detailPicture" src={`./${pictureUrl}.jpg`} alt="img"></img>
                                            <img className="detailPicture" src={`./${pictureUrl}.jpg`} alt="img"></img>
                                            <img className="detailPicture" src={`./${pictureUrl}.jpg`} alt="img"></img>
                                        </div>
                                        <img className="mainPicture" src={`./${pictureUrl}.jpg`} alt="img"></img>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                    <Grid item justifyContent="center" md={4}>
                                        <Container fixed>
                                            <Button className="back_button" sx={{position:'absolute'}} variant="text" onClick={onClick}><ArrowBackIcon />Volver</Button>
                                        </Container>
                        {
                            itemProps.map( ({title, price, pictureUrl, id}) =>{
                                return (
                                    <div key={id} className="infoContainer">
                                        <h1>{title}</h1>
                                        <p className="description">Descripcion del producto,
                                            son mancuernas de plastico de varias medidas
                                        </p>
                                        <div className="precio_container">
                                            <span className="precio">{`$${price}`}</span>
                                            <span className="cuotas">{`3 cuotas sin interes de $${Math.round(price/3)}`}</span>
                                        </div>
                                        <ItemCount></ItemCount>
                                        <Button variant="contained" color='primary' className='button_card'>Buy now</Button>

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