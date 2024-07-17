import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <h1>Tu freelancer de confianza</h1>

      <p>¿Que tipo de usuario eres?</p>

      <nav>
        <Link to="/customerLogin">
          <button>Login Clientes</button>
        </Link>
        <Link to="/freelanceLogin">
          <button>Login Freenlancers</button>
        </Link>
      </nav>

    </div>
  )
}


