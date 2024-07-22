
import { Link } from "react-router-dom";

function FreelancerCard({ freelancer }) {
    return (
        <>
            <article className="free-card">
                <img src={freelancer.img} />
                <div className="text-card">
                    <h3>{freelancer.name} {freelancer.surname}</h3>
                    <h4>{freelancer.location}</h4>
                    <h2>{freelancer.budget} €<small>/hora</small></h2>
                </div>
                <Link to={`/freelancers/${freelancer.id}`}>
                    <button>Ver perfil</button>
                </Link>
            </article>
        </>
    )
}

export default FreelancerCard;