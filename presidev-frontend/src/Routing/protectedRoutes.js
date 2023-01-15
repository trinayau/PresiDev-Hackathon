import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react";

const PrivateRoutes = () => {

    const { user } = useContext(AuthContext);

    return user  ? <Outlet /> : <Navigate to="/"/>
}

export default PrivateRoutes
