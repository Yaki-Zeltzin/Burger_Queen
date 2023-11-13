import { Link, useNavigate } from "react-router-dom"
import { deleteToken} from "../../helpers/auth"


const WaiterMenu = () => {
    const nav = useNavigate()

    const handleSesion = () => {
        deleteToken()
        nav("/")
    }

    return (
        <nav className="container-header">
            <ul>
                <li>
                    <Link to="/waiter/orders">
                        Pedidos
                    </Link>
                </li>
                <li>
                    <Link to="/waiter/orderReady">
                        Terminados
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