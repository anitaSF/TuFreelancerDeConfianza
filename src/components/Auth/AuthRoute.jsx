import { useContext } from "react";
import { userDataContext } from "../Context/userDataContext";

import { Navigate } from "react-router-dom";

function AuthRoute({ component }) {
    const context = useContext(userDataContext);

    if (context.userData) {
        return component;
    } else {
        return <Navigate to="/" />
    }
}

export default AuthRoute;