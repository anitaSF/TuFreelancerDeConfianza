function MainServices() {
    return (
        <>
            <main className="container">
                <h2>¿Qué servicio estás buscando?</h2>
                <p>Selecciona el tipo de profesional que mejor se adapte a tus necesidades</p>
                <section className="services">
                    <button className="card manitas" >
                        <a>
                            <img />
                            <h3>Tu Manitas de confianza</h3>
                        </a>
                    </button>
                    <button className="card cuidador">
                        <a>
                            <img />
                            <h3>Tu Cuidador de confianza</h3>
                        </a>
                    </button>
                    <button className="card profesor">
                        <a>
                            <img />
                            <h3>Tu Profesor de confianza</h3>
                        </a>
                    </button>
                    <button className="card tecnico">
                        <a>
                            <img />
                            <h3>Tu Técnico de confianza</h3>
                        </a>
                    </button>
                    <button className="card canguro">
                        <a>
                            <img />
                            <h3>Tu Canguro de confianza</h3>
                        </a>
                    </button>
                    <button className="card auxiliar">
                        <a>
                            <img />
                            <h3>Tu Auxiliar de confianza</h3>
                        </a>
                    </button>
                </section>
            </main>
        </>
    )
}

export default MainServices