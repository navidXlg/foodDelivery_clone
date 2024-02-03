import { Outlet, Navigate } from "react-router-dom"
import useAuthContext from "./useAuthContext"


// Define the PrivateRoutes component responsible for handling private routes
export default function PrivateRoutes(){

     // Extract the active account status from the authentication context
    const {activeAccount} = useAuthContext();

    return (
        <div>
            {/* Conditional rendering based on the active account status */}
            {/* If the user is authenticated, render the child routes */}
            {activeAccount ? (
                <Outlet />
            ) : (
                // If the user is not authenticated, redirect to the login page
                <Navigate to="/login" />
            )}
        </div>
    );
 };