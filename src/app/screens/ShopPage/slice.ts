import { createSlice } from "@reduxjs/toolkit";
import { ShopPageState } from "../../../types/screen";

const initialState: ShopPageState = {
  chosenShop: null,
  targetProducts: [],
  chosenProduct: null,
  targetShops: [],
  memberReviews: null,
};

const shopPageSlice = createSlice({
  name: "shopPage",
  initialState,
  reducers: {
    setChosenShop: (state, action) => {
      state.chosenShop = action.payload;
    },
    setTargetProducts: (state, action) => {
      state.targetProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setTargetShops: (state, action) => {
      state.targetShops = action.payload;
    },
    setMemberReviews: (state, action) => {
      state.memberReviews = action.payload;
    },
  },
});

export const {
  setChosenShop,
  setTargetProducts,
  setChosenProduct,
  setTargetShops,
  setMemberReviews,
} = shopPageSlice.actions;

const ShopPageReducer = shopPageSlice.reducer;
export default ShopPageReducer;