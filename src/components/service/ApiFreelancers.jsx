//Apis de los datos de los freelancers

async function getFreelancersData() {
    try {
        const dataFetchApi = await fetch('https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/', {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });

        const dataMenu = await dataFetchApi.json();
        return dataMenu
    } catch (error) {
        console.log(error);
    }
}

async function getFreelancerData(userId) {
    try {
        const dataFetchApi = await fetch(`https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/${userId}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });

        const dataMenu = await dataFetchApi.json();
        return dataMenu
    } catch (error) {
        console.log(error);
    }
}

async function getPostFreelancerData(userId) {
    try {
        await fetch(`https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userId)
        })
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
        await fetch(`https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/${userId}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }

}

export { getFreelancerData, getPostFreelancerData, getPutFreelancerData, getRemoveFreelancer, getFreelancersData }