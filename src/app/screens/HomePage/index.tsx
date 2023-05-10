import { Container } from "@mui/material";
import React from "react";
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

export function HomePage() {
  return (
    <div className="homepage">
      <AdsPage />
      <TopCategories />
      <SalePage />
      <BestPage />
      <NewPage />
      <DeliveryPage />
      <DealPage />
      <AdverPage />
      <BlogPage />
      <WhyChoose />
      <GalleryPage />
    </div>
  );
}
