
function LoginData() {
    return (
        <>
            <fieldset>
                <legend>Datos Personales</legend>
                <input className="m-right" type="text" name="name" id="name" placeholder="Nombre" />
                <input type="text" name="surname" id="surname" placeholder="Apellido" />
            </fieldset>

            <fieldset>
                <legend>Datos acceso</legend>
                <input className="m-right" type="email" name="email" id="email" placeholder="Correo electrónico" />
                <input type="password" name="password" id="password" placeholder="Contraseña" />

            </fieldset>

        </>
    )
}

export default LoginData
