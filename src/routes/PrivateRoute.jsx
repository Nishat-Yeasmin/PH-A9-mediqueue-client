import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={ location.pathname}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;