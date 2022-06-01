import { useState, useEffect } from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import itemProps from "../utils/productsMock"
import { useParams, useNavigate } from "react-router-dom"
const Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})
    
    useEffect(() => {
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }
    }, [id])

    const productFilter = itemProps.find( (product) => {
        return product.id == id
    })
    return (
        <ItemDetailContainer index={id} />
    )
}
export default Detail