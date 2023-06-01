import { Container } from "@mui/material";

import React, { useEffect } from "react";
import { AdsPage } from "./Ads";
import { TopCategories } from "./TopCategories";
import { SalePage } from "./SalePage";
import { NewPage } from "./NewPage";
import { DeliveryPage } from "./DeliveryPage";
import { GalleryPage } from "./GalleryPage";
import { WhyChoose } from "./WhyChoose";
import { BestPage } from "./BestPage";
import { DealPage } from "./DealPage";
import BlogPage from "./BlogPage";
import { AdverPage } from "./AdverPage";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopShops } from "../../screens/HomePage/slice";
import { retrieveTopShops } from "../../screens/HomePage/selector";
import { Shop } from "../../../types/user";
import ShopApiService from "../../apiServices/shopApiService";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopShops: (data: Shop[]) => dispach(setTopShops(data)),
});
/** REDUX SELECTOR */
const topShopRetriever = createSelector(retrieveTopShops, (topShops) => ({
  topShops,
}));

export function HomePage(props: any) {
  /** INITIALIZATION */
  const { setTopShops } = actionDispatch(useDispatch());

  useEffect(() => {
    const shopService = new ShopApiService();
    shopService
      .getTopShops()
      .then((data) => {
        setTopShops(data);
      })
      .catch((err) => console.log(err));
  }, []);
  let onAdd = props.onAdd;

  return (
    <div className="homepage">
      <AdsPage
        targetProductsSearchObj={props.targetProductsSearchObj}
        setTargetProductsSearchObj={props.setTargetProductsSearchObj}
      />
      <TopCategories
        targetProductsSearchObj={props.targetProductsSearchObj}
        setTargetProductsSearchObj={props.setTargetProductsSearchObj}
      />
      <SalePage
        targetProductsSearchObj={props.targetProductsSearchObj}
        setTargetProductsSearchObj={props.setTargetProductsSearchObj}
      />
      <BestPage
        onAdd={onAdd}
        targetProductsSearchObj={props.targetProductsSearchObj}
        setTargetProductsSearchObj={props.setTargetProductsSearchObj}
      />
      <NewPage
        onAdd={onAdd}
        targetProductsSearchObj={props.targetProductsSearchObj}
        setTargetProductsSearchObj={props.setTargetProductsSearchObj}
      />
      <DeliveryPage />
      <DealPage onAdd={onAdd} />
      <AdverPage
        targetProductsSearchObj={props.targetProductsSearchObj}
        setTargetProductsSearchObj={props.setTargetProductsSearchObj}
      />
      <BlogPage />
      <WhyChoose />
      <GalleryPage />
    </div>
  );
}
