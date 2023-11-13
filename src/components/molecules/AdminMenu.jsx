import { Link, useNavigate } from "react-router-dom"
import { deleteToken } from "../../helpers/auth"


const AdminMenu = () => {
    const nav = useNavigate()

    const handleSesion = () => {
        deleteToken()
        nav("/login")
    }

    return (
        <nav className="container-header">
            <ul>
                <li>
                    <Link to="/admin/register">
                        Registrar empleado
                    </Link>
                </li>
                <li>
                    <Link to="/admin/pageWorkers">
                        Ver empleados
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addProducts">
                        Registrar producto
                    </Link>
                </li>
                <li>
                    <Link to="/admin/products">
                        Ver Productos
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

export default AdminMenu