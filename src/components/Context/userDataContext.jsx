import { useState } from "react";
import { createContext } from "react";

//Este contexto es para guardar la información del usuario al iniciar sesión

export const userDataContext = createContext();

export const useUserDataContext = () => {
    const initial_state_userlog = {
        name: "",
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState(initial_state_userlog);

    return { userData, setUserData, initial_state_userlog };
};