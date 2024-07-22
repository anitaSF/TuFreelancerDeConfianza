import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import { Link } from "react-router-dom";

function HeaderFreelanceList() {
    const context = useContext(freelanceContext);

    return (
        <header>
            <Link to={'/services'}>
                <h2 className="title-pag">❮ {context.categorySelected} de confianza</h2>
            </Link>
        </header>
    )
}

export default HeaderFreelanceList