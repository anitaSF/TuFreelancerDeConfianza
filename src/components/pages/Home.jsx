import { Link } from "react-router-dom";
import logo from "../../images/TFC-logo.webp"
import bgImage from '../../images/TFC-bg-clientes.webp';

export default function Home() {
  return (
    <main style={{ backgroundImage: `url(${bgImage})` }}>
      <section className="home">
        <h1><img className="logo" src={logo} /></h1>
        <div className="tipo-user">
          <p className="text-home">¿Que tipo de usuario eres?</p>
          <div className="block-login">
            <button className="btn-clientes">
              <Link className="link" to="/customerLogin" state="customerRegister">
                Login Clientes
              </Link>
            </button>

            <button className="btn-freelancer">
              <Link className="link" to="/freelanceLogin" state="freelancerRegister">
                Login Freenlancers
              </Link>
            </button>
          </div>
        </div>

      </section>


    </main >
  )
}


