import axios from "axios"
import image from "../../../../assets/images/logo1.png"
import { API_URL } from "../../../../constants/env"
import { token } from "../../../../helpers/auth"

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            type: e.target.type.value
        }
        
        axios
            .post(`${API_URL}/products`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                  },
            })
            .then(resp => {
                console.log(resp)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <section className="login-container">
                <img src={image} alt="logo-Hamburger" />
                <h1>Agregar producto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Nombre producto</label>
                        <input
                            required
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="price">Precio</label>
                        <input
                            required
                            type="Number"
                            name="price"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="price">Imagen</label>
                        <input
                            required
                            type="url"
                            name="image"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="type">Tipo</label>
                        <input
                            required
                            type="text"
                            name="type"
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="button">Ingresar</button>

                        <p className="error"></p>
                    </div>
                </form>
            </section>

        </>
    )
}

export default Form