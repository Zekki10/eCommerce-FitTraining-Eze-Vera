import { createContext, useState } from 'react';

const cartContext = createContext() 

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [itemQuantity, setItemQuantity ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

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
            }
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
        totalPrice
    }
    
    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext
export { CartProvider }