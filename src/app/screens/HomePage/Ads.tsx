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

export function AdsPage() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ background: "#41544a" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/girl_milk.jpg" alt="milk" />
            </Box>
            <Box className="home_ads2"></Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#41544a" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/front-view-fruit.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#41544A" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/veget.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#41544A" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/large-set.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#41544A" }}>
          <Container className="home_ads">
            <Box className="home_ads1">
              <img src="./admin_photo/sert.jpg" alt="milk" />
            </Box>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
