//Apis de los datos de los freelancers

import axios from "axios";

const APIHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer token"
}

const API = axios.create({
    baseURL: 'https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/',
    headers: APIHeaders,
})

const getFreelancersData = async () => {
    try {
        const response = await API.get('/user');
        return response.data;
    } catch (error) {
        console.error('Error fetching freelancers:', error);
        throw error;
    }

};



async function getPostFreelancerData(userId) {
    try {
        const solution = await fetch(`https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/user`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userId)
        }
        )
        return solution.json();
    } catch (error) {
        console.log(error);
    }
}

async function getPutFreelancerData(userId) {
    try {
        const dataFetchApi = await fetch(`https://6691859c26c2a69f6e9001c5.mockapi.io/api/${userId}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ completed: true })
        });

        const dataMenu = await dataFetchApi.json();
        return dataMenu
    } catch (error) {
        console.log(error);
    }
}

async function getRemoveFreelancer(userId) {
    try {
        const response = await fetch(`https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/user/${userId}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        });

        const readResponse = response.json();
        return readResponse;
    } catch (error) {
        console.log(error);
    }

}

export { getPostFreelancerData, getPutFreelancerData, getRemoveFreelancer, getFreelancersData }