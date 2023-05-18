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
        <SwiperSlide>
          <Box className="adver_box3">
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "70px",
              }}
            >
              <Box>
                <img src="/icons/food.png" alt="adver" />
              </Box>
              <Box
                className="ads_text"
                sx={{ color: "#849D6A", marginTop: "20px" }}
              >
                Orange Juice
              </Box>
              <Box className="ads_text1">
                <span>For Human Health</span> <br />
              </Box>
              <Box className="ads_text2">
                Organic food is food produced by methods that comply with the
                standards of organic farming. Standards vary worldwide, but
                organic farming in general features.
              </Box>
              <Button
                variant="contained"
                style={{
                  width: "152px",
                  height: "50px",
                  marginTop: "30px",
                  background: "#86bc42",
                  borderRadius: "4px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  position: "relative",
                }}
                // onClick={() => setValue(!value)}
              >
                GO SHOP
              </Button>
            </Container>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="adver_box2">
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ marginTop: "100px" }}>
                <Box
                  className="ads_text"
                  sx={{ color: "#849D6A", textAlign: "start" }}
                >
                  Natural
                </Box>
                <Box className="ads_text1">
                  <span>Milk Products</span>
                </Box>
                <Box className="ads_text2">
                  A healthy child is the future confidence.
                </Box>
                <Button
                  variant="contained"
                  style={{
                    width: "152px",
                    height: "50px",
                    marginTop: "40px",
                    display: "flex",

                    background: "#86bc42",
                    borderRadius: "4px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                  // onClick={() => setValue(!value)}
                >
                  SHOP NOW
                </Button>
              </Box>
              <Box>
                <img
                  style={{
                    width: "650px",
                    height: "350px",
                    marginTop: "40px",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                  }}
                  src="/admin_photo/girl_milk.jpg"
                  alt="adver"
                />
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#ffffff" }}>
          <Container className="adver_box1">
            <div className="specialOffer">Special Offer</div>
            <div
              className="ads_text1"
              style={{
                textAlign: "start",
                fontWeight: "500",
              }}
            >
              GET A FREE 2-MONTH YOGA PASS
            </div>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                style={{
                  width: "152px",
                  height: "50px",
                  marginTop: "40px",
                  display: "flex",

                  background: "#86bc42",
                  borderRadius: "4px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  position: "relative",
                }}
                // onClick={() => setValue(!value)}
              >
                SHOP WITH US
              </Button>
              <Box
                sx={{
                  width: "300px",
                  height: "300px",
                  marginTop: "50px",
                }}
              >
                <img src="./homepage/carb-cyc.jpg" alt="ads" />
              </Box>
            </Box>
          </Container>
        </SwiperSlide>
      </Swiper>
      <Box
        sx={{
          width: "900px",
          height: "130px",
          background: "#ffffff",
          marginTop: "590px",
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: "6",
          opacity: "0.9",
        }}
      >
        <Box>
          <img src="/homepage/image22.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 26.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 24.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 23.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 25.png" alt="adver" />
        </Box>
      </Box>
    </div>
  );
}
