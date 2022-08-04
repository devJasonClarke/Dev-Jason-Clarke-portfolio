import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  img: "",
};

export const blogHeroImgSlice = createSlice({
  name: "blogHeroImg",
  initialState,
  reducers: {},
});

export default blogHeroImgSlice.reducer;
