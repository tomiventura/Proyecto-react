import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  return (
    <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}> 
      <button type="button" class="btn btn-success position-relative">
      🛒
    </button>
    </Link>
  )
}

export default CartWidget