import { Link } from "react-router-dom";
import logo from "../../images/TFC-logo-min.webp";
import bgHeader from "../../images/bg-header.webp";
import infoLog from "../../images/info.png";

function HeaderServices() {
    return (
         <header style={{ backgroundImage: `url(${bgHeader})` }}>
            <h1><img className="logo-header" src={logo} alt="Tu freelancer de confianza" /></h1>
            <Link to="/info" state="/services">
                <img src={infoLog} alt="" />
            </Link>
        </header>
    )
}

export default HeaderServices