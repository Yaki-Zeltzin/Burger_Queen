import { Link } from "react-router-dom"
import image from "../../../../assets/images/logo3.png"

const PageWorkers = () => {
  return (
    <>
    <div className="container-admin">
      <img src={image} alt="logo-simple" className="simple-logo"></img>
      <Link className="small-button" to={"/admin/register"}>
          Agregar trabajador
        </Link>
      <h2 className="title-admin">Trabajadores</h2>
      <div className="workers-list-container">
        <table className="default">
          <tr className="header-table">
            <th>Email</th>
            <th>Cargo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </table>
      </div>
      <div className="add-container">
       
      </div>
    </div>

  </>
  )
}

export default PageWorkers
