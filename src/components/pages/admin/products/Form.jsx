import axios from "axios"
import image from "../../../../assets/images/logo1.png"
import { API_URL } from "../../../../constants/env"
import { token } from "../../../../helpers/auth"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Form = () => {
    const params = useParams()
    const nav = useNavigate()
    
    const [product, setProduct] = useState()
    const [error, setError] = useState()
console.log(params)

    useEffect(()=>{
        if(params.id){
            axios.get(`${API_URL}/products/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                  },
            })
            .then(resp =>{
                setProduct(resp.data)
            })
            .catch(err=> setError(err))
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            type: e.target.type.value
        }
        
       if(!params.id){
        axios
            .post(`${API_URL}/products`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                },
        })
        .then(() => {
            nav("/admin/products")
        })
        .catch(error => {
            setError(error)
        })
       } else {
        axios
            .patch(`${API_URL}/products/${params.id}`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                },
        })
        .then(() => {
            nav("/admin/products")
        })
        .catch(error => {
            console.log(error)
        })
       }
    }

    return (
        <>
            <section className="login-container">
                <img src={image} alt="logo-Hamburger" />
                <h1>
                    {`${params.id ? "Editar" : "Crear"}`} producto
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Nombre producto</label>
                        <input
                            required
                            type="text"
                            name="name"
                            defaultValue={product.name}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="price">Precio</label>
                        <input
                            required
                            type="Number"
                            name="price"
                            defaultValue={product.price}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="price">Imagen</label>
                        <input
                            required
                            type="url"
                            name="image"
                            defaultValue={product.image}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="type">Tipo</label>
                        <input
                            required
                            type="text"
                            name="type"
                            defaultValue={product.type}
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="button">Guardar</button>
                    <p>{error && JSON.stringify(error)}</p>
                    </div>
                </form>
            </section>

        </>
    )
}

export default Form