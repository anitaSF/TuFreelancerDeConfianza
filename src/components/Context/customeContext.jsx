import { useState } from "react";
import { createContext } from "react";

export const customerContext = createContext();

export const useCustomeContext = () => {

    const [custome, setCustome] = useState([]);

    return { custome, setCustome };
};