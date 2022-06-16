import { createContext, useState, useEffect } from 'react';
import getItems from '../utils/getItems';
import { useParams } from "react-router-dom"


const cartContext = createContext() 

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [itemQuantity, setItemQuantity ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [itemProps, setItemProps] = useState([])
    const { category } = useParams()


    useEffect( () => {
        setItemProps([])
        getItems()
        .then((response) => {
            setItemProps(response)
        })
    }, [category])

    const addProductToCart = (product, quantity) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
            product.qty = quantity;
            setTotalPrice(totalPrice+product.qty*product.price)
            setCartListItems(cartListItems=> [...cartListItems,product])
            setItemQuantity(quantity)
        } 
    }
    const removeItem = (id) => {
        const newCart = cartListItems.filter((product) => product.id !== id)
        setCartListItems(newCart);
        cartListItems.map((product) => {
            if (product.id === id) {
                setTotalPrice(totalPrice - product.qty*product.price)
            } return ''
        })
    }
    const clear = () => {
        setCartListItems([])
        setTotalPrice(0)
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeItem,
        clear,
        itemQuantity,
        setItemQuantity,
        totalPrice,
        itemProps
    }
    
    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext
export { CartProvider }