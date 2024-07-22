import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../Context/userDataContext"
import { getUserLogin, getUserRegister } from "../service/ApiUsers";
import LoginData from "./LoginData"


function MainRegisterCustomer() {
    const context = useContext(userDataContext);

    const navigate = useNavigate();

    const [userForm, setUserForm] = useState(context.initial_state_userlog);

    const [errorText, setErrorText] = useState("");

    const handleChange = (ev) => {
        ev.preventDefault();
        setUserForm({ ...userForm, [ev.target.id]: ev.target.value });
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const response = await getUserRegister(userForm);

        console.log(response);

        const loginUser = await context.useRegisterToLogin(userForm.email, userForm.password);

        console.log(loginUser);

        if (response.success) {
            const loginreesponse = await getUserLogin(loginUser);

            console.log(loginreesponse);

            if (loginreesponse.success) {
                context.setUserData(loginreesponse);
                const token = loginreesponse.token;
                localStorage.setItem("user", JSON.stringify(token));
                navigate('/services')
            } else {
                setErrorText(`No se ha podido iniciar la sesión porque ${loginreesponse.message}`)
            }
        } else {
            setErrorText(`No se ha podido realizar el registro porque ${response.message}`)
        }

        ev.target.reset();
    }

    return (
        <main>
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Cliente</strong>, regístrate aquí</h2>
            <p className="errorText">{errorText}</p>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <LoginData />
                <button type="submit">Registrarme</button>
            </form>
        </main>
    )
}


export default MainRegisterCustomer
