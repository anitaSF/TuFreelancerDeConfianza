import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../Context/userDataContext";
import { freelanceContext } from "../Context/frelanceContext";
import { getPostFreelancerData } from "../service/ApiFreelancers";
import { getUserLogin, getUserRegister } from "../service/ApiUsers";
import LoginData from "./LoginData"


function MainRegisterFreelance() {
    const contextUser = useContext(userDataContext);

    const navigate = useNavigate();

    const contextFreelance = useContext(freelanceContext);

    const [loginData, setLoginData] = useState({});

    const [userFreelanceData, setuserFreelanceData] = useState({});

    const [errorText, setErrorText] = useState("");

    const handleChange = (ev) => {
        ev.preventDefault();

        if (ev.target.id === "name" || ev.target.id === "email" || ev.target.id === "password") {
            setLoginData({ ...loginData, [ev.target.id]: ev.target.value });
            setuserFreelanceData({ ...userFreelanceData, [ev.target.id]: ev.target.value });
        } else {
            setuserFreelanceData({ ...userFreelanceData, [ev.target.id]: ev.target.value });
        }

    }

    console.log(userFreelanceData);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        contextFreelance.setUserFreelancer(userFreelanceData);

        const solutionRegiter = await getUserRegister(loginData);

        console.log(solutionRegiter);

        if (solutionRegiter.success) {
            await getPostFreelancerData(userFreelanceData);

            const solutionLogin = await getUserLogin(loginData);

            if (solutionLogin.success) {
                const token = solutionLogin.token;
                await contextUser.setUserData(token);
                localStorage.setItem("user", JSON.stringify(token));
                navigate('/yourProfile')
            } else {
                setErrorText("El registro se ha realizado correctamente pero no se ha podido iniciar sesión. Por favor acuda a la página de login para iniciar sesión")
            }
        } else {
            setErrorText(`No se ha podido realizar el registro porque ${solutionRegiter.message}`)
        }

        ev.target.reset()
    }

    return (
        <main className="container">
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Freelancer</strong>, regístrate aquí</h2>
            <p className="errorText">{errorText}</p>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <LoginData />
                <fieldset>
                    <legend>Datos profesionales</legend>
                    <div>
                        <label htmlFor="category">¿Qué tipo de freelancer eres?</label>
                        <select name="category" id="category">
                            <option value="">Selecciona una opción</option>
                            <option value="cuidador">Cuidador</option>
                            <option value="informatico">Informático</option>
                            <option value="canguro">Canguro</option>
                            <option value="profesor">Profesor</option>
                            <option value="manitas">Manitas</option>
                            <option value="auxiliar">Auxiliar</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="title">Titulación</label>
                        <input type="text" name="title" id="title" placeholder="Indica tu titulación" />
                    </div>
                    <div>
                        <label htmlFor="budget">Presupuesto</label>
                        <input type="num" name="budget" id="budget" placeholder="€/hora" />
                    </div>
                    <div>
                        <label htmlFor="location">Ubicación de trabajo</label>
                        <input type="text" name="location" id="location" placeholder="Indica tu disposición geográfica" />
                    </div>
                    <div>
                        <label htmlFor="description">Presentación</label>
                        <textarea type="text" name="description" id="description" placeholder="Escribe tu carta de presentación" /></div>
                    <div>
                        <label htmlFor="cv">Indica la dirección web de tu curriculum</label>
                        <input type="text" name="cv" id="cv" placeholder="Añadir curriculum" />
                    </div>
                </fieldset>
                <div>
                    <button type="submit">Regístrarme</button>
                </div>
            </form>
        </main>
    )
}

export default MainRegisterFreelance
