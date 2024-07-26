import { Link } from "react-router-dom";
import logo from "../../images/TFC-logo-min.webp";
import bgHeader from "../../images/bg-header.webp";

function HeaderServices() {
    return (
        <header className="customerRegister" style={{ backgroundImage: `url(${bgHeader})` }}>
            <div className="head-services">
                <Link to="/">
                    <h2 className="info"><span>⎋</span></h2>
                </Link>

                <h1><img className="logo-services" src={logo} alt="Tu freelancer de confianza" /></h1>
                <Link to="/info" state="/">
                    <h2 className="info"><span className="big-icon">ⓘ</span></h2>
                </Link>
            </div>
        </header>
    )
}

export default HeaderServices