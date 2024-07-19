
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import {userDataContext} from "../Context/userDataContext.jsx";


function MainLogin({ userType }) {

        const context = useContext(userDataContext)

        const [empty, setEmpty] = useState("")

    const handleClick = (ev) => {
        ev.preventDefault();
        if (userData) {
            context.setUserData(userData)
            
                   } else {

                    setEmpty("Por favor complete los campos")

                   }
    };

   const [userData, setUserData] = useState({
      username:"",
      password:""
    })
console.log(context);
    const handleChange = (ev) => {
    const {name,value} = ev.target
    setUserData({...userData,[name]: value})
    
    }

    return (
        <main className={userType}>
            <h2>¡BIENVENIDO!</h2>

            <img></img>

            <p>
                Accede a la plataforma y encuentra <b>Tu Freelancer de confianza</b>
            </p>

            <form action="">
                <input onChange={handleChange} type="text" name="username" placeholder="Usuario" />

                <input onChange={handleChange} type="password" name="password" placeholder="Contraseña" />
            </form>
            <p> {empty}</p>
            {/* aquí hay que ponerle una funcionalidad y vrear más paginas No merece la pena añadirlo
            <p>Olvidaste tu contraseña</p>
            */}
            <button onClick={handleClick}>Acceder</button>

            <p>¿Todavia no tienes una cuenta?</p>
            <Link to={`/${userType}`}>
                <p>Regístrate</p>
            </Link>
        </main>
    )
}

export default MainLogin
