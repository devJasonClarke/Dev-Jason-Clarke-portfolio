import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  arrLength: 0,
  page: 0
};

export const blogPageSlice = createSlice({
  name: "blogPage",
  initialState,
  reducers: {
    nextBlogPage: (state) => {
      state.page += 1;
    },
    prevBlogPage: (state) => {
      state.page -= 1;
    },
    setArr: (state, action) => {
      state.arr = action.payload;
    },
    setArrLenght: (state, action) => {
      state.arrLength = action.payload;
    }
  }
});

export const { nextBlogPage, prevBlogPage, setArr, setArrLenght } =
  blogPageSlice.actions;

export default blogPageSlice.reducer;
