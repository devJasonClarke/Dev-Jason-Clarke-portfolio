import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  img: ""
};

export const blogHeroImgSlice = createSlice({
  name: "blogHeroImg",
  initialState,
  reducers: {
    setImg: (state, action) => {
      state.img = action.payload;
    }
  }
});

export const { setImg } = blogHeroImgSlice.actions;

export default blogHeroImgSlice.reducer;
