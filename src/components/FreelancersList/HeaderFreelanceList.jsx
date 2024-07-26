import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import bgHeader from "../../images/bg-header.webp";
import { Link } from "react-router-dom";

function HeaderFreelanceList() {
    const context = useContext(freelanceContext);

    context.changeClass();

    return (
        <header className={context.classSelected} style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
            <nav>
                <Link to={'/services'}>
                    <h2 className="title-pag"><span>❮</span>  {context.categorySelected} </h2>
                </Link>
            </nav>

        </header>
    )
}

export default HeaderFreelanceList