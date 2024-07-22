import { freelanceContext } from "../Context/frelanceContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MainServices() {
    const context = useContext(freelanceContext);
    const navigate = useNavigate();

    const handleSelect = (category) => {
        context.setCategorySelected(category);
        navigate('/freelancers');
    }

    return (
        <>
            <main className="container">
                <h2>¿Qué servicio estás buscando?</h2>
                <p>Selecciona el tipo de profesional que mejor se adapte a tus necesidades</p>
                <section className="services">
                    <button className="card manitas" onClick={() => handleSelect('Tu Manitas de confianza')}>
                        <a>
                            <img />
                            <h3>Tu Manitas de confianza</h3>
                        </a>
                    </button>
                    <button className="card cuidador" onClick={() => handleSelect('Tu Cuidador de confianza')}>
                        <a>
                            <img />
                            <h3>Tu Cuidador de confianza</h3>
                        </a>
                    </button>
                    <button className="card profesor" onClick={() => handleSelect('Tu Profesor de confianza')}>
                        <a>
                            <img />
                            <h3>Tu Profesor de confianza</h3>
                        </a>
                    </button>
                    <button className="card tecnico" onClick={() => handleSelect('Tu Técnico de confianza')}>
                        <a>
                            <img />
                            <h3>Tu Técnico de confianza</h3>
                        </a>
                    </button>
                    <button className="card canguro" onClick={() => handleSelect('Tu Canguro de confianza')}>
                        <a>
                            <img />
                            <h3>Tu Canguro de confianza</h3>
                        </a>
                    </button>
                    <button className="card auxiliar" onClick={() => handleSelect('Tu Auxiliar de confianza')}>
                        <a>
                            <img />
                            <h3>Tu Auxiliar de confianza</h3>
                        </a>
                    </button>
                </section>
            </main>
        </>
    )
}

export default MainServices