import { configureStore } from "@reduxjs/toolkit";
import navLinksReducer from "./nav/navSlice";

export const store = configureStore({
  reducer: {
    links: navLinksReducer,
  },
});
