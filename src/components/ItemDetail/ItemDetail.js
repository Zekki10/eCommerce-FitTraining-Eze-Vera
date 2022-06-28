import { Box, Grid } from "@mui/material"
import { useState, useEffect } from "react"
import './ItemDetail.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import db from "../../utils/firebaseConfig";

export const ItemDetail = (props) => {
    const [items, setItems] = useState([])
    const [load, setLoad] = useState(true)
    const [quantity, setQuantity] = useState(1) 
    const [showButton, setShowButton] = useState(false)


    const getItem = async (id) => {
        const product = doc(db, "Products", id)
        getDoc(product).then((snapshot) => {
            if (snapshot.exists()) {
                setItems({id: snapshot.id, ...snapshot.data()});
            }
        })
        return ''
    }
    
    useEffect( () => {
        setLoad(true)
        getItem(props.index)
        .then((response) => {
            setLoad(false)
        })
        .catch( (err) => {
            console.log('error')
        })
    }, [])

    
    if (load === false ) {
            return (
                <>
                    <Box sx={{ flexGrow: 1, 
                        width:'100%', 
                        padding:'10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center' }} >
                        <Grid container justifyContent="space-around" sx={{height:'100%',padding: '0px 0px 0px 0px'}} className='grid_container'> 
                            <Grid item justifyContent="center" sx={{height:'100%',padding: '0px 0px 0px 0px'}} md={6} xs={12} className='product_container'> 
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
                            <Grid item className="desc_container" justifyContent="center" alignItems="center"  md={6} xs={12}>
                                                
                                {
                                    Object.values({items}).map( ({title, price, img, id}, index) =>{
                                        return (
                                            <div key={index} className="infoContainer">
                                                <h1>{title}</h1>
                                                <p className="description">Item description</p>
                                                <div className="precio_container">
                                                    <span className="precio">{`$${price}`}</span>
                                                    <span className="cuotas">{`3 cuotas sin interes de $${Math.round(price/3)}`}</span>
                                                </div>
                                                { !showButton ? 
                                                <ItemCount id={id} items={items} quantity={quantity} setQuantity={setQuantity} setShowButton={setShowButton}></ItemCount>
                                                :
                                                <Button variant="contained"  className='button_card'>
                                                    <Link className="link_buy" to='/cart'>Buy now</Link>
                                                </Button>}
                                            </div>
                                        ) 
                                    
                                    })
                                }                        
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )
        } else {
        return (
            <span>loading...</span>
        )}
    }