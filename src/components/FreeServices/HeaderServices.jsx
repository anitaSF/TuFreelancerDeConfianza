import { Link } from "react-router-dom";
import infoLog from "../../images/info.png";

function HeaderServices() {
    return (
        <header>
            <h1><img className="logo-header" src="src/images/TFC-logo.png" alt="Tu freelancer de confianza" /></h1>
            <Link to="/info" state="/services">
                <img src={infoLog} alt="" />
            </Link>
        </header>
    )
}

export default HeaderServices