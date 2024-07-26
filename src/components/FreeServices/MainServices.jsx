import { freelanceContext } from "../Context/frelanceContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import manitasIco from "../../images/TFC-manitas-ico.webp";
import manitasText from "../../images/TFC-manitas-text.webp";
import cuidadorIco from "../../images/TFC-cuidador-ico.webp";
import cuidadorText from "../../images/TFC-cuidador-text.webp";
import profesorIco from "../../images/TFC-profesor-ico.webp";
import profesorText from "../../images/TFC-profesor-text.webp";
import tecnicoIco from "../../images/TFC-tecnico-ico.webp";
import tecnicoText from "../../images/TFC-tecnico-text.webp";
import canguroIco from "../../images/TFC-canguro-ico.webp";
import canguroText from "../../images/TFC-canguro-text.webp";
import auxiliarIco from "../../images/TFC-auxiliar-ico.webp";
import auxiliarText from "../../images/TFC-auxiliar-text.webp";

function MainServices() {
    const context = useContext(freelanceContext);
    const navigate = useNavigate();

    const handleSelect = (category) => {
        context.setCategorySelected(category);
        navigate('/freelancers');
    }

    return (
        <>
            <main>
                <section className="body">
                    <div className="intro">
                        <h2 className="subtitle text-center">¿Qué servicio estás buscando?</h2>
                        <p className="text-services">Selecciona el tipo de profesional que mejor se adapte a tus necesidades</p>
                    </div>
                    <div className="services">
                        <button className="card manitas" onClick={() => handleSelect('Tu Manitas de confianza')}>
                            <img src={manitasIco} className="icono-service" />
                            <h3><img src={manitasText} className="icono-service" /></h3>
                        </button>
                        <button className="card cuidador" onClick={() => handleSelect('Tu Cuidador de confianza')}>
                            <img src={cuidadorIco} className="icono-service" />
                            <h3><img src={cuidadorText} className="icono-service" /></h3>
                        </button>
                        <button className="card profesor" onClick={() => handleSelect('Tu Profesor de confianza')}>
                            <img src={profesorIco} className="icono-service" />
                            <h3><img src={profesorText} className="icono-service" /></h3>
                        </button>
                        <button className="card tecnico" onClick={() => handleSelect('Tu Técnico de confianza')}>
                            <img src={tecnicoIco} className="icono-service" />
                            <h3><img src={tecnicoText} className="icono-service" /></h3>
                        </button>
                        <button className="card canguro" onClick={() => handleSelect('Tu Canguro de confianza')}>
                            <img src={canguroIco} className="icono-service" />
                            <h3><img src={canguroText} className="icono-service" /></h3>
                        </button>
                        <button className="card auxiliar" onClick={() => handleSelect('Tu Auxiliar de confianza')}>
                            <img src={auxiliarIco} className="icono-service" />
                            <h3><img src={auxiliarText} className="icono-service" /></h3>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MainServices