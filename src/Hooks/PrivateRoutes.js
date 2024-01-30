import { Outlet, Navigate } from "react-router-dom"
import useAuthContext from "./useAuthContext"


export default function PrivateRoutes(){
    const {activeAccount} = useAuthContext();

    return<div>
        {activeAccount ? <Outlet/> : <Navigate to= "/"/> }
    </div>

 };