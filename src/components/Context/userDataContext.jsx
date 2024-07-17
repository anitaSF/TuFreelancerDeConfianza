import { useState } from "react";
import { createContext } from "react";

//Este contexto es para guardar la información del usuario al iniciar sesión

export const userDataContext = createContext();

export const useUserDataContext = () => {

    const [userData, setUserData] = useState([]);

    return { userData, setUserData };
};