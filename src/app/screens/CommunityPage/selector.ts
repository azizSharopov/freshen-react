import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectCommunityPage = (state: AppRootState) => state.communityPage;
export const retrieveTargetBoArticles = createSelector(
  selectCommunityPage,
  (CommunityPage) => CommunityPage.targetBoArticles
);
export const retrieveChosenSingleBoArticle = createSelector(
  selectCommunityPage,
  (CommunityPage) => CommunityPage.chosenSingleBoArticle
);
