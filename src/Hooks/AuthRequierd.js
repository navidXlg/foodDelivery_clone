import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuthContext from "./useAuthContext";

export default function AuthRequired({ allowedUsers }) {
  const location = useLocation();
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