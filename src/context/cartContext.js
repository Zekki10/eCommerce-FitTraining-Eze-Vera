import { createContext, useState } from 'react';

const cartContext = createContext() 

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const addProductToCart = (product, quantity) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id == product.id)
        if (!isInCart) {
            setCartListItems([...cartListItems,product])
            console.log(quantity)
        } 
    }
    const removeItem = (id) => {
        const newCart = cartListItems.filter((product) => product.id !== id)
        setCartListItems(newCart);
    }
    const clear = () => {
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeItem,
        clear
    }
    
    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext
export { CartProvider }