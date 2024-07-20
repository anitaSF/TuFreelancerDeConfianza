import { useContext } from "react";
import { useDataContext } from "../Context/useDataContext"

import { Navigate } from "react-router-dom";

function AuthRoute({ component }) {
    const context = useContext(useDataContext);

    if (context.userData) {
        return component;
    } else {
        return <Navigate to="/" />
    }
}

export default AuthRoute;