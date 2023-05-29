import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../types/screen";

const selectMemberPage = (state: AppRootState) => state.memberPage;

export const retrieveChosenMember = createSelector(
  selectMemberPage,
  (memberPage) => memberPage.chosenMember
);
export const retrieveChosenMemberBoArticles = createSelector(
  selectMemberPage,
  (memberPage) => memberPage.chosenMemberBoArticles
);
export const retrieveChosenSingleBoArticle = createSelector(
  selectMemberPage,
  (memberPage) => memberPage.chosenSingleBoArticle
);
export const retrieveMemberFollowers = createSelector(
  selectMemberPage,
  (memberPage) => memberPage.memberFollowers
);
export const retrieveMemberFollowings = createSelector(
  selectMemberPage,
  (memberPage) => memberPage.memberFollowings
);
