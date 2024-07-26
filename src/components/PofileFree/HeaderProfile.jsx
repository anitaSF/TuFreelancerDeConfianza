import { Link } from "react-router-dom";

export default function HeaderProfile() {


    return (
        <header>
            <h1>Tu perfil de Freelancer</h1>
            <h2> {"Catgoría"} Auxiliar de confianza</h2>
            <Link to="/info" state="/yourProfile">
                <h2 className="info"><span className="big-icon">ⓘ</span></h2>
            </Link>
        </header>
    )
}
