import { Link } from "react-router-dom";
import bgHeader from "../../images/bg-header.webp";

function HeaderRegisterFree() {
    return (
        <header className='freelancerRegister' style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
            <nav>
                <Link to="/">
                    <h2 className="title-pag"><span>❮</span> Registro</h2>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderRegisterFree