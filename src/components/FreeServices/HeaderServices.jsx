import logo from "../../images/TFC-logo-min.webp";
import bgHeader from "../../images/bg-header.webp";

function HeaderServices() {
    return (
        <header style={{ backgroundImage: `url(${bgHeader})` }}>
            <h1><img className="logo-header" src={logo} alt="Tu freelancer de confianza" /></h1>
        </header>
    )
}

export default HeaderServices