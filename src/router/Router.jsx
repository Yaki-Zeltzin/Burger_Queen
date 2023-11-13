import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import App from "../components/templates/App"
import Login from "../components/pages/Login"
import CookPage from "../components/pages/CookPage"
import RegisterStaff from "../components/pages/admin/products/RegisterStaff"
import PageWorkers from "../components/pages/admin/products/PageWorkers"
import Form from "../components/pages/admin/products/Form"
import Table from "../components/pages/admin/products/Table"
import Admin from "../components/templates/Admin"
import Product from "../components/pages/Product"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children:[ 
            {
                path: "/products/:id",
                element: <Product />,
            },
            {
                path: "/mealPrep",
                element: <CookPage />,
            }
        ]
    },
    {
        index: "/",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "/admin/register",
                element: <RegisterStaff />,
            },
            {
                path: "/admin/pageWorkers",
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
            {
                path: "/admin/products/:id",
                element: <Form />,
            },
        ]
    },

])

export default router