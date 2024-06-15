import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isCollapsed: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isCollapsed = true;
    },
    openMenu: (state) => {
      state.isCollapsed = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
