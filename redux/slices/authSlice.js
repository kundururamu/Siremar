import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userType: "Resident",
  },
  reducers: {
    setAuth: (state, actions) => {
      state.isAuth = !state.isAuth;
    },
    setUserType: (state, actions) => {
      state.userType = actions.payload;
    },
  },
});

export const { setAuth, setUserType } = authSlice.actions;
export default authSlice.reducer;
