import { Container } from "@mui/material";
import React from "react";
import { AdsPage } from "./Ads";
import { TopCategories } from "./TopCategories";
import { SalePage } from "./SalePage";
import { FeaturedPage } from "./FeaturedPage";
import { DeliveryPage } from "./DeliveryPage";

export function HomePage() {
  return (
    <div className="homepage">
      <AdsPage />
      <TopCategories />
      <SalePage />
      <FeaturedPage />
      <DeliveryPage />
    </div>
  );
}
