import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

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

  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
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
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper_mob"
        >
          <SwiperSlide>
            <Box className="swiper_box2_mobile">
              <video
                style={{ width: "100%" }}
                className="video"
                src="/admin_photo/navbarvid.mp4"
                autoPlay
                muted
                loop
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  } else {
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
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box className="swiper_box2">
              <video
                style={{ width: "100%", backgroundSize: "cover" }}
                className="video"
                src="/admin_photo/navbarvid.mp4"
                autoPlay
                muted
                loop
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
