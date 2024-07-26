import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import bgHeader from "../../images/bg-header.webp";

function InfoFree() {
  const prePage = useLocation();

  const [previousPage, setPreviousPage] = useState("/services");

  useEffect(() => {

    setPreviousPage(prePage.state)
  }, [prePage])

  console.log(prePage);

  return (
    <>
      <header className="customerRegister" style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
        <nav>
          <Link to={previousPage}>
            <h2 className="title-pag"><span>❮</span>  Volver </h2>
          </Link>
        </nav>

      </header>
      <main>
        <section className="body">
          <h2 className="subtitle text-center">Información general sobre Tu freelancer de confianza</h2>
          <hr className="separador-small" />
          <article>
            <ul>
              <li className="margin-small">
                <h3>Objetivo de la aplicación</h3>
                <p>Poner en contacto a las personas que necesiten un servicio con las personas de su entorno que puedan proporcionarlo.</p>
              </li>
              <li className="margin-small">
                <h3>La forma de contactar</h3>
                <p>La aplicación pone a la disposición de los interesados una lista de contactos de profesionales que puedan ayudarle y quieren ayudar. La forma de contactar entre freelancer y cliente que proporciona la aplicación, Tu freelancer de confianza, es mediante la facilitación al clientes del correo electrónico del freelancer que seleccionen.</p>
              </li>
            </ul>
          </article>
          <hr className="separador-large" />
          <article>
            <h2 className="subtitle-info">Tus <strong>manitas</strong> de confianza</h2>
            <h3 className="lineheight-min">¿Qué tipos de trabajos suele realizar un manitas de confianza?</h3>
            <ul className="bullet">
              <li ><p>Montaje de muebles</p></li>
              <li><p>Fontanería</p></li>
              <li><p>Electricidad</p></li>
            </ul>
          </article>

          <article>
            <h2 className="subtitle-info">Tu <strong>cuidador</strong> de confianza</h2>
            <h3 className="lineheight-min">¿qué tipos de trabajos suele realizar un cuidador de confianza?</h3>
            <ul className="bullet">
              <li><p>Cuidar a los perros</p></li>
              <li><p>Sacarlos a pasear</p></li>
              <li><p>Dejarles su alimento</p></li>
            </ul>
          </article>

          <article>
            <h2 className="subtitle-info">Tu <strong>profesor</strong> de confianza</h2>
            <h3 className="lineheight-min">¿qué tipos de trabajos suele realizar un profesor de confianza?</h3>
            <ul className="bullet">
              <li><p>Clases particulares</p></li>
              <li><p>Apoyar en los deberes a estudiantes</p></li>
            </ul>
          </article>

          <article>
            <h2 className="subtitle-info">Tu <strong>técnico</strong> de confianza</h2>
            <h3 className="lineheight-min">¿qué tipos de trabajos suele realizar un técnico de confianza?</h3>
            <ul className="bullet">
              <li><p>Ayuda con la instalación de programas</p></li>
              <li><p>Ayuda en cuanto a fallos o bugs en el desarrollo de programas de acuerdo con sus especialidades</p></li>
              <li><p>Proporcionar información, recomendaciones o asesorías en cuanto a los electrodomésticos e implantación de sistemas domóticos.</p></li>
            </ul>
          </article>

          <article>
            <h2 className="subtitle-info">Tu <strong>canguro</strong> de confianza</h2>
            <h3 className="lineheight-min">¿qué tipos de trabajos suele realizar un canguro de confianza?</h3>
            <ul className="bullet">
              <li>
                <p>Cuidar al niño/a durante el tiempo requerido</p>
              </li>
              <li>
                <p>Recogerlo al colegio</p>
              </li>
              <li>
                <p>Acompañarlo a las actividades extraescolares</p>
              </li>
            </ul>
          </article>

          <article>
            <h2 className="subtitle-info">Tu <strong>auxiliar</strong> de confianza</h2>
            <h3 className="lineheight-min">¿qué tipos de trabajos suele realizar un auxiliar de confianza?</h3>
            <ul className="bullet">
              <li>
                <p>Acompañar a personas mayores o discapacitadas a citas que sus familias no puedan.</p>
              </li>
            </ul>

          </article>
        </section>

      </main>
    </>
  )
}

export default InfoFree
