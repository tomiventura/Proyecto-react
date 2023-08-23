import React from 'react'
import CartWidget from '../CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/Productos">Productos</a>
        <a className="nav-link carritoNavBar" href="/Contacto">Contacto</a>
        <a className="nav-link" href="/Carrito"> <CartWidget/> </a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar