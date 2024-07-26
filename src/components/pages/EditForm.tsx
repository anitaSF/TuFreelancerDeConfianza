import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { freelanceContext } from '../Context/frelanceContext'
import { getPutFreelancerData } from '../service/ApiFreelancers';

import bgHeader from "../../images/bg-header.webp";

function EditForm() {

    const context = useContext(freelanceContext);

    const [testVar, setTestVar] = useState(context.userFreelancer);

    const navegate = useNavigate();

    const handleChange = (ev) => {
        const { id, value } = ev.target;
        setTestVar({ ...testVar, [id]: value });
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const userId = context.userFreelancer.id
        getPutFreelancerData(userId, testVar);
        console.log(testVar);
        context.setUserFreelancer(testVar);
        navegate('/yourProfile');
    }

    return (
        <>
            <header className='freelancerRegister' style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
                <nav>
                    <Link to={'/yourProfile'}>
                        <h2 className="title-pag"><span>❮</span> Volver a tu perfil</h2>
                    </Link>
                </nav>
            </header>
            <main>
                <section className='body'>
                    <form>
                        <fieldset className="datos-prof">
                            <legend className=""><strong>Datos profesionales</strong></legend>
                            <div>
                                <label htmlFor="img">Añade el url de tu nueva foto de perfil</label>
                                <input type="text" name='img' id='img' onChange={handleChange} defaultValue={context.userFreelancer.img} />
                            </div>
                            <div>
                                <label htmlFor="budget">Indica tu nuevo presupuesto</label>
                                <input type="text" name='budget' id='budget' onChange={handleChange} defaultValue={context.userFreelancer.budget} />
                            </div>
                            <div>
                                <label htmlFor="title">Indica el nuevo título que varán los clientes</label>
                                <input type="text" name='title' id='title' onChange={handleChange} defaultValue={context.userFreelancer.title} />
                            </div>
                            <div>
                                <label htmlFor="description">Escribe tu nueva presentación</label>
                                <input type="text" name='description' id='description' onChange={handleChange} defaultValue={context.userFreelancer.description} />
                            </div>
                            <div>
                                <label htmlFor="location">Indica la nueva localización</label>
                                <input type="text" name='location' id='location' onChange={handleChange} defaultValue={context.userFreelancer.location} />
                            </div>
                            <div>
                                <label htmlFor="cv">Añade la nueva dirección url de tu curriculum</label>
                                <input type="text" name='cv' id='cv' onChange={handleChange} defaultValue={context.userFreelancer.cv} />
                            </div>
                        </fieldset>
                        <button className="btn-freelancer" type='submit' onClick={(ev) => { handleSubmit(ev) }}>Actualizar perfil</button>
                        <button className='cancel-edit'>
                            <Link to='/yourProfile'>
                                Cancelar cambios
                            </Link>
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default EditForm
