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
      state.message = "";
      state.isVisible = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
