import axios from "axios"
import image from "../../../../assets/images/logo1.png"
import { API_URL } from "../../../../constants/env"
import { token } from "../../../../helpers/auth"
import "../../../../styles//index.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RegisterStaff = () => {
    const nav = useNavigate()

    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        }

        axios
        .post(`${API_URL}/users`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            if(resp.statusText === "Created"){
                nav("/pageWorkers")
            }
            })
        .catch(err => setError(err))

    }

    return (
        <>
            <section className="login-container">
                <img src={image} alt="logo-Hamburger" />
                <h1>Crear nuevo trabajador</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="fullNmae">Nombre Completo</label>
                        <input required
                            type="text"
                            name="fullName"
                            defaultValue={"Nombre"}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input required
                            type="email"
                            name="email"
                            defaultValue={"Correo"}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input required
                            type="password"
                            name="password"
                            defaultValue={"Contraseña"}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Puesto</label>
                        <input required
                            type="text"
                            name="role"
                            defaultValue={"Puesto"}
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="button">Ingresar</button>
                       {error &&(
                            <p className="error"></p>
                       )}
                    
                    </div>
                </form>
            </section>
        </>
    )
}

export default RegisterStaff