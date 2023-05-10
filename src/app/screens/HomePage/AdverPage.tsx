import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

export function AdverPage() {
  return (
    <div
      style={{
        marginTop: "150px",
        height: "690px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ background: "#ffffff", zIndex: "4" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/large-set.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#ffffff" }}>
          <Container className="swiper_box1">
            <div className="specialOffer">Natural</div>
            <div className="big_text">Milk Products</div>

            <div className="shop_btn">
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "16px",
                }}
              >
                A healthy child is the future confidence.
              </Box>
              <NavLink className="small_text" to="/our_stores">
                SHOP NOW
              </NavLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#ffffff" }}>
          <Container className="swiper_box2">
            <div className="specialOffer">Special Offer</div>
            <div className="big_text">GET A FREE 2-MONTH YOGA PASS</div>

            <Box
              sx={{
                width: "300px",
                height: "300px",
                marginTop: "10px",
                background: "#86bc42",
              }}
            >
              <img src="./homepage/carb-cyc.jpg" alt="ads" />
            </Box>
            <div style={{ marginTop: "10px" }} className="shop_btn">
              <NavLink className="small_text" to="/our_stores">
                SHOP WITH US AND
              </NavLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#ffffff" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/veget.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#ffffff" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/sert.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
      </Swiper>
      <Box
        sx={{
          width: "800px",
          height: "130px",
          background: "#86bc42",
          marginTop: "590px",
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "6",
        }}
      ></Box>
    </div>
  );
}
