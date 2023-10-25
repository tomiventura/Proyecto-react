import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../cartItem/cartItem"

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
                {cart.length
                ? <div>
                    {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                    <p>Total a pagar: ${total()}</p>
                    <div>
                        <button className='btn btn-danger' onClick={cleanCart}> Vaciar carrito </button>
                        <Link to='/cart/checkout' className='btn btn-dark'> Terminar compra </Link>
                    </div>    
                </div>
                : <div>
                    <h3> Tu carrito esta vacio </h3>
                    <Link to='/' className= 'btn btn-dark'> Ir a comprar </Link>
                </div> }    
            </div>
        )
}
export default Cart


