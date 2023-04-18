import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

type RequireAuthProps = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const isAuth = useAuth();

  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} />
  );
};
