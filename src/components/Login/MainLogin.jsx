
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userDataContext } from "../Context/userDataContext.jsx";
import { freelanceContext } from "../Context/frelanceContext.jsx";
import { getUserLogin } from "../service/ApiUsers.jsx";

import icono from "../../images/TFC-ico.webp";


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
        <main>
            <section className="body">

                <h2 className={`${userType} title`} style={{ backgroundColor: '#fff' }}>¡Bienvenido!</h2>

                <p className="text-center">
                    Accede a la plataforma y encuentra <strong className="block"> Tu Freelancer de confianza</strong>
                </p>
                <div>
                    <img className={`${userType} icono`} src={icono} />
                </div>

                <p>{empty}</p>

                <form onSubmit={handleSubmit}>

                    <input className="field-login" onChange={handleChange} type="email" name="email" placeholder="Email" />
                    <input className="field-login" onChange={handleChange} type="password" name="password" placeholder="Contraseña" />
                    <Link to="/services"><button className={userType} style={{ color: '#fff' }} type="submit">Acceder</button></Link>
                </form>
                <p>{empty}</p>

                {/* aquí hay que ponerle una funcionalidad y vrear más paginas No merece la pena añadirlo
            <p>Olvidaste tu contraseña</p>
            */}

                <div>
                    <span className="text-small">¿Todavia no tienes una cuenta?
                    </span>
                    <Link className={`${userType} link-form`} style={{ backgroundColor: '#fff' }} to={`/${userType}`}>
                        Regístrate
                    </Link>
                </div>
            </section>
        </main >
    )
}

export default MainLogin
