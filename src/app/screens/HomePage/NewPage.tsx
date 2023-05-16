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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
// REDUX

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

const shop_list = Array.from(Array(10).keys());
export function NewPage() {
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
                }}
                key={index}
                className="productsbest"
              >
                <Box className="products_sliderbest">
                  <Box className="products_slider_img_best">
                    <img
                      style={{ backgroundSize: "cover" }}
                      src="/homepage/green-broccoli.jpg"
                      alt=""
                    />

                    <Box className="like_view_boxbest">
                      <Box className="like_view_box2best">
                        <Button
                          className={"like_view_btnbest"}
                          style={{ left: "36px" }}
                          disableTouchRipple
                        >
                          {/* hover -> */}
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "black" }} />}
                            id={`${index}`}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            checked={false}
                            disableTouchRipple
                          />
                        </Button>
                      </Box>
                      <Box className="like_view_box2best"></Box>
                    </Box>
                  </Box>
                  <Box className="product_infobest">
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

                    <Box className="add_card_btnbest">
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
