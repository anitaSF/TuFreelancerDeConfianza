import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <h1>Tu freelancer de confianza</h1>

      <p>¿Que tipo de usuario eres?</p>


      <button>
        <Link to="/customerLogin" state="customerRegister">
          Login Clientes
        </Link>
      </button>

      <button>
        <Link to="/freelanceLogin" state="freelancerRegister">
          Login Freenlancers
        </Link>
      </button>

    </div >
  )
}


