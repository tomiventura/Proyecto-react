import React from 'react'

const CartWidget = () => {
  return (
    <button type="button" class="btn btn-success position-relative">
  🛒
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
  )
}

export default CartWidget