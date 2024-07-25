import { Link } from "react-router-dom";
import infoLog from "../../images/info.png";

export default function HeaderProfile() {


    return (
        <header>
            <h1>Tu perfil de Freelancer</h1>
            <h2> {"Catgoría"} Auxiliar de confianza</h2>
            <Link to="/info" state="/yourProfile">
                <img src={infoLog} alt="info" />
            </Link>
        </header>
    )
}
