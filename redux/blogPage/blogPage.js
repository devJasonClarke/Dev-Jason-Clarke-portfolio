import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrLength: 0,
  page: 0
};

export const blogPageSlice = createSlice({
  name: "blogPage",
  initialState,
  reducers: {
    setBlogPage: (state)=>{
      state.page += 1
    },
    setArr: (state, action)=>{
      state.arrLength = action.payload
    }
  },
});

export const { setBlogPage, setArr } = blogPageSlice.actions

export default blogPageSlice.reducer;
