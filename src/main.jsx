import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router/Router'
import { UserProvider } from './context/UserContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
)
