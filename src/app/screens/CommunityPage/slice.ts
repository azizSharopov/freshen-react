import { CommunityPageState } from "./../../../types/screen";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CommunityPageState = {
  targetBoArticles: [],
  chosenSingleBoArticle: null,
};

const communityPageSlice = createSlice({
  name: "communityPage",
  initialState,
  reducers: {
    setTargetBoArticles: (state, action) => {
      state.targetBoArticles = action.payload;
    },
    setChosenSingleBoArticle: (state, action) => {
      state.chosenSingleBoArticle = action.payload;
    },
  },
});

export const { setTargetBoArticles, setChosenSingleBoArticle } =
  communityPageSlice.actions;

const CommunityPageReducer = communityPageSlice.reducer;
export default CommunityPageReducer;
