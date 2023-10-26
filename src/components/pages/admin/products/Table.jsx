import axios from "axios"
import { API_URL } from "../../constants/env"
import { token } from "../../helpers/auth"

import { useEffect, useState } from "react"

const Table = () => {
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
    
    {data.map(prod => (
      <div key={prod.id}>
      {JSON.stringify(prod.name)}
      </div>

    ))
    }
    </>
  )
}

export default Table