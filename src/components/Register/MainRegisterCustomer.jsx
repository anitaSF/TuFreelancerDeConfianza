import { useContext, useState } from "react"
import LoginData from "./LoginData"
import { userDataContext } from "../Context/userDataContext"
import { getUserLogin, getUserRegister } from "../service/ApiUsers";


function MainRegisterCustomer() {
    const context = useContext(userDataContext)

    const [userForm, setUserForm] = useState(context.initial_state_userlog);

    const handleChange = (ev) => {
        ev.preventDefault();
        setUserForm({ ...userForm, [ev.target.id]: ev.target.value });
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log(ev);
        const response = await getUserRegister(userForm);
        console.log(response);
        const loginUser = await context.useRegisterToLogin(userForm.name, userForm.email, userForm.password);
        console.log(loginUser);

        if (response.success) {
            const loginreesponse = await getUserLogin(loginUser);
            console.log(loginreesponse);
            if (loginreesponse.sucess) {
                context.setUserData(loginreesponse);
            }
        }
    }

    return (
        <main>
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Cliente</strong>, regístrate aquí</h2>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <LoginData />
                <button type="submit">Registrarme</button>
            </form>
        </main>
    )
}


export default MainRegisterCustomer
