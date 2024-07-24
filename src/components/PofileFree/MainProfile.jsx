import { useContext, useEffect, useState } from "react"
import { freelanceContext } from "../Context/frelanceContext";
import { userDataContext } from "../Context/userDataContext";
import { getRemoveFreelancer } from "../service/ApiFreelancers";

export default function MainProfile() {
    const context = useContext(freelanceContext)

    const contextUser = useContext(userDataContext)


    const [userFreelancerId, setUserFreelancerId] = useState ("")
    const [userFreelancer, setUserFreelancer] = useState ([])

    const [userListFreelancer, setUserListFreelancer] = useState ([
        
    ])

   

    const [confirm, setConfirm] = useState(false)

    const handleDeleteProfile = (ev) => {

    console.log(context.userFreelancer); 

    confirmDeleteProfile();
        
    freelancerFilter();

    getRemoveFreelancer(context.userFreelancer.id)

       }
       useEffect(() => {
        if (context.listFreelancer) {
            setUserListFreelancer([...context.listFreelancer]);
        }
    }, [context.listFreelancer]);

       useEffect(() => {
        if (userListFreelancer.length > 0) {
            freelancerFilter();
        }
    }, [userListFreelancer]);
    
    const freelancerFilter = () => {
        const userEmail = context.userFreelancer.email.trim().toLowerCase();
        console.log("Email from localStorage:", typeof userEmail);
    
        if (userEmail) {
            console.log("userListFreelancer:", userListFreelancer);
    
            // Normaliza los emails en userListFreelancer antes de la comparación
            const filteredUser = userListFreelancer.filter((user)=> {
                console.log(user.email.trim().toLowerCase());
                console.log(userEmail);
                return user.email.trim().toLowerCase() === userEmail});
                
            console.log("Filtered user:", filteredUser);
    
            setUserFreelancer(filteredUser);
        } else {
            console.warn("No se encontró el email en localStorage");
        }
    };

    const confirmDeleteProfile = () => {
        
    
        if( window.confirm("¿estas seguro que deseas eliminar tu perfil?")) {



            console.log("PerfilEliminado");
            
            setConfirm(true);

        } else { 

            console.log("Cancelado");
        }


            



    }
      
    return (
        <main>
            <article>
                <figure>
                    <img src="" alt="" />
                </figure>
                <h3>{"aquí el nombre"}</h3>
                <h4>{"aquí el apellido"}</h4>
                <p>{"ubicación"}</p>
                <p>{"presupuesto"}</p>
            </article>
            <article>
                <h3>Titulaciones</h3>
                <ul>
                    <li>
                        {"título o en su defecto categoría"}
                    </li>
                </ul>
            </article>
            <article>
                <h3>Presentación</h3>
                <p>{"aquí la descripción"}</p>
            </article>
            <article>
                <a href="rutaDelArchivo" download="curriculumFreelancer">
                    <img src="" alt="" />
                    <p></p>
                </a>
            </article>
            {/* los botones deberían ir en otro componente con su lógica */}
            <article>
                <div>
                    <button onClick={freelancerFilter}>Editar perfil</button>
                    <button type="button" onClick={() => {handleDeleteProfile()}}>Eliminar perfil</button>
                </div>
            </article>
        </main>
    )
}
