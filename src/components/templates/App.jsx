//Plantilla para visualizar el menu en diferentes páginas(outlet)
import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
  return (
    <div>
        <MainHeader />
        <Outlet />
    </div>
  )
}

export default App
