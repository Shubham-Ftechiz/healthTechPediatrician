import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {

    let auth = localStorage.getItem("token") ? {'token':true} : {'token':false};

    return(
        auth.token ? <Outlet/>: <Navigate to ='/'/>
    )
}

export default PrivateRoutes;