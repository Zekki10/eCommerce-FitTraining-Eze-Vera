import { useEffect, useState, useContext } from "react"
import { Container } from "@mui/material"
import ItemList from "../../components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import cartContext from "../../context/cartContext";
import CircularStatic from "../../components/LoadProgress/LoadProgress";

export const ProductList = () => {
    const { loading, itemProps } = useContext(cartContext)
    const [items, setItems] = useState([])
    const { category } = useParams()
   
    useEffect( () => {
        setItems([])
        filterItems(itemProps)
        return ( () => {
            setItems([])
        })
    }, [category, itemProps])

    const filterItems = (array) => {
        return array.map( (item) => {
            if(item.category === category) {   
                return setItems(items => [...items, item])
            } return ''
        })
    }      
    
    return (
        <> { loading 
            ? <CircularStatic />
            : <Container maxWidth={"xl"} disableGutters={false} sx={{padding:0, margin:0}}>
                <img src={`/banner_${category}.png`} alt={category} className="banner_img"/>
                <Container className='container' >
                    <ItemList itemProps={items} />
                </Container>
            </Container>   
        }
        </>
    )
}