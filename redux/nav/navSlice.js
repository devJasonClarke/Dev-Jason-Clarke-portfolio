import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ],
};

export const navSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {},
});

export default navSlice.reducer;
