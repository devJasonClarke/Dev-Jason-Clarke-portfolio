import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    { name: "Home", route: "" },
    { name: "About", route: "https://www.devjasonclarke.com/" },
    { name: "Work", route: "https://www.devjasonclarke.com/" },
    { name: "Contact", route: "https://www.devjasonclarke.com/" }
  ]
};

export const navSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {}
});

export default navSlice.reducer;