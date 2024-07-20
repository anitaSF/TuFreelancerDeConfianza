
function LoginData() {
    return (
        <>
            <fieldset>
                <legend>Datos Personales</legend>
                <label htmlFor="name">Nombre y </label><label htmlFor="surname">Apellido</label>
                <input type="text" name="name" id="name" placeholder="Nombre" />

                <input type="text" name="surname" id="surname" placeholder="Apellido" />
            </fieldset>

            <fieldset>
                <legend>Datos acceso</legend>
                <div>
                    <input type="email" name="email" id="email" placeholder="Correo electrónico" />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Contraseña" />
                </div>
                <div>
                    <label htmlFor="image">Añade tu foto de perfil: </label>
                    <input type="text" name="image" id="image" placeholder="imagen" />
                </div>
            </fieldset>

        </>
    )
}

export default LoginData
