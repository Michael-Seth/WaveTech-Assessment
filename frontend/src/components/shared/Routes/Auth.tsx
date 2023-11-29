import { lazy, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import SuspensedWithFallback from "../SplashScreen/SuspensedWithFallback";
import { useAppSelector } from "../../../constants/redux/hooks";

const Login = lazy(() => import("../../../page/Auth/Login"));
const ForgotPassword = lazy(() => import("../../../page/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../../../page/Auth/ResetPassword"));

const Auth = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (isLoggedIn) {
      const redirectTo = searchParams.get("redirectTo");
      if (redirectTo) {
        navigate(redirectTo, { replace: true });
      } else {
        navigate("/app", { replace: true });
      }
    }
  }, [isLoggedIn, navigate, searchParams]);
  return (
    <Routes>
      <Route
        path="login"
        element={
          <SuspensedWithFallback>
            <Login />
          </SuspensedWithFallback>
        }
      />
      <Route
        path="forgot-password"
        element={
          <SuspensedWithFallback>
            <ForgotPassword />
          </SuspensedWithFallback>
        }
      />

      <Route
        path="reset-password"
        element={
          <SuspensedWithFallback>
            <ResetPassword />
          </SuspensedWithFallback>
        }
      />

      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

export default Auth;
