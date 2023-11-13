import { createContext, useEffect, useState } from "react";
import { token } from "../helpers/auth";
import axios from "axios";
import { API_URL } from "../constants/env";

const UserContext = createContext() //información

const UserProvider = ({children}) => { //provee el contexto

    const [userData, setUserData] = useState()

    useEffect(()=> {
        if(token){
            axios.get(`${API_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                },
            })
            .then(resp => {
                setUserData(resp.data)
            })
        }
    },[])

    return(
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}
