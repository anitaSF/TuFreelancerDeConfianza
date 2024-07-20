import { useContext, useState } from "react";
import LoginData from "./LoginData"
import { userDataContext } from "../Context/userDataContext";
import { useFreelanceContext } from "../Context/frelanceContext";
import { getUserLogin } from "../service/ApiUsers";


function MainRegisterFreelance() {
    const contextUser = useContext(userDataContext);

    const contextFreelance = useContext(useFreelanceContext);

    const [loginData, setLoginData] = useState({});

    const [userFreelanceData, setuserFreelanceData] = useState({});

    const handleChange = (ev) => {
        ev.preventDefault();

        if (ev.target.id === "name" || ev.target.id === "email" || ev.target.id === "password") {
            setLoginData({ ...loginData, [ev.target.id]: ev.target.value });
            setuserFreelanceData({ ...userFreelanceData, [ev.target.id]: ev.target.value });
        } else {
            setuserFreelanceData({ ...userFreelanceData, [ev.target.id]: ev.target.value });
        }

    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        console.log(ev);
        const solution = await getUserLogin(loginData);

        if (solution.success) {
            const token = solution.token;
            await contextUser.setUserData(token);
            localStorage.setItem("user", JSON.stringify(token));
        }
        ev.target.reset()
    }

    return (
        <main className="container">
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Freelancer</strong>, regístrate aquí</h2>
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
