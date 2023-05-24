import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import assert from "assert";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
// REDUX

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

const shop_list = Array.from(Array(10).keys());
export function DealPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "530px",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box className="home_top" sx={{ width: "50%" }}>
          Deal of the Day
        </Box>
        <Box className="sale_time">
          <span className="sale_time_end">Ends in:</span>
          <span className="sale_time1">04 : 43 : 11</span>
        </Box>
      </Container>
      <div
        className={"best_products"}
        style={{
          width: "1441",
          height: "454px",
          marginTop: "40px",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
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
            }}
          />
        </Box>
        <Swiper
          className={"best_products_wrapper"}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={10}
          navigation={{
            nextEl: ".shop-next",
            prevEl: ".shop-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {shop_list.map((ele, index) => {
            return (
              <SwiperSlide
                style={{
                  cursor: "pointer",
                  border: "1px solid #eaeaea",
                }}
                key={index}
                className="productsbest"
              >
                <Box className="products_sliderbest">
                  <Box
                    sx={{ zIndex: "5", position: "absolute" }}
                    className="product_sale_info"
                  >
                    -10 %
                  </Box>
                  <Box
                    className="products_slider_img_best"
                    style={{ width: "240px", height: "220px" }}
                  >
                    <img
                      style={{ width: "240px", height: "220px" }}
                      src="/homepage/ripe-blueberries.jpg"
                      alt=""
                    />

                    <Box
                      sx={{ zIndex: "6", position: "absolute" }}
                      className="like_view_boxbest"
                    >
                      <img src="/icons/heart_green.png" alt="" />
                    </Box>
                  </Box>
                  <Box className="add_card_deal" sx={{ marginBottom: "0px" }}>
                    <Box>
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src="/icons/shopping-cart.png"
                        alt=""
                      />{" "}
                    </Box>
                    <Box>ADD TO CART</Box>
                  </Box>
                  <Box className="product_infosale" sx={{ marginTop: "30px" }}>
                    <Box className="brand_namebest">FRUITS</Box>
                    <Box className="product_retingbest">
                      <Rating
                        size="small"
                        name="read-only"
                        value={4}
                        readOnly
                      />
                    </Box>
                    <Box className="product_namebest">
                      Fresh Strawberry - 100% Organic. Natural
                    </Box>

                    <Box className="product_pricebest">
                      <Box className="product_price_currentbest">$11.99</Box>
                      <Box className="product_price_oldbest">$15</Box>
                    </Box>
                    <Box
                      className="product_sold"
                      sx={{
                        display: "flex",
                        flexDirection: "column",

                        width: "240px",
                        height: "41px",
                        marginBottom: "45px",
                      }}
                    >
                      <Box
                        className="product_sold1"
                        sx={{
                          width: "240px",
                          height: "6px",
                          background: "#EBEBEB",
                          borderRadius: "30px",
                        }}
                      >
                        <Box className="sold_info"></Box>
                      </Box>
                      <Box className="product_sold2">
                        <Box>
                          <span className="sold2_text">Available:</span>
                          <span className="sold2_numb">200</span>
                        </Box>
                        <Box>
                          <span className="sold2_text">Already Sold:</span>
                          <span className="sold2_numb">157</span>
                        </Box>
                      </Box>
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
