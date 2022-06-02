import { useEffect, useState } from "react"
import { Container } from "@mui/material"
import ItemList from "../components/ItemList/ItemList"
import itemProps from "../utils/productsMock"
import { useParams } from "react-router-dom"

export const ProductList = () => {
    const [items, setItems] = useState([])
    const { category } = useParams()
   
    useEffect( () => {
        setItems([])
        getItems()
        .then((response) => {
            filterItems(response)
        })
        
    }, [category])

    const getItems = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout( () => {
                resolve(itemProps)
            // }, 2000 )
        })
    }
    const filterItems = (array) => {
        return array.map( (item) => {
            if(item.category == category) {
                return setItems(items => [...items, item])
            }
        })
    }
      
    
        return (
                <Container>
                    <h2 className='page_title'>seleccionados</h2>
                    <Container className='container' >
                        <ItemList itemProps={items} />
                    </Container>
                </Container>   
        )
    }
// }