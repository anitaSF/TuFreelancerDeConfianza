import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import { Link } from "react-router-dom";
import bgHeader from "../../images/bg-header.webp";

function HeaderFreelanceDetails() {
    const context = useContext(freelanceContext);

    return (
        <header className={context.classSelected} style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
            <nav>
                <Link to={'/freelancers'}>
                    <h2 className="title-pag"><span>❮</span>  {context.categorySelected} </h2>
                </Link>
            </nav>

        </header>
    )
}

export default HeaderFreelanceDetails