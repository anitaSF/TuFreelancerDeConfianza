import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import { Link } from "react-router-dom";

function HeaderFreelanceDetails() {
    const context = useContext(freelanceContext);

    return (
        <header>
            <Link to={'/freelancers'}>
                <h2 className="title-pag">❮ {context.categorySelected} de confianza</h2>
            </Link>
        </header>
    )
}

export default HeaderFreelanceDetails