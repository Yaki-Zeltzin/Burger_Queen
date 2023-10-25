import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import Home from "../components/pages/Home"
import App from "../components/templates/App"
import Orders from "../components/pages/Orders"
import Login from "../components/pages/Login"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/orders",
                element: <Orders />,
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router