import { Box, Container, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const shop_list = Array.from(Array(10).keys());

export function TopCategories() {
  return (
    <div style={{ background: "#ffffff" }}>
      <Container className="home_top_categ">
        <Box className="home_top">Top Categories Of The Month</Box>
        <Stack
          style={{ width: "100%", display: "flex" }}
          flexDirection={"row"}
          sx={{ mt: "30px" }}
        >
          <Box className={"prev_btn shop-prev"}>
            <ArrowBackIosNewIcon
              sx={{ fontSize: 40 }}
              style={{ color: "#86bc42" }}
            />
          </Box>
          <Swiper
            className={"shop_avatars_wrapper"}
            slidesPerView={7}
            centeredSlides={false}
            spaceBetween={30}
            navigation={{
              nextEl: ".shop-next",
              prevEl: ".shop-prev",
            }}
          >
            {shop_list.map((ele, index) => {
              return (
                <SwiperSlide
                  style={{ cursor: "pointer" }}
                  key={index}
                  className={"shop_avatars"}
                >
                  <Box className="home_top_cat">
                    <Box className="home_top_icon">
                      <img
                        style={{
                          backgroundSize: "cover",
                          width: "57px",
                          height: "57px",
                        }}
                        src="./homepage/steak.png"
                        alt="home_food"
                      />
                    </Box>
                    <Box className="home_top_tex">Fresh Meat</Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box className={"next_btn shop-next"} style={{ color: "#86bc42" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
