//Apis de los usuarios de los clientes

async function getUserData(userId) {
    try {
        const dataFetchApi = await fetch(`https://6691859c26c2a69f6e9001c5.mockapi.io/api/${userId}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });

        const dataMenu = await dataFetchApi.json();
        return dataMenu
    } catch (error) {
        console.log(error);
    }
}


async function getPostUserData(userId) {
    try {
        await fetch(`https://6691859c26c2a69f6e9001c5.mockapi.io/api`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userId)
        })
    } catch (error) {
        console.log(error);
    }
}

async function getRemoveUser(userId) {
    try {
        await fetch(`https://6691859c26c2a69f6e9001c5.mockapi.io/api/${userId}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }

}

//Apis de los usuarios de los freelancers


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

async function getRemoveUser(userId) {
    try {
        await fetch(`https://6691899d26c2a69f6e900f96.mockapi.io/api/frelance/${userId}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }

}

export { getUserData, getPostUserData, getRemoveUser, getFreelancerData, getPostFreelancerData }