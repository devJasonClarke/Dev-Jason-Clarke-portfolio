import { configureStore } from "@reduxjs/toolkit";
import navLinksReducer from "./nav/navSlice";
import cmsDataReducer from "./cms/cmsSlice";
import blogHeroImgReducer from "./blogHeroImg/blogHeroImg";
import blogPageReducer from "./blogPage/blogPage";
export const store = configureStore({
  reducer: {
    links: navLinksReducer,
    cms: cmsDataReducer,
    blogHeroImg: blogHeroImgReducer,
    blogPage: blogPageReducer
  }
});
