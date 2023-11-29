import { combineReducers } from "redux";
import authslice from "./auth/authslice";

export default combineReducers({
  auth: authslice,
});
