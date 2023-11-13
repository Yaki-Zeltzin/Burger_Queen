import axios from "axios"
import { API_URL } from "../../constants/env"
import { token } from "../../helpers/auth"

import { useEffect, useState } from "react"
import ProductCard from "../molecules/ProductCard"

const PageOrders = () => {
  const [data, setData] = useState([])
  
   useEffect(() => {
     axios
   .get(`${API_URL}/products`,  {
       headers: {
           'Authorization': `Bearer ${token()}`,
       }, })
     .then(resp => {
        setData(resp.data)
         })
     .catch(err => console.log(err))

   },[])

  return (
    <>
    <h1>Productos</h1>
    
    {data.map((prod) => (
     <ProductCard 
      key={prod.id} 
      id={prod.id}
      name={prod.name}
      price={prod.price}
      image={prod.image}
      />

    ))
    }
    </>
  )
}

export default PageOrders
