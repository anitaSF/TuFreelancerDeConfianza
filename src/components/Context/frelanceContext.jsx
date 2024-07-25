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

    const [classSelected, setClassSelected] = useState('');

    const changeClass = () => {
        if (categorySelected === 'Tu Manitas de confianza') {
            setClassSelected('manitas');
        } else if (categorySelected === 'Tu Cuidador de confianza') {
            setClassSelected('cuidador');
        } else if (categorySelected === 'Tu Profesor de confianza') {
            setClassSelected('profesor');
        } else if (categorySelected === 'Tu Técnico de confianza') {
            setClassSelected('tecnico');
        } else if (categorySelected === 'Tu Canguro de confianza') {
            setClassSelected('canguro');
        } else if (categorySelected === 'Tu Auxiliar de confianza') {
            setClassSelected('auxiliar');
        } else if (categorySelected === 'Tu Informático de confianza') {
            setClassSelected('informatico');
        }
    };


    useEffect(() => {
        getFreelancersData()
            .then(data => setListFreelancer(data))
            .catch(error => console.error('Error in useEffect: ', error));
    }, []);

    return { listFreelancer, setListFreelancer, categoryFree, setCategoryFree, categorySelected, setCategorySelected, setUserFreelancer, userFreelancer, classSelected, changeClass };

};