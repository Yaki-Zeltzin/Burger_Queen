import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import App from "../components/templates/App"
import Login from "../components/pages/Login"
import PageOrders from "../components/pages/PageOrders"
import CookPage from "../components/pages/CookPage"
import RegisterStaff from "../components/pages/RegisterStaff"
import PageWorkers from "../components/pages/PageWorkers"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children:[
            {
                index: true,
                element: <PageOrders />,
            },
            {
                path: "/mealPrep",
                element: <CookPage />,
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <RegisterStaff />,
    },{
        path: "/pageWorkers",
        element: <PageWorkers />,
    },
])

export default router