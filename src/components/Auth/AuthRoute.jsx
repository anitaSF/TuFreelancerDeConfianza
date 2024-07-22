import { useContext } from "react";
import { userDataContext } from "../Context/userDataContext";

import { Navigate } from "react-router-dom";
import { getUserValid } from "../service/ApiUsers";

function AuthRoute({ component }) {
    const context = useContext(userDataContext);

    const validation = async () => {
        const valided = await getUserValid(context.userData);
        return valided;
    }

    if (context.userData) {

        const valided = validation();

        console.log(valided);

        if (!(valided === "rejected")) {
            return component;
        } else {
            return <Navigate to="/" />
        }
    } else {
        return <Navigate to="/" />
    }
}

export default AuthRoute;