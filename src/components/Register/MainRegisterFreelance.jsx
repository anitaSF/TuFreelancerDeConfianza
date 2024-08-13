import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../Context/userDataContext";
import { freelanceContext } from "../Context/frelanceContext";
import { getPostFreelancerData } from "../service/ApiFreelancers";
import { getUserLogin, getUserRegister } from "../service/ApiUsers";
import LoginData from "./LoginData";
import Loding from "../loding/Loding";


function MainRegisterFreelance() {
    const contextUser = useContext(userDataContext);

    const navigate = useNavigate();

    const contextFreelance = useContext(freelanceContext);

    const [loginData, setLoginData] = useState({});

    const [userFreelanceData, setuserFreelanceData] = useState({});

    const [errorText, setErrorText] = useState("");

    const [displayLoading, setdisplayLoading] = useState("none");

    const [displayButton, setDisplayButton] = useState("block");

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

        setdisplayLoading("block");
        setDisplayButton("none");

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
                setdisplayLoading("none");
                setDisplayButton("block");
            }
        } else {
            setErrorText(`No se ha podido realizar el registro porque ${solutionRegiter.message}`);
            setdisplayLoading("none");
            setDisplayButton("block");
        }

        ev.target.reset()
    }

    return (
        <main>
            <section className="body">
                <h2 className="dest-freelancer title">¡Hola!</h2>
                <p className="text-center">
                    Si eres <strong>Freelancer</strong>, regístrate aquí
                </p>
                <p className="errorText">{errorText}</p>
                <form className="margin-med" onChange={handleChange} onSubmit={handleSubmit}>
                    <LoginData />
                    <hr />
                    <fieldset className="datos-prof">
                        <legend className=""><strong>Datos profesionales</strong></legend>
                        <fieldset>
                            <label className="m-right p-top" htmlFor="category">¿Qué tipo de freelancer eres?</label>
                            <select name="category" id="category">
                                <option value="">Selecciona una opción</option>
                                <option value="Tu Cuidador de confianza">Cuidador</option>
                                <option value="Tu Informático de confianza">Informático</option>
                                <option value="Tu Canguro de confianza">Canguro</option>
                                <option value="Tu Profesor de confianza">Profesor</option>
                                <option value="Tu Manitas de confianza">Manitas</option>
                                <option value="Tu Auxiliar de confianza">Auxiliar</option>
                                <option value="Tu Técnico de confianza">Técnico</option>
                            </select>
                        </fieldset>

                        <fieldset className="no-margin">
                            <label className="m-right p-top" htmlFor="img">Foto de perfil</label>
                            <input type="text" name="img" id="img" placeholder="Añade el url de una foto tuya" />
                        </fieldset>
                        <fieldset>
                            <div className="row m-right m-bottom">
                                <label htmlFor="title">Titulación</label>
                                <input type="text" name="title" id="title" placeholder="Indica tu titulación" />
                            </div>
                            <div className="row">
                                <label htmlFor="cv">Indica la url de tu curriculum</label>
                                <input type="text" name="cv" id="cv" placeholder="Añadir curriculum" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="row m-right m-bottom">
                                <label htmlFor="budget">Presupuesto</label>
                                <input type="num" name="budget" id="budget" placeholder="€/hora" />
                            </div>
                            <div className="row">
                                <label htmlFor="location">Ubicación de trabajo</label>
                                <input type="text" name="location" id="location" placeholder="Indica tu disposición geográfica" />
                            </div>
                        </fieldset>
                        <fieldset className="datos-prof no-margin">
                            <label htmlFor="description">Presentación</label>
                            <textarea type="text" name="description" id="description" placeholder="Escribe tu carta de presentación" />
                        </fieldset>
                    </fieldset>
                    <button className="btn-freelancer" type="submit" style={{ display: displayButton }}>Regístrarme</button>
                </form>
                <article style={{ display: displayLoading }}>
                    <Loding />
                </article>
            </section>
        </main>
    )
}

export default MainRegisterFreelance
