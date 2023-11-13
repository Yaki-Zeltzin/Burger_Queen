import { Link, useNavigate } from "react-router-dom"
import { deleteToken} from "../../helpers/auth"


const ChefMenu = () => {
    const nav = useNavigate()

    const handleSesion = () => {
        deleteToken()
        nav("/")
    }

    return (
        <nav className="container-header">
            <ul>
                <li className="menu-item" to="login">
                    <Link to="/kitchen/orders">
                        Pedidos
                    </Link>
                </li>
                <li>
                    <a onClick={handleSesion}>
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default ChefMenu