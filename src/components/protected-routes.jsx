import { Outlet, Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../utils/localUtils";

const ProtectedRoute = () => {
  const location = useLocation();  

  return getAuth() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
