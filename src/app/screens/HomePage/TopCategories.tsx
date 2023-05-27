import { Box, Container, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Autoplay, Pagination, Navigation } from "swiper";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopShops } from "../../screens/HomePage/selector";
import { Shop } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import {
  retrieveChosenShop,
  retrieveTargetProducts,
  retrieveTargetShops,
} from "../../screens/ShopPage/selector";
import { useHistory } from "react-router-dom";

/** REDUX SELECTOR */
const topShopRetriever = createSelector(retrieveTopShops, (topShops) => ({
  topShops,
}));

export function TopCategories() {
  const { topShops } = useSelector(topShopRetriever);
  console.log("topShops:::", topShops);
  const history = useHistory();
  // const searchShopProductsHandler = (shop: string) => {
  //   targetProductsSearchObj.page = 1;
  //   targetProductsSearchObj.shop_mb_id = shop;
  //   setTargetProductsSearchObj({ ...targetProductsSearchObj });
  // };
  // const searchShopProductsHandler = (shop_mb_id) => {
  //  history.push(`/shop`);
  // };

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
              style={{ color: "#41544A" }}
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
            {topShops.map((ele: Shop) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <SwiperSlide
                  // onClick={() => searchShopProductsHandler(shop_mb_id)}
                  style={{ cursor: "pointer" }}
                  key={ele._id}
                  className={"shop_avatars"}
                >
                  <Box className="home_top_cat">
                    <Box className="home_top_icon">
                      <img
                        style={{
                          backgroundSize: "cover",
                          width: "57px",
                          height: "57px",
                          transition:
                            "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
                        }}
                        src={image_path}
                        alt="home_food"
                      />
                    </Box>
                    <Box className="home_top_tex">{ele.mb_nick}</Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box className={"next_btn shop-next"} style={{ color: "#41544A" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
