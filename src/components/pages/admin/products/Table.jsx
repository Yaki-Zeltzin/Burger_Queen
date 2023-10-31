import axios from "axios"
import { API_URL } from "../../../../constants/env"
import { token } from "../../../../helpers/auth"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, {
        headers: {
          'Authorization': `Bearer ${token()}`,
      },
      })
      .then(resp => {
        setData(resp.data)
      })
      .catch(err => console.log(err))

  }, [])

  const deleteProduct = (prod) => {
    if(window.confirm("Estas seguro de eliminar?")) {
    axios.delete(`${API_URL}/products/${prod.id}`, {
      headers: {
        'Authorization': `Bearer ${token()}`,
    },
    })
    .then(() => alert("producto eliminado"))
  }
  }

  return (
    <section>
      <h1>Productos</h1>
      <Link to={"/admin/addProducts"}>
        Agregar Producto
      </Link>
      <table className="default">
        <thead className="header-table">
          <tr >
            <th>Nombre</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>  
          {
            data.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <Link to={`/admin/products/${prod.id}`}>Editar</Link>
                </td>
                <td>
                  <a onClick={() => deleteProduct(prod)}>Eliminar</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default Table