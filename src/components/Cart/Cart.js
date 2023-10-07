import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart, cleanCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1> No hay items en el carrito </h1>
                <Link to='/'>Productos</Link>
            </div>
            )
        }

        return (
            <div>
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
                <h3> Total: ${total}</h3>
                <button onClick={() => clearCart}> Limpiar carrito </button>
                <Link to='checkout'> Checkout </Link>
            </div>
        )
}