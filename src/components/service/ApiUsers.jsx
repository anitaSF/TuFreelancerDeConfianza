/* Función para registrarse hay que enviar un objeto con esta estructura 
{
  "name": "" ,
  "email": "" ,
  "password": ""
} */

async function getUserRegister(userData) {
    const solution = await fetch('https://proyecto-node-vercel.onrender.com/user/register', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const solutionData = await solution.json();

    return solutionData
}

/* función para el login */
async function getUserLogin(userData) {
    const solution = await fetch("https://proyecto-node-vercel.onrender.com/user/login", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const solutionData = await solution.json();

    return solutionData
}

async function getUserValid(token) {
    const solution = await fetch("https://proyecto-node-vercel.onrender.com/user/isLogin", {
        method: 'POST',
        body: JSON.stringify(token),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const solutionData = await solution.json();

    return solutionData
}

export { getUserRegister, getUserLogin, getUserValid }