import { useState, useEffect } from "react"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
// import itemProps from "../../utils/productsMock"
import { useParams, useNavigate } from "react-router-dom"
import { useContext } from 'react';
import cartContext from '../../context/cartContext';

const Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})
    const { itemProps } = useContext(cartContext)
    
    useEffect(() => {
        console.log(productFilter)
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }
    }, [id])

    const productFilter = itemProps.find( (product) => {
        console.log(product.id, 'vs ', id)
        return product.id === id
    })

    return (
        <ItemDetailContainer index={id} />
    )
}
export default Detail