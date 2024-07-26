import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { freelanceContext } from "../Context/frelanceContext";
import { getRemoveFreelancer } from "../service/ApiFreelancers";

export default function MainProfile() {
    const context = useContext(freelanceContext);

    const [confirm, setConfirm] = useState(false);

    const [userIdfreelance, setUserIdFreelance] = useState([]);

    const navegateLogin = useNavigate();

    const handleDeleteProfile = () => {

        confirmDeleteProfile();

        if (confirm) {
            freelancerFilter();

            if (userIdfreelance) {
                console.log(userIdfreelance.id);
                const response = getRemoveFreelancer(userIdfreelance.id);
                console.log(response);
                context.setUserFreelancer({});
                localStorage.clear();
                navegateLogin("/");
            }

        } else {
            console.log("se aborta operación no se filtra");
        }
    }

    const freelancerFilter = () => {
        const userEmail = context.userFreelancer.email.trim().toLowerCase();
        console.log("Email from localStorage:", typeof userEmail);

        if (userEmail) {
            console.log("userListFreelancer:", context.listFreelancer);
            // Normaliza los emails en userListFreelancer antes de la comparación: trim().toLowerCase()
            const filteredUser = context.listFreelancer.filter((user) => {
                return user.email.trim().toLowerCase() === userEmail
            });

            console.log("Filtered user:", filteredUser);

            const filteredUserObject = filteredUser[0];

            return setUserIdFreelance(filteredUserObject);
        } else {
            console.warn("No se encontró el email");
        }
    };

    const confirmDeleteProfile = () => {
        if (window.confirm("¿estas seguro que deseas eliminar tu perfil?")) {
            setConfirm(true);
            console.log("Se confirma eliminar perfil");
        } else {
            setConfirm(false);
            console.log("Cancelado");
        }
    }

    return (
        <main>
            <section className="body">
                <article className="free-detail">
                    <div className="datos-freelancer">
                        <img className="foto-detail" src={context.userFreelancer.img} alt={context.userFreelancer.name} />
                        <div className="text-detail">
                            <h3 className="name-detail">{context.userFreelancer.name} {context.userFreelancer.surname}</h3>
                            <h4 className="location-detail">{context.userFreelancer.location}</h4>
                            <h2 className="freelancer-dest budget-detail">{context.userFreelancer.budget} €<small>/hora</small></h2>
                        </div>
                    </div>
                    <div className="datos-prof">
                        <h6 className="info-title">Titulación</h6>
                        <p>{context.userFreelancer.title}</p>

                        <h6 className="info-title">Presentación</h6>
                        <p>{context.userFreelancer.description}</p>
                    </div>
                    <div className="cv-detail">
                        <a className="link-cv icon-cv" href="https://www.linkedin.com/feed/">㏌</a>
                        <a className="link-cv" href="https://www.linkedin.com/feed/">Ver Perfil Linkedin</a>
                    </div>
                    <div className="edit-detail">
                        <button className="edit-btn">
                            <Link to='/yourProfile/editProfile'>
                                Editar Perfil
                            </Link>
                        </button>
                        <button className="delete-btn" type="button" onClick={() => { handleDeleteProfile() }}><span>Eliminar perfil</span> 🗑</button>
                    </div>
                </article>
            </section>
        </main>
    )
}
