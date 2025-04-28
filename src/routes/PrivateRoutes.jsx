import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="text-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  if (user) return children;

  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoutes;
