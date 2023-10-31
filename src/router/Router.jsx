import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import App from "../components/templates/App"
import Login from "../components/pages/Login"
import PageOrders from "../components/pages/PageOrders"
import CookPage from "../components/pages/CookPage"
import RegisterStaff from "../components/pages/RegisterStaff"
import PageWorkers from "../components/pages/PageWorkers"
import Form from "../components/pages/admin/products/Form"
import Table from "../components/pages/admin/products/Table"

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
    {
        path: "/admin/products",
        element: <Table />,
    },
    {
        path: "/admin/addProducts",
        element: <Form />,
    },
])

export default router