import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "../reducers/alertSlice";

export default configureStore({
  reducer: {
    newAlert: alertSlice,
  },
});
