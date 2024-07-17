
import { Link } from "react-router-dom"


function MainLogin({ userType }) {

    return (
        <main className={userType}>
            <h2>¡BIENVENIDO!</h2>

            <img></img>

            <p>
                Accede a la plataforma y encuentra <b>Tu Freelancer de confianza</b>
            </p>

            <form action="">
                <input type="text" name="username" placeholder="Usuario" />

                <input type="password" name="password" placeholder="Contraseña" />
            </form>
            {/* aquí hay que ponerle una funcionalidad y vrear más paginas No merece la pena añadirlo
            <p>Olvidaste tu contraseña</p>
            */}
            <button>Acceder</button>

            <p>¿Todavia no tienes una cuenta?</p>
            <Link to={`/${userType}`}>
                <p>Regístrate</p>
            </Link>
        </main>
    )
}

export default MainLogin
