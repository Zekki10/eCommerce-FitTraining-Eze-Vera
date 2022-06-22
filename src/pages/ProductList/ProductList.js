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
            : <Container>
                <h2 className='page_title'>{category}</h2>
                <Container className='container' >
                    <ItemList itemProps={items} />
                </Container>
            </Container>   
        }
        </>
    )
}