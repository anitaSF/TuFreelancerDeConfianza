import { useContext } from "react";
import { freelanceContext } from "../Context/frelanceContext";

import FreelancerCard from "../FreelancerCard/FreelancerCard";

function MainFreelancersList() {
    const context = useContext(freelanceContext);

    const filteredFreelancers = context.categorySelected
        ? context.listFreelancer.filter(freelancer => freelancer.category === context.categorySelected)
        : context.listFreelancer;

    return (
        <>
            <main>
                <section className="body">
                    <article className={`${context.categorySelected} box-list`}>
                        <ul className="list-freelancers">
                            {filteredFreelancers.map((freelancer) => (
                                <li key={freelancer.id}>
                                    <FreelancerCard freelancer={freelancer} />
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>
            </main>
        </>
    )
}

export default MainFreelancersList