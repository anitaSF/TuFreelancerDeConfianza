
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userDataContext } from "../Context/userDataContext.jsx";
import { freelanceContext } from "../Context/frelanceContext.jsx";
import { getUserLogin } from "../service/ApiUsers.jsx";


function MainLogin({ userType }) {
    const navigat = useNavigate();

    const context = useContext(userDataContext);
    const contextFrelance = useContext(freelanceContext);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [empty, setEmpty] = useState("")

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (userData) {

            const solutionLogin = await getUserLogin(userData);
            setEmpty("");

            console.log(solutionLogin);

            if (solutionLogin.success) {
                const token = await solutionLogin.token;
                await context.setUserData(token);
                localStorage.setItem("user", JSON.stringify(token));

                localStorage.setItem("email", JSON.stringify(userData.email));

                if (userType === 'customerRegister') {
                    navigat('/services');

                } else if (userType === 'freelancerRegister') {

                    contextFrelance.setUserFreelancer(userData);
                    console.log(contextFrelance.listFreelancer);

                    const freelanceData = contextFrelance.listFreelancer;

                    const freelanceUserDataArray = freelanceData.filter((freelance) => {
                        return freelance.email === userData.email;
                    });
                    const [freelanceUserData] = freelanceUserDataArray;

                    if (freelanceUserData.email) {

                        contextFrelance.setUserFreelancer(freelanceUserData);
                        navigat('/yourProfile');

                    } else {
                        setEmpty("Este usuario no es un freelancer. Por favor, realice el inicio de sesión en la opción de cliente.");
                    }
                }
            } else {
                setEmpty(`No se ha podido iniciar sesión porque ${solutionLogin.message}`);
            }

        } else {

            setEmpty("Por favor complete los campos");

        }

        ev.target.reset;
    };


    const handleChange = (ev) => {
        const { name, value } = ev.target
        setUserData({ ...userData, [name]: value })

    }

    return (
        <main className={userType}>
            <h2>¡BIENVENIDO!</h2>

            <img></img>

            <p>
                Accede a la plataforma y encuentra <strong>Tu Freelancer de confianza</strong>
            </p>

            <p>{empty}</p>

            <form onSubmit={handleSubmit}>

                <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                <input onChange={handleChange} type="password" name="password" placeholder="Contraseña" />
                <button type="submit">Acceder</button>

            </form>
            <p>{empty}</p>

            {/* aquí hay que ponerle una funcionalidad y vrear más paginas No merece la pena añadirlo
            <p>Olvidaste tu contraseña</p>
            */}


            <p>¿Todavia no tienes una cuenta?</p>
            <Link to={`/${userType}`}>
                <p>Regístrate</p>
            </Link>
        </main>
    )
}

export default MainLogin
