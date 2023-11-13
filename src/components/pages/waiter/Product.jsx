import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../../constants/env"
import { token } from "../../../helpers/auth"

const Product = () => {
    const params = useParams()

    const [product, setProduct] = useState([])

    console.log(params)

    useEffect(()=>{
        
            axios.get(`${API_URL}/products/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                  },
                })
                .then(resp =>{
                    setProduct(resp.data)
                })
                .catch(err=> console.log(err))
        
    },[])


  return (
    <div>
        <h1>Producto: {product?.name}</h1>
        <p>{JSON.stringify(product)}</p>
        <button >Agregar al carrito</button>
        <button >Quitar del carrito</button>
�    </div>
  )
}

export default Product