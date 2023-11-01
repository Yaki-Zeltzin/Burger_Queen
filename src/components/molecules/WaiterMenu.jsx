import { Link, useNavigate } from "react-router-dom"
import { deleteToken} from "../../helpers/auth"


const WaiterMenu = () => {
    const nav = useNavigate()

    const handleSesion = () => {
        deleteToken()
        nav("/login")
    }

    return (
        <nav className="container-header">
            <ul>
                <li>
                    <Link to="/Orders">
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

export default WaiterMenu