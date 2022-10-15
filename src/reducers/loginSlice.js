import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userid: "",
    username: "",
    role: "",
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.userid = action.payload.userid;
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userid = "";
      state.username = "";
      state.role = "";
      state.token = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
