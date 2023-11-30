import { configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import rootReducer from "./rootReducer";
import {
  //FLUSH,
  //PAUSE,
  persistReducer,
  //PURGE,
  //REGISTER,
  //REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// serializableCheck: {
//   //ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
// },
