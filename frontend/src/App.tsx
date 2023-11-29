import { Navigate, Route, Routes } from "react-router-dom";
import SuspensedWithFallback from "./components/shared/SplashScreen/SuspensedWithFallback";
import Auth from "./components/shared/Routes/Auth";
import Layout from "./components/shared/Routes/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <SuspensedWithFallback>
            <Auth />
          </SuspensedWithFallback>
        }
      />

      <Route
        path="/app/*"
        element={
          <SuspensedWithFallback>
            <Layout />
          </SuspensedWithFallback>
        }
      />

      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/app" element={<Navigate to="/app" />} />
    </Routes>
  );
}

export default App;
