import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cms: {
    homepage: {
      counter: 0,
      data: {},
    },
    counter: 22
  },
};

export const cmsSlice = createSlice({
  name: "cmsData",
  initialState,
  reducers: {
    populateHomepage: (state, payload) => {
    //  state.homepage.data = payload;
      state.cms.homepage.data = payload.payload;
    },
  },
});

export const { populateHomepage } = cmsSlice.actions;

export default cmsSlice.reducer;

