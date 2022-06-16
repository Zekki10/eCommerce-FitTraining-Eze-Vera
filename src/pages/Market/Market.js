import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useContext } from "react"
import CartContext from '../../context/cartContext';



export const Market = ({title}) => {
    const { itemProps } = useContext(CartContext)
  
    return (
        <ItemListContainer items={itemProps} title={title} />
        )
}