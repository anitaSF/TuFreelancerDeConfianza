import { useState } from "react";
import { createContext } from "react";

//Este contexto es para guardar la información del usuario al iniciar sesión

export const userDataContext = createContext();

export const useUserDataContext = () => {
    const initial_state_userReg = {
        name: "",
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState(null);

    const useRegisterToLogin = (emailVar, passwordVar) => {
        const loginUser = {
            email: emailVar,
            password: passwordVar,
        }

        return loginUser
    }

    return { userData, setUserData, initial_state_userReg, useRegisterToLogin };
};