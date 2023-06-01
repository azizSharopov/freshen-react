import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import { url } from "inspector";

export function AdsPage(props: any) {
  const history = useHistory();

  const chosenShopHandler = (id: string) => {
    // setChosenShopId(id);
    history.push(`/shop`);
    props.targetProductsSearchObj.shop_mb_id = id;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  return (
    <div>
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
          <Box className="swiper_box2">
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "110px",
              }}
            >
              <Box className="ads_text">All natural products</Box>
              <Box className="ads_text1">
                <span>Healthy Food</span> <br />
                <span style={{ color: "#86BC42" }}>& Organic Market</span>
              </Box>
              <Box className="ads_text2">
                <span style={{ fontWeight: "600" }}>Organic food</span> is food
                produced by methods that comply with the standards of organic
                farming.
              </Box>
              <Button
                variant="contained"
                style={{
                  width: "152px",
                  height: "50px",
                  marginTop: "30px",
                  background: "#41544A",
                  borderRadius: "4px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  position: "relative",
                }}
                onClick={() => chosenShopHandler("646ba70daf5977f07c502247")}
              >
                SHOP NOW
              </Button>
            </Container>
          </Box>
        </SwiperSlide>

        {/* <SwiperSlide style={{ background: "#ffffff" }} className="home_ads">
          <Box className="home_ads1">
            <img src="./admin_photo/large-set.jpg" alt="ads_vege" />
          </Box>
        </SwiperSlide> */}
        <SwiperSlide>
          <Box className="swiper_box3">
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "110px",
              }}
            >
              <Box className="ads_text">All natural products</Box>
              <Box className="ads_text1">
                <span>Fresh Fruit</span> <br />
                <span style={{ color: "#86BC42" }}>Food every days</span>
              </Box>
              <Box className="ads_text2">
                <span style={{ fontWeight: "600" }}>Fresh Fruit</span> is food
                produced by methods that comply with the standards of organic
                farming.
              </Box>
              <Button
                variant="contained"
                style={{
                  width: "152px",
                  height: "50px",
                  marginTop: "30px",
                  background: "#41544A",
                  borderRadius: "4px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  position: "relative",
                }}
                onClick={() => chosenShopHandler("646b0d1dc88f933b56ca3fd1")}
              >
                SHOP NOW
              </Button>
            </Container>
          </Box>
        </SwiperSlide>

        {/* <SwiperSlide style={{ background: "#ffffff" }} className="home_ads">
          <Box className="home_ads1">
            <img src="./admin_photo/sert.jpg" alt="ads_fruit" />
          </Box>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
