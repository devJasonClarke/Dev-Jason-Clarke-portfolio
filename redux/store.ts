import { configureStore } from "@reduxjs/toolkit";
import navLinksReducer from "./nav/navSlice";
import blogHeroImgReducer from "./blogHeroImg/blogHeroImg";
import blogPageReducer from "./blogPage/blogPage";
export const store = configureStore({
  reducer: {
    links: navLinksReducer,
    blogHeroImg: blogHeroImgReducer,
    blogPage: blogPageReducer
  }
});
