import { Link } from "react-router-dom"

const MainMenu = () => {
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
        <li>Cerrar sesión</li>
    </ul>
</nav>
  )
}

export default MainMenu