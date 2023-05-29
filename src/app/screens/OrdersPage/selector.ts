import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectOrderPage = (state: AppRootState) => state.orderPage;
export const retrievePausedOrders = createSelector(
  selectOrderPage,
  (orderPage) => orderPage.pausedOrders
);
export const retrieveProcessOrders = createSelector(
  selectOrderPage,
  (orderPage) => orderPage.processOrders
);
export const retrieveFinishedOrders = createSelector(
  selectOrderPage,
  (orderPage) => orderPage.finishedOrders
);
