import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuspensedWithFallback from "./components/shared/SplashScreen/SuspensedWithFallback.tsx";
import { StyledEngineProvider } from "@mui/material";
import { store } from "./constants/redux/store.ts";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route
              path="/*"
              element={
                <SuspensedWithFallback>
                  <App />
                </SuspensedWithFallback>
              }
            />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </PersistGate>
  </Provider>
);
