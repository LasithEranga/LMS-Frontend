import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "../reducers/alertSlice";
import loginSlice from "../reducers/loginSlice";

export default configureStore({
  reducer: {
    newAlert: alertSlice,
    login: loginSlice,
  },
});
