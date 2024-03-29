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
import { NavLink, useHistory } from "react-router-dom";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

export function AdverPage(props: any) {
  const history = useHistory();

  const chosenShopHandler = (id: string) => {
    // setChosenShopId(id);
    history.push(`/shop`);
    props.targetProductsSearchObj.shop_mb_id = id;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div
        style={{
          marginTop: "50px",
          height: "300px",
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
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box className="adver_box3_mb">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <Box>
                  <img
                    style={{ width: "60px" }}
                    src="/icons/food.png"
                    alt="adver"
                  />
                </Box>
                <Box
                  className="ads_text_mb"
                  sx={{ color: "#849D6A", marginTop: "10px" }}
                >
                  Orange Juice
                </Box>
                <Box className="ads_text1_mb">
                  <span>For Human Health</span> <br />
                </Box>
                {/* <Box className="ads_text2_mb">
                  Organic food is food produced by methods that comply with the
                  standards of organic farming. Standards vary worldwide, but
                  organic farming in general features.
                </Box> */}
                <Button
                  variant="contained"
                  style={{
                    width: "100px",
                    height: "20px",
                    marginTop: "10px",
                    background: "#86bc42",
                    borderRadius: "4px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                  // onClick={() => setValue(!value)}
                  // onClick={() => chosenShopHandler("646b0d1dc88f933b56ca3fd1")}
                >
                  GO SHOP
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  } else {
    return (
      <div
        style={{
          marginTop: "120px",
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
          navigation={false}
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
                  onClick={() => chosenShopHandler("646b0d1dc88f933b56ca3fd1")}
                >
                  GO SHOP
                </Button>
              </Container>
            </Box>
          </SwiperSlide>
          {/* <SwiperSlide>
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
                  onClick={() => chosenShopHandler("646ba793af5977f07c50224a")}
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
                onClick={() => chosenShopHandler("646ba70daf5977f07c502247")}
              >
                SHOP WITH US
              </Button>
              <Box
                sx={{
                  width: "300px",
                  height: "300px",
                  marginTop: "50px",
                  opacity: "0.9",
                }}
              >
                <img src="./homepage/carb-cyc.jpg" alt="ads" />
              </Box>
            </Box>
          </Container>
        </SwiperSlide> */}
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
}
