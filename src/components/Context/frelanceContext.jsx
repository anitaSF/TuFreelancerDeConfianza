import { useState } from "react";
import { createContext } from "react";

//Este contexto es para guardar la información de la lista de freelancers que nos bajemos de la api

export const freelanceContext = createContext();

export const useFreelanceContext = () => {

    const [freelancer, setFreelancer] = useState([]);

    return { freelancer, setFreelancer };
};