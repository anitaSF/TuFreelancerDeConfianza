import { useState } from "react";
import { createContext } from "react";

export const userDataContext = createContext();

export const useUserDataContext = () => {

    const [userData, setUserData] = useState([]);

    return { userData, setUserData };
};