import "../../styles/index.css"
import axios from "axios"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"

const Login = () => {
    const nav = useNavigate()
    const {setUserData} = useContext(UserContext)

    const [error, setError] = useState()
   

    const handleSubmit = (e) => {
        e.preventDefault()

        setError()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios
            .post(`${API_URL}/login`, data)
            .then(resp => {
                setToken(resp.data.accessToken)
                setUserData(resp.data.user)
                if (resp.data.user.role === "waiter") {
                    nav("/waiter/orders")
                 } else if (resp.data.user.role === "admin") {
                     nav("/admin/products")
                 } 
                 //else {
                //     nav("/chef")
                // }
            })
            .catch(error => {
                setError(error)
            })
    }

    return (
        <div className="login-container">
            <img alt="logo1.png" />
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input required
                        type="email"
                        name="email"
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required
                        type="password"
                        name="password"
                    />

                </div>
                <div className="submit">
                    <input
                        type="submit"
                        className="link"
                        value="Ingresar"
                    ></input>
                </div>
                {error && (
                    <p className="error">{error?.response?.data}</p>
                )}
            </form>
        </div>
    )
}

export default Login