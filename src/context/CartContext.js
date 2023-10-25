import { useState } from "react"
import { createContext } from "react"



export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod
                }
            }))
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((acc, prod)=> acc + prod.quantity * prod.price, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total}}>
            { children }
        </CartContext.Provider>
    )
}