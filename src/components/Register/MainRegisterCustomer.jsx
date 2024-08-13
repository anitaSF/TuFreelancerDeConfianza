import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../Context/userDataContext"
import { getUserLogin, getUserRegister } from "../service/ApiUsers";
import LoginData from "./LoginData";
import Loding from "../loding/Loding";


function MainRegisterCustomer() {
    const context = useContext(userDataContext);

    const navigate = useNavigate();

    const [userForm, setUserForm] = useState(context.initial_state_userlog);

    const [errorText, setErrorText] = useState("");

    const [displayLoading, setdisplayLoading] = useState("none");

    const [displayButton, setDisplayButton] = useState("block");

    const handleChange = (ev) => {
        ev.preventDefault();
        setUserForm({ ...userForm, [ev.target.id]: ev.target.value });
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        setdisplayLoading("block");
        setDisplayButton("none");

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
                setErrorText(`No se ha podido iniciar la sesión porque ${loginreesponse.message}`);
                setdisplayLoading("none");
                setDisplayButton("block");
            }
        } else if (response.message) {

            setErrorText(`No se ha podido realizar el registro porque ${response.message}`);
            setdisplayLoading("none");
            setDisplayButton("block");

        } else {
            setErrorText(`No se ha podido realizar el registro`);
            setdisplayLoading("none");
            setDisplayButton("block");
        }

        ev.target.reset();
    }

    return (
        <main>
            <section className="body">
                <h2 className="dest-customer title">¡Hola!</h2>
                <p className="text-center">
                    Si eres <strong> Cliente</strong>, regístrate aquí
                </p>

                <p className="errorText">{errorText}</p>

                <form className="margin-med" onChange={handleChange} onSubmit={handleSubmit}>
                    <LoginData />
                    <button className="btn-clientes" type="submit">Registrarme</button>
                </form>
                <article style={{ display: displayLoading }}>
                    <Loding />
                </article>
            </section>
        </main>
    )
}


export default MainRegisterCustomer
