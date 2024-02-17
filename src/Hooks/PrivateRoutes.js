import { Outlet, Navigate } from "react-router-dom"
import useAuthContext from "./useAuthContext"

/**
 * PrivateRoutes is a React component responsible for rendering the private routes
 * based on the user's authentication status.
 * 
 * It checks whether the user's account is active using the useAuthContext hook.
 * If the account is active, it renders the child routes defined in the Outlet component.
 * If the account is not active, it redirects the user to the login page using the Navigate component.
 * 
 * @returns {JSX.Element} - Returns JSX elements representing the PrivateRoutes component.
 */

export default function PrivateRoutes(){

    // Retrieve the activeAccount state from the authentication context
    const {activeAccount} = useAuthContext();

    return (
        <div>
            {activeAccount ? (
                <Outlet />
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
 };