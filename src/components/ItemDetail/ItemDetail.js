import { useState, useContext } from "react"
import ItemCount from "../itemCount/itemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {cart, addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
    
    setQuantityAdded(quantity)
    addItem(name, price)
    }
    
    
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to ='/cart'> Terminar compra </Link>
                            ) : (
                        <ItemCount initial = {1} stock = {stock} onAdd = {handleOnAdd} />
                        )
                    }
            </footer>
        </article>
        )
    }
    
    export default ItemDetail