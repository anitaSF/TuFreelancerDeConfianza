import LoginData from "./LoginData"


function MainRegisterFreelance() {
    return (
        <main>
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Freelancer</strong>, regístrate aquí</h2>
            <form>
                <legend>Datos Personales</legend>
                <LoginData />
                <fieldset>
                    <label htmlFor="category">¿Qué tipo de freelancer eres?</label>
                    <select name="category" id="category">
                        <option value="">Selecciona una opción</option>
                        <option value="cuidador">Cuidador</option>
                        <option value="informatico">Informático</option>
                        <option value="canguro">Canguro</option>
                        <option value="profesor">Profesor</option>
                        <option value="manitas">Manitas</option>
                        <option value="auxiliar">Auxiliar</option>
                    </select>
                </fieldset>
                <fieldset>

                </fieldset>
            </form>
        </main>
    )
}

export default MainRegisterFreelance
