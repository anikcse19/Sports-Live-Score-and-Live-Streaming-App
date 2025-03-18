import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupState: false,
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {

    popupModal: (state, { payload }) => {
      state.popupState = payload;
    },

  },
});

export const { popupModal } = commonSlice.actions;
export default commonSlice.reducer;
