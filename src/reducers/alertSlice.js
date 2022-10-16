import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "newAlert",
  initialState: {
    isVisible: false,
    message: "",
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.isVisible = action.payload.isVisible;
    },
    hideAlert: (state) => {
      state.isVisible = false;
    },
    resetMessage: (state) => {
      state.message = "";
    },
  },
});

export const { showAlert, hideAlert, resetMessage } = alertSlice.actions;
export default alertSlice.reducer;
