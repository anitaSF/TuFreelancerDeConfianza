import { Link } from "react-router-dom";
import bgHeader from "../../images/bg-header.webp";

function HeaderRegisterCustomer() {
    return (
        <header className="customerRegister" style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
            <nav>
                <Link to="/">
                    <h2 className="title-pag"><span>❮</span> Registro</h2>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderRegisterCustomer;