import { useEffect, useState } from "react";
import { createContext } from "react";

import { getFreelancersData } from "../service/ApiFreelancers";

//Este contexto es para guardar la información de la lista de freelancers que nos bajemos de la api

export const freelanceContext = createContext();

export const useFreelanceContext = () => {

    const [listFreelancer, setListFreelancer] = useState([]);

    const [userFreelancer, setUserFreelancer] = useState();

    const [categoryFree, setCategoryFree] = useState([
        'Tu Manitas de confianza',
        'Tu Cuidador de confianza',
        'Tu Profesor de confianza',
        'Tu Técnico de confianza',
        'Tu Canguro de confianza',
        'Tu Auxiliar de confianza',
        'Tu Informático de confianza'
    ]);


    const [categorySelected, setCategorySelected] = useState('');

    useEffect(() => {
        getFreelancersData()
            .then(data => setListFreelancer(data))
            .catch(error => console.error('Error in useEffect: ', error));
    }, []);

    return { listFreelancer, setListFreelancer, categoryFree, setCategoryFree, categorySelected, setCategorySelected, setUserFreelancer, userFreelancer };

};