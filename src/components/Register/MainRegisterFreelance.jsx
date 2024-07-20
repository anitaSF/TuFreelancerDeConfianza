import LoginData from "./LoginData"


function MainRegisterFreelance() {
    return (
        <main className="container">
            <h1>¡Hola!</h1>
            <h2>Si eres <strong>Freelancer</strong>, regístrate aquí</h2>
            <form>
                <LoginData />
                <fieldset>
                    <legend>Datos profesionales</legend>
                    <div>
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
                    </div>
                    <div>
                        <label htmlFor="title">Titulación</label>
                        <input type="text" name="title" id="title" placeholder="Indica tu titulación" />
                    </div>
                    <div>
                        <label htmlFor="budget">Presupuesto</label>
                        <input type="text" name="budget" id="budget" placeholder="€/hora" />
                    </div>
                    <div>
                        <label htmlFor="location">Ubicación de trabajo</label>
                        <input type="text" name="location" id="location" placeholder="Indica tu disposición geográfica" />
                    </div>
                    <div>
                        <label htmlFor="cv">Indica la dirección web de tu curriculum</label>
                        <input type="text" name="cv" id="cv" placeholder="Añadir curriculum" />
                    </div>
                </fieldset>
                <div>
                    <button>Regístrarme</button>
                </div>
            </form>
        </main>
    )
}

export default MainRegisterFreelance
