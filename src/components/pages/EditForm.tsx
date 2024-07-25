import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { freelanceContext } from '../Context/frelanceContext'
import { getPutFreelancerData } from '../service/ApiFreelancers';

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
            <header>
                <Link to={'/yourProfile'}>
                    <h2>❮ Vovler a tu perfil</h2>
                </Link>
            </header>
            <main>
                <form>
                    <fieldset>
                        <legend>Datos profesionales</legend>
                        <div>
                            <label htmlFor="category">Indica tu nuevo tipo de freelancer</label>
                            <input type="text" name='category' id='category' onChange={handleChange} defaultValue={context.userFreelancer.category} />
                        </div>
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
                    <button type='submit' onClick={(ev) => { handleSubmit(ev) }}>Cambiar</button>
                    <Link to='/yourProfile'>
                        <button>Cancelar cambios</button>
                    </Link>
                </form>
            </main>
        </>
    )
}

export default EditForm
