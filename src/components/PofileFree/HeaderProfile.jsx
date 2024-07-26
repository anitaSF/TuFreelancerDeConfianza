import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import { Link } from "react-router-dom";
import bgHeader from "../../images/bg-header.webp";

export default function HeaderProfile() {
    const context = useContext(freelanceContext);

    return (
        <header className='freelancerRegister' style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
            <nav>
                <Link to="/">
                    <h2 className="info"><span>⎋</span></h2>
                </Link>
                <div>
                    <h1 className="title-perfil">Tu perfil de Freelancer</h1>
                    <h2 className="title-pag">{context.userFreelancer.category} </h2>
                </div>
                <Link to="/info" state="/yourProfile">
                    <h2 className="info"><span className="big-icon">ⓘ</span></h2>
                </Link>
            </nav>
        </header>
    )
}
