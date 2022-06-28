import { createContext, useState, useEffect } from 'react';
import getItems from '../utils/getItems';
import { useParams } from "react-router-dom"


const cartContext = createContext() 

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [itemQuantity, setItemQuantity ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [itemProps, setItemProps] = useState([])
    const [loading, setLoading] = useState(false)
    const [cartQuantity, setCartQuantity] = useState(0)
    const { category } = useParams()


    useEffect( () => {
        setItemProps([])
        setLoading(true)
        getItems()
        .then((response) => {
            setLoading(false)
            setItemProps(response)
            if (JSON.parse(localStorage.getItem('products'))) {
                setCartQuantity(JSON.parse(localStorage.getItem('itemQty')))
                setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')))
            }
        })        
    }, [category])

    const addProductToCart = (product, quantity) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
            product.qty = quantity;
            setTotalPrice(totalPrice+product.qty*product.price)
            setCartListItems(cartListItems=> [...cartListItems,product])
            setItemQuantity(quantity)
            setCartQuantity(cartQuantity + quantity)
            localStorage.setItem('products', JSON.stringify([...cartListItems,product]))
            localStorage.setItem('itemQty', JSON.stringify(cartQuantity + quantity))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice+product.qty*product.price))
        } 
    }
    const removeItem = (id) => {
        const newCart = cartListItems.filter((product) => product.id !== id)
        setCartListItems(newCart);
        localStorage.setItem('products', JSON.stringify(newCart))
        cartListItems.map((product) => {
            if (product.id === id) {
                setTotalPrice(totalPrice - product.qty*product.price)
                setCartQuantity(cartQuantity - product.qty)
                localStorage.setItem('totalPrice', JSON.stringify(totalPrice - product.qty*product.price))
                localStorage.setItem('itemQty', JSON.stringify(cartQuantity - product.qty))
            } return ''
        })
    }
    const clear = () => {
        setCartListItems([])
        setTotalPrice(0)
        setCartQuantity(0)
        localStorage.setItem('products', JSON.stringify([]))
        localStorage.setItem('itemQty', JSON.stringify(0))
        localStorage.setItem('totalPrice', JSON.stringify(0))
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeItem,
        clear,
        itemQuantity,
        setItemQuantity,
        totalPrice,
        itemProps,
        cartQuantity,
        loading,
        setLoading
    }
    
    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext
export { CartProvider }