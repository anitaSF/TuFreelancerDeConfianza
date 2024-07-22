import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import { useParams } from "react-router-dom";

function MainFreelanceDetails() {
    const context = useContext(freelanceContext);

    const { idFreelancer } = useParams();

    const findFreelancer = context.listFreelancer.find((freelancer) => freelancer.id === (idFreelancer));

    return (
        <article className="free-card">
            {findFreelancer ? (
                <>
                    <img src={findFreelancer.img} />
                    <div className="text-card">
                        <h3>{findFreelancer.name} {findFreelancer.surname}</h3>
                        <h4>{findFreelancer.location}</h4>
                        <h2>{findFreelancer.budget} €<small>/hora</small></h2>
                    </div>
                    <div>
                        <h6>Titulación</h6>
                        <p>{findFreelancer.title}</p>
                    </div>
                    <div>
                        <h6>Presentación</h6>
                        <p>{findFreelancer.description}</p>
                    </div>
                    <div>
                        <a href={findFreelancer.cv}><img /></a>
                        <a href={findFreelancer.cv}>Ver Perfil Linkedin</a>
                    </div>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </article>
    )
}

export default MainFreelanceDetails;