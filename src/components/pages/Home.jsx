import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <h1>Tu freelancer de confianza</h1>

      <p>¿Que tipo de usuario eres?</p>


      <Link to="/customerLogin" state="customerRegister">
        <button>
          Login Clientes
        </button>
      </Link>

      <Link to="/freelanceLogin" state="freelancerRegister">
        <button>
          Login Freenlancers
        </button>
      </Link>

    </div>
  )
}


