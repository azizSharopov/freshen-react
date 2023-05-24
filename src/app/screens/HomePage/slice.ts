import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
  topShops: [],
  bestProducts: [],
  newProducts: [],
  saleProducts: [],
  bestBoArticles: [],
};
const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopShops: (state, action) => {
      state.topShops = action.payload;
    },
    setBestProducts: (state, action) => {
      state.bestProducts = action.payload;
    },
    setNewProducts: (state, action) => {
      state.newProducts = action.payload;
    },
    setSaleProducts: (state, action) => {
      state.saleProducts = action.payload;
    },
    setBestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
  },
});

export const {
  setTopShops,
  setBestProducts,
  setNewProducts,
  setSaleProducts,
  setBestBoArticles,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
