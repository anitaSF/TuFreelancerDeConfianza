import { useState } from "react";
import { createContext } from "react";

//Este contexto es para guardar la información de la lista de freelancers que nos bajemos de la api

export const freelanceContext = createContext();

export const useFreelanceContext = () => {

    const [freelancer, setFreelancer] = useState([]);

    const [userFreelancer, setUserFreelancer] = useState({});

    const [categoryFree, setCategoryFree] = useState([
        'Tu Manitas de confianza',
        'Tu Cuidador de confianza',
        'Tu Profesor de confianza',
        'Tu Técnico de confianza',
        'Tu Canguro de confianza',
        'Tu Auxiliar de confianza'
    ]);

    return { freelancer, setFreelancer, categoryFree, setCategoryFree, setUserFreelancer, userFreelancer };
};