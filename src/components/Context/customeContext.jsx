import { useState } from "react";
import { createContext } from "react";

//Este contexto es para guardar la información de la lista de users que nos tenemos en la api y comprobar que el usuario está registrado

export const customerContext = createContext();

export const useCustomeContext = () => {

    const [custome, setCustome] = useState([]);

    return { custome, setCustome };
};