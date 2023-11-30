import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import DashbordLayout from "../DashboardLayout/DashbordLayout";
import Dashboard from "../../../page/Dashboard/Dashboard";
import { useAppDispatch, useAppSelector } from "../../../constants/redux/hooks";
import { getHospitals, getUser } from "../../../constants/redux/auth/authApi";
import React from "react";
import SplashScreen from "../SplashScreen/SplashScreen";
import LayoutContextProvider from "./context/LayoutContextProvider";

const Layout = () => {
  const { isLoggedIn, loading, userDetails } = useAppSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const navigateRef = React.useRef(navigate);

  console.log(isLoggedIn);
  const privateRoute: Array<{
    path: string;
    component: React.ReactNode;
  }> = [
    {
      path: "hospitals",
      component: <Dashboard />,
    },
  ];

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigateRef.current(`/auth/login`, { replace: true });
    } else {
      dispatch(getUser(userDetails?.id as string));
      dispatch(getHospitals());
    }
  }, [getUser, isLoggedIn, getHospitals]);

  let content = <></>;

  if (loading) {
    content = <SplashScreen />;
  }

  if (!loading) {
    content = (
      <Routes>
        {privateRoute?.map(({ path, component }, idx) => {
          return (
            <Route
              key={idx}
              path={path}
              element={<DashbordLayout children={component} />}
            />
          );
        })}

        <Route path="" element={<Navigate to="hospitals" />} />
      </Routes>
    );
  }

  return <LayoutContextProvider>{content}</LayoutContextProvider>;
};

export default Layout;
