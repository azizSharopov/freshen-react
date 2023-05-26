import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectAboutPage = (state: AppRootState) => state.aboutPage;
export const retrieveFreshenBoArticles = createSelector(
  selectAboutPage,
  (AboutPage) => AboutPage.freshenBoArticles
);
