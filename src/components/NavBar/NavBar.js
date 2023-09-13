import React from 'react'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'

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
        <NavLink to={`/category/CamisetasEspaña`} className="nav-link active" aria-current="page" href="/Productos">Camisetas España</NavLink>
        <NavLink to={`/category/CamisetasArgentina`} className="nav-link carritoNavBar" href="/Contacto">Camisetas Argentina</NavLink>
        <NavLink className="nav-link" href="/Carrito"> <CartWidget/> </NavLink>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar