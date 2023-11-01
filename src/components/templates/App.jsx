//Plantilla para visualizar el menu en diferentes páginas(outlet)

import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
import MainMenu from "../molecules/MainMenu"

const App = () => {
  return (
    <div>
        <MainHeader >
          <MainMenu/>
        </MainHeader>
        <div className="Poner espacio para bajar los componentes">
          <Outlet />
        </div>
    </div>
  )
}

export default App
