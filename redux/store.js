import { configureStore } from "@reduxjs/toolkit";
import navLinksReducer from "./nav/navSlice";
import cmsDataReducer from "./cms/cmsSlice";

export const store = configureStore({
  reducer: {
    links: navLinksReducer,
    cms: cmsDataReducer
  },
});
