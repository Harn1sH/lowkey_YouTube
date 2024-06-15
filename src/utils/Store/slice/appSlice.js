import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      console.log(state.isMenuOpen);
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu } = appSlice.actions;
