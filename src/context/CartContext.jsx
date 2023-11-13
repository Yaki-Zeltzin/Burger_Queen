import { useReducer } from "react"
import { createContext } from "react"
import CartReducer from "./CartReducer"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const initialState = {
        cart: [],
    }

    const [state, dispatch] = useReducer(CartReducer, initialState) //state:valor que tiene el contexto, dispatch:funcion que va a modificar el estado inicial 
                                //(Funcion que modifica el estado, estado inicial)
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}