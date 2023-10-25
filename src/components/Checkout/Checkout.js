import { db } from "../../firebase/config"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp } from "firebase/firestore"
import { writeBatch } from "firebase/firestore"
import { getDocs } from "firebase/firestore"
import { query } from "firebase/firestore"
import { where } from "firebase/firestore"
import { documentId } from "firebase/firestore"
import { addDoc } from "firebase/firestore"
import { collection, serverTimestamp } from "firebase/firestore"




export const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, total, cleanCart} = useContext(CartContext)
    const datosComprador = (e) =>{
        setUser({
            ...user,   
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('complete todos los campos para subir su orden')
        }else{
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                cleanCart()
            })
            .catch((error)=> console.log(error))
        }
    }


    return (
        <div>
            {orderId !== '' 
            ?<div>
                <h2>Felicitaciones! Tu orden fue genereada con éxito!</h2>
                <h5>Su id de registro es: {orderId}</h5>
            </div> 
            :<div>
            <form onSubmit={finalizarCompra}>
                <label>
                    Nombre completo
                    <input 
                    type='text'
                    placeholder= 'Nombre y apellido'
                    onChange={datosComprador}
                    name='name'
                    />
                </label>
                <label>
                    Telefono
                    <input 
                    type='text'
                    onChange={datosComprador}
                    name='phone'
                    />
                </label>
                <label>
                    Email
                    <input 
                    type='email'
                    placeholder='lala@lala.com'
                    onChange={datosComprador}
                    name='mail'
                    />
                </label>
                <label>
                    Repita su email
                    <input 
                    type='email'
                    placeholder='lala@lala.com'
                    onChange={((e)=>setValidateEmail(e.target.value))}
                    name='mail'
                    />
                </label>
                <div>
                    <button type='submit' disabled={validateEmail !== user.mail}>Create order</button>
                </div>
            </form>
        </div> }
        </div>
    )
}

export default Checkout