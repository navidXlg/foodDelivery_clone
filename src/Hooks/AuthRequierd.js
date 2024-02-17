import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuthContext from "./useAuthContext";

/**
 * AuthRequired Component
 * 
 * This component is used to restrict access to certain routes based on user roles.
 * If the user is authenticated and has the required role(s), the component renders the children (Outlet).
 * If the user is not authenticated, the component redirects them to the login page.
 * If the user is authenticated but doesn't have the required role(s), the component redirects them to the unauthorized page.
 * 
 * @param {Array} allowedUsers An array of roles allowed to access the route.
 * @returns {JSX.Element} JSX element representing the restricted content or navigation.
 */

export default function AuthRequired({ allowedUsers }) {

   // Retrieve the current location from the router
  const location = useLocation();

  // Retrieve the active account information from the authentication context
  const { activeAccount } = useAuthContext();

  return (
    <>
      {activeAccount?.roles?.find((role) => allowedUsers?.includes(role)) ? (
        <Outlet />
      ) : activeAccount?.user ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
}