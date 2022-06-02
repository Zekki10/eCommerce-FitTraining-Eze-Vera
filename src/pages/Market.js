import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import itemProps from "../utils/productsMock"


export const Market = ({title}) => {

    const [items, setItems] = useState([])
    const { category } = useParams()
   
    useEffect( () => {
        setItems([])
        getItems()
        .then((response) => {
            setItems(response)
        })
    
    }, [category])

    const getItems = () => {
        return new Promise( (resolve, reject) => {
            resolve(itemProps) 
        })
    }
  
    return (
        <ItemListContainer items={items} title={title} />
        )
}