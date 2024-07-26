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
                <article>
                    <figure>
                        <img src={context.userFreelancer.img} alt={context.userFreelancer.name} />
                    </figure>
                    <h3>{context.userFreelancer.name}</h3>
                    <h4>{context.userFreelancer.surname}</h4>
                    <p>{context.userFreelancer.location}</p>
                    <p>{context.userFreelancer.budget}</p>
                </article>
                <article>
                    <h3>Titulación</h3>
                    <p>{context.userFreelancer.title}</p>
                </article>
                <article>
                    <h3>Presentación</h3>
                    <p>{context.userFreelancer.description}</p>
                </article>
                <article>
                    <a href="rutaDelArchivo" download="curriculumFreelancer">
                        <img src="" alt="" />
                        <p>Ver CV adjunto</p>
                    </a>
                </article>
                {/* los botones deberían ir en otro componente con su lógica */}
                <article>
                    <div>
                        <Link to='/yourProfile/editProfile'>
                            <button>Editar perfil</button>
                        </Link>
                        <button type="button" onClick={() => { handleDeleteProfile() }}>Eliminar perfil</button>
                    </div>
                </article>
            </section>
        </main>
    )
}
