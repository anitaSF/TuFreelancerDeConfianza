import { useState } from "react";
import { createContext } from "react";

export const freelanceContext = createContext();

export const useFreelanceContext = () => {

    const [freelancer, setFreelancer] = useState([]);

    return { freelancer, setFreelancer };
};