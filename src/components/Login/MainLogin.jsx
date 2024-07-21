
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { userDataContext } from "../Context/userDataContext.jsx";
import { getUserLogin } from "../service/ApiUsers.jsx";


function MainLogin({ userType }) {

    const context = useContext(userDataContext)

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [empty, setEmpty] = useState("")

    const handleClick = async (ev) => {
        ev.preventDefault();
        if (userData) {

            const solutionLogin = await getUserLogin(userData);
            setEmpty("");

            if (solutionLogin.success) {
                const token = solutionLogin.token;
                await context.setUserData(token);
                localStorage.setItem("user", JSON.stringify(token));
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

            <form onClick={handleClick}>
                <input onChange={handleChange} type="email" name="email" placeholder="Email" />

                <input onChange={handleChange} type="password" name="password" placeholder="Contraseña" />
            </form>
            <p> {empty}</p>
            {/* aquí hay que ponerle una funcionalidad y vrear más paginas No merece la pena añadirlo
            <p>Olvidaste tu contraseña</p>
            */}
            <button type="submit">Acceder</button>

            <p>¿Todavia no tienes una cuenta?</p>
            <Link to={`/${userType}`}>
                <p>Regístrate</p>
            </Link>
        </main>
    )
}

export default MainLogin
