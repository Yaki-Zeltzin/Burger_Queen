//Plantilla para visualizar el menu en diferentes páginas(outlet)

import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
import AdminMenu from "../molecules/AdminMenu"

const Admin = () => {
  return (
    <div>
        <MainHeader >
          <AdminMenu />
        </MainHeader>
        <div className="Poner espacio para bajar los componentes">
          <Outlet />
        </div>
    </div>
  )
}

export default Admin
