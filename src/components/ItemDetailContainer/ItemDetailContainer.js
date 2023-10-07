import { useEffect, useState } from "react"
import { getProductbyId } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer