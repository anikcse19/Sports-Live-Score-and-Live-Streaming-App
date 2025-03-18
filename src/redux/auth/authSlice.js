import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openLoginModal: (state, { payload }) => {
      state.loginState = payload;
    },
  },
});

export const { openLoginModal } = authSlice.actions;
export default authSlice.reducer;