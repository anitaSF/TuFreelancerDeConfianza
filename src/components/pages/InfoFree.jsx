import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

function InfoFree() {
  const prePage = useLocation();

  const [previousPage, setPreviousPage] = useState("/services");

  useEffect(() => {

    setPreviousPage(prePage.state)
  }, [prePage])

  console.log(prePage);

  return (
    <>
      <header>
        <Link to={previousPage}>
          <h2>❮ Volver</h2>
        </Link>
      </header>
      <main>
        <section>
          <h1>Información general sobre la aplicación de Tu <strong>freelancer</strong> de <strong>confianza</strong></h1>

          <article>
            <ul>
              <li>
                <h2>Objetivo de la aplicación</h2>
                <p>Poner en contacto a las personas que necesiten un servicio con las personas de su entorno que puedan proporcionarlo.</p>
              </li>
              <li>
                <h2>La forma de contactar</h2>
                <p>La aplicación pone a la disposición de los interesados una lista de contactos de profesionales que puedan ayudarle y quieren ayudar. La forma de contactar entre freelancer y cliente que proporciona la aplicación, Tu freelancer de confianza, es mediante la facilitación al clientes del correo electrónico del freelancer que seleccionen</p>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <h2>Tus <strong>manitas</strong> de confianza</h2>
            <h3>¿Qué tipos de trabajos suele realizar un manitas de confianza?</h3>

            <ul>
              <li><p>Montaje de muebles</p></li>
              <li><p>Fontanería</p></li>
              <li><p>Electricidad</p></li>
            </ul>

          </article>

          <article>
            <h2>Tu <strong>cuidador</strong> de confianza</h2>
            <h3>¿qué tipos de trabajos suele realizar un cuidador de confianza?</h3>

            <ul>
              <li><p>Cuidar a los perros</p></li>
              <li><p>Sacarlos a pasear</p></li>
              <li><p>Dejarles su alimento</p></li>
            </ul>



          </article>

          <article>
            <h2>Tu <strong>profesor</strong> de confianza</h2>
            <h3>¿qué tipos de trabajos suele realizar un profesor de confianza?</h3>

            <ul>
              <li><p>Clases particulares</p></li>
              <li><p>Apoyar en los deberes a estudiantes</p></li>
            </ul>



          </article>

          <article>
            <h2>Tu <strong>técnico</strong> de confianza</h2>
            <h3>¿qué tipos de trabajos suele realizar un técnico de confianza?</h3>

            <ul>
              <li><p>Ayuda con la instalación de programas</p></li>
              <li><p>Ayuda en cuanto a fallos o bugs en el desarrollo de programas de acuerdo con sus especialidades</p></li>
              <li><p>Proporcionar información, recomendaciones o asesorías en cuanto a los electrodomésticos e implantación de sistemas domóticos.</p></li>
            </ul>

          </article>

          <article>
            <h2>Tu <strong>canguro</strong> de confianza</h2>
            <h3>¿qué tipos de trabajos suele realizar un canguro de confianza?</h3>

            <ul>
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
            <h2>Tu <strong>auxiliar</strong> de confianza</h2>
            <h3>¿qué tipos de trabajos suele realizar un auxiliar de confianza?</h3>

            <ul>
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
