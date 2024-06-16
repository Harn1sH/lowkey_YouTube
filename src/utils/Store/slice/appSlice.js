import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isCollapsed: false,
    isSearchOpen: false,
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
    closeSearch: (state) => {
      state.isSearchOpen = false;
    },
    openSearch: (state) => {
      state.isSearchOpen = true;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, openMenu, openSearch, closeSearch } =
  appSlice.actions;
