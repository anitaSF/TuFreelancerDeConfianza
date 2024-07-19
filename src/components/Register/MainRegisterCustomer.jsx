import LoginData from "./LoginData"


function MainRegisterCustomer() {
    return (
        <main>
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Cliente</strong>, regístrate aquí</h2>
            <form action="">
                <LoginData />
                <button>Registrarme</button>
            </form>
        </main>
    )
}

export default MainRegisterCustomer
