import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../constants/redux/hooks";

type IRequiredAuthProps = {
  children: React.ReactNode;
};

function RequiredAuth({ children }: IRequiredAuthProps) {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (!isLoggedIn) return <Navigate to={`/login?redirectTo=${pathname}`} />;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={`/login?redirectTo=${pathname}`} />
  );
}

export default RequiredAuth;
