import { useContext, useState } from "react"
import LoginData from "./LoginData"
import { userDataContext } from "../Context/userDataContext"
import { Link } from "react-router-dom";
/* import { getUserRegister } from "../service/ApiUsers"; */


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
        context.setUserData(userForm);
    }

    /* const response = await getUserRegister(userForm);
    console.log(response); */
    /*  if (response.success) {
     
     return <Navigate to="/services" />}*/

    return (
        <main>
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Cliente</strong>, regístrate aquí</h2>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <LoginData />
                <Link to="/services">
                    <button>Registrarme</button>
                </Link>
            </form>
        </main>
    )
}


export default MainRegisterCustomer
