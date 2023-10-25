import { Link, useNavigate } from "react-router-dom"
import { deleteToken, token } from "../../helpers/auth"


const MainMenu = () => {
    const nav = useNavigate()

    const handleSesion = () => {
        deleteToken()
        nav("/login")
    }

    return (
        <nav className="container-header">
            <ul>
                <li className="menu-item" to="login">
                    <Link to="/kitchen">
                        Cocina
                    </Link>
                </li>
                <li>
                    <Link to="/Orders">
                        Pedidos
                    </Link>
                </li>
                <li>
                    <Link to="/Admin">
                        Administrador
                    </Link>
                </li>
                {
                    !token() ? (
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
        </nav>
    )
}

export default MainMenu