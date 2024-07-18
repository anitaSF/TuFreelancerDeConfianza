import PropTypes from "prop-types"

 function LoginCustomer({username, password}) { 
  return (
    <div>
      <h2>¡BIENVENIDO!</h2>

      <img>
        
      </img>

      <p>
        Accede a la plataforma y encuentra <b>Tu Freelancer de confianza</b>
      </p>

      <form action="">
        <input type="text" name="username" placeholder="Usuario" />

        <input type="password" name="password" placeholder="Contraseña" />

        <button>Acceder</button>

      </form>

      <p>Olvidaste tu contraseña</p>

      

      <p>¿Todavia no tienes una cuenta?</p>
    </div>
  );
}

LoginCustomer.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string
}

export default LoginCustomer