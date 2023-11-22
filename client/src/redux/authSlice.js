import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: false,
    admin: false
  },
  reducers: {
    setUser: (state) => {
      state.user = true;
    },
    setAdmin: (state) => {
      state.admin = true;
    }
  }
});

export const { setUser, setAdmin } = authSlice.actions;

export default authSlice.reducer;
