import { useContext, useState } from "react"
import LoginData from "./LoginData"
import { userDataContext } from "../Context/userDataContext"


function MainRegisterCustomer() {
    const context = useContext(userDataContext)

    const [userForm, setUserForm] = useState(context.userData);

    const handleChange = (ev) => {
        ev.preventDefault();
        setUserForm({ ...userForm, [ev.target.id]: ev.target.value });
    }

    return (
        <main>
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Cliente</strong>, regístrate aquí</h2>
            <form onChange={handleChange} onSubmit={() => { }}>
                <LoginData />
                <button>Registrarme</button>
            </form>
        </main>
    )
}

export default MainRegisterCustomer
