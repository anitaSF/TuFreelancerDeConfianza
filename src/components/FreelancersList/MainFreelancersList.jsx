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
            <article>
                <ul>
                    {filteredFreelancers.map((freelancer) => (
                        <li key={freelancer.id}>
                            <FreelancerCard freelancer={freelancer} />
                        </li>
                    ))}
                </ul>
            </article>
        </>
    )
}

export default MainFreelancersList