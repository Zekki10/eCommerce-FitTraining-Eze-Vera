import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useContext } from "react"
import CartContext from '../../context/cartContext';
import CircularStatic from "../../components/LoadProgress/LoadProgress";



export const Market = ({title}) => {
    const { itemProps, loading } = useContext(CartContext)
    
    return (
        <>
        {loading
            ? <CircularStatic />
            : <ItemListContainer items={itemProps} title={title} />
        }
        </>
        )
}