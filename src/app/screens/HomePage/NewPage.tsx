import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import assert from "assert";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Autoplay, Pagination, Navigation } from "swiper";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewProducts } from "../../screens/HomePage/slice";
import { Product } from "../../../types/product";
import ProductApiService from "../../apiServices/productApiService";
import { retrieveNewProducts } from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { Review } from "../../../types/follow";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setNewProducts: (data: Product[]) => dispach(setNewProducts(data)),
});

/** REDUX SELECTOR */
const newProductRetriever = createSelector(
  retrieveNewProducts,
  (newProducts) => ({
    newProducts,
  })
);

export function NewPage() {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { setNewProducts } = actionDispatch(useDispatch());
  const { newProducts } = useSelector(newProductRetriever);

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_createdAt", page: 1, limit: 200 })
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));
  }, []);

  /** HANDLERS */
  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "555px",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Box className="home_top"> New Products</Box>
        <Box className="best_product_link">
          View All_ <ArrowRightAltIcon />
        </Box>
      </Container>

      <div
        className={"best_products"}
        style={{
          width: "1500px",
          height: "454px",

          marginTop: "40px",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box className="prev_btn shop_prev">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 40 }}
            style={{
              color: "#41544A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          />
        </Box>
        <Swiper
          className={"best_products_wrapper"}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          navigation={{
            nextEl: ".shop-next",
            prevEl: ".shop-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]} // Add Autoplay module
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {newProducts.map((product: Product) => {
            const image_path = `${serverApi}/${product.product_images[0]}`;
            return (
              <SwiperSlide
                style={{
                  cursor: "pointer",
                }}
                className="productsbest"
              >
                <Box
                  className="products_sliderbest"
                  onClick={() => chosenProductHandler(product._id)}
                >
                  <Box className="products_slider_img_best">
                    <img
                      style={{ backgroundSize: "cover" }}
                      src={image_path}
                      alt="new product"
                    />

                    <Box className="like_view_boxbest">
                      <img src="/icons/heart_green.png" alt="" />
                    </Box>
                  </Box>
                  <Box className="product_infobest">
                    <Box className="brand_namebest">
                      {" "}
                      {product?.member_data[0]?.mb_nick}
                    </Box>
                    <Box className="product_retingbest">
                      <Rating
                        size="small"
                        name="read-only"
                        value={
                          product.reviews && product.reviews.length > 0
                            ? (product.reviews as Review[])[0]?.average_rating
                            : 0 // Provide a default value if there are no reviews
                        }
                        readOnly
                      />
                    </Box>
                    <Box className="product_namebest">
                      {product.product_name}
                    </Box>

                    <Box
                      className="add_card_btnbest"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Box>
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src="/icons/shopping-cart.png"
                          alt=""
                        />{" "}
                      </Box>
                      <Box>ADD TO CART</Box>
                    </Box>
                    <Box className="product_pricebest">
                      <Box className="product_price_currentbest">$11.99</Box>
                      <Box className="product_price_oldbest">$15</Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box className="next_btn shop-next" style={{ color: "#41544A" }}>
          <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
        </Box>
      </div>
    </div>
  );
}
