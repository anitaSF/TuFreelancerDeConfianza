import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MainFreelanceDetails() {
    const context = useContext(freelanceContext);

    context.changeClass();

    const { idFreelancer } = useParams();

    const findFreelancer = context.listFreelancer.find((freelancer) => freelancer.id === (idFreelancer));

    return (

        <main>
            <section className="body">
                <article className="free-detail">
                    {findFreelancer ? (
                        <>
                            <div className="datos-freelancer">
                                <img className="foto-detail" src={findFreelancer.img} />
                                <div className="text-detail">
                                    <h3 className="name-detail">{findFreelancer.name} {findFreelancer.surname}</h3>
                                    <h4 className="location-detail">{findFreelancer.location}</h4>
                                    <h2 className={`${context.classSelected} budget-detail`} style={{ backgroundColor: '#fff' }}>{findFreelancer.budget} €<small>/hora</small></h2>
                                </div>
                            </div>
                            <div className="datos-prof">
                                <h6 className="info-title">Titulación</h6>
                                <p>{findFreelancer.title}</p>

                                <h6 className="info-title">Presentación</h6>
                                <p>{findFreelancer.description}</p>
                            </div>
                            <div className="cv-detail">
                                <a className={`${context.classSelected} icon-cv`} style={{ backgroundColor: '#fff' }} href="https://www.linkedin.com/feed/">㏌</a>
                                <a className={context.classSelected} style={{ backgroundColor: '#fff' }} href="https://www.linkedin.com/feed/">Ver Perfil Linkedin</a>
                            </div>
                            <div className="contact-detail">
                                <button className={context.classSelected} >
                                    <a href={`mailto:${findFreelancer.email}`}>Contactar</a>
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </article>
            </section>
        </main>
    )
}

export default MainFreelanceDetails;