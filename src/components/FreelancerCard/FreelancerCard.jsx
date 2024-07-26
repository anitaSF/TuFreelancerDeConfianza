import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import { Link } from "react-router-dom";

function FreelancerCard({ freelancer }) {
    const context = useContext(freelanceContext);

    context.changeClass();

    return (
        <>
            <article className="free-card">
                <div className="datos-freelancer">
                    <img className="foto-perfil" src={freelancer.img} />
                    <div className="text-card">
                        <h3 className="name-card">{freelancer.name} {freelancer.surname}</h3>
                        <h4 className="location-card">{freelancer.location}</h4>
                        <h2 className={`${context.classSelected} budget`} style={{ backgroundColor: '#fff' }}>{freelancer.budget} €<small>/hora</small></h2>
                    </div>
                </div>
                <button className={context.classSelected} >
                    <Link style={{ color: '#fff' }} to={`/freelancers/${freelancer.id}`}>
                        Ver perfil <span>☞</span>
                    </Link>
                </button>
            </article>
        </>
    )
}

export default FreelancerCard;