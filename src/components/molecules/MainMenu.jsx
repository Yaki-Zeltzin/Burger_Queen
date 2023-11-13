import { Link, useNavigate } from "react-router-dom"
import { deleteToken, token } from "../../helpers/auth"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"



const MainMenu = () => {
    const nav = useNavigate()
    const { userData, setUserData } = useContext(UserContext)

   
    const handleSesion = () => {
        deleteToken()
        nav("/")
        setUserData()
    }

    return (
        <nav className="container-header">
            <ul>
            {userData?.role === "chef" && (
                <li className="menu-item" to="login">
                    <Link to="/kitchen">
                        Cocina
                    </Link>
                </li>
                )}
                {userData?.role === "waiter" && (
                <li>
                    <Link to="/Orders">
                        Pedidos
                    </Link>
                </li>
                )}
                {userData?.role === "admin" && (

                    <li>
                        <Link to="/admin/products">
                            Administrador
                        </Link>
                    </li>
                )}
                {!token() ? (
                    <li>
                        <Link to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                ) : (

                    <li>
                        <a onClick={handleSesion}>
                            Cerrar sesión
                        </a>
                    </li>

                )
                }
            </ul>
            {/* {JSON.stringify(userData.role)}  te indica que role tiene el usuario*/}
        </nav>
    )
}

export default MainMenu