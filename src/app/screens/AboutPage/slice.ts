import { createSlice } from "@reduxjs/toolkit";
import { AboutPageState } from "../../../types/screen";

const initialState: AboutPageState = {
  freshenBoArticles: [],
};
const AboutPageSlice = createSlice({
  name: "aboutPage",
  initialState,
  reducers: {
    setFreshenBoArticles: (state, action) => {
      state.freshenBoArticles = action.payload;
    },
  },
});

export const { setFreshenBoArticles } = AboutPageSlice.actions;

const AboutPageReducer = AboutPageSlice.reducer;
export default AboutPageReducer;
