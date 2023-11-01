//Plantilla para visualizar el menu en diferentes páginas(outlet)

import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
import ChefMenu from "../molecules/ChefMenu"

const Chef = () => {
  return (
    <div>
        <MainHeader >
          <ChefMenu />
        </MainHeader>
        <div className="Poner espacio para bajar los componentes">
          <Outlet />
        </div>
    </div>
  )
}

export default Chef
