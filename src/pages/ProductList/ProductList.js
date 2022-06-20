import { useEffect, useState } from "react"
import { Container } from "@mui/material"
import ItemList from "../../components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import getItems from "../../utils/getItems";

export const ProductList = () => {
    const [items, setItems] = useState([])
    const { category } = useParams()
   
    useEffect( () => {
        
        getItems()
        .then((response) => {
            setItems([])
            filterItems(response)
        })
        
    }, [category])

    const filterItems = (array) => {
        return array.map( (item) => {
            if(item.category === category) {   
                return setItems(items => [...items, item])
            } return ''
        })
    }      
    
    return (
            <Container>
                <h2 className='page_title'>{category}</h2>
                <Container className='container' >
                    <ItemList itemProps={items} />
                </Container>
            </Container>   
    )
}