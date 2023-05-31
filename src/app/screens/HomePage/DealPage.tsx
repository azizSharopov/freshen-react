import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
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
import { Autoplay, Pagination, Navigation } from "swiper";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setSaleProducts } from "../../screens/HomePage/slice";
import { Product } from "../../../types/product";
import ProductApiService from "../../apiServices/productApiService";
import { retrieveSaleProducts } from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { Review } from "../../../types/follow";
import { verifiedMemberData } from "../../apiServices/verify";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setSaleProducts: (data: Product[]) => dispach(setSaleProducts(data)),
  // setChosenShop: (data: Shop) => dispach(setChosenShop(data)),
});

/** REDUX SELECTOR */
const saleProductRetriever = createSelector(
  retrieveSaleProducts,
  (saleProducts) => ({
    saleProducts,
  })
);

export function DealPage(props: any) {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { setSaleProducts } = actionDispatch(useDispatch());
  const { saleProducts } = useSelector(saleProductRetriever);

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "discounted_price", page: 1, limit: 200 })
      .then((data) => setSaleProducts(data))
      .catch((err) => console.log(err));
  }, []);

  /** HANDLERS */
  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };

  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: e.target.id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR", err);
      sweetErrorHandling(err).then();
    }
  };

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
          style={{ width: "1280px" }}
          className={"best_products_wrapper"}
          slidesPerView={4}
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
          {saleProducts.map((product: Product) => {
            const image_path = `${serverApi}/${product.product_images[0]}`;
            return (
              <SwiperSlide
                style={{
                  cursor: "pointer",
                  border: "1px solid #eaeaea",
                }}
                className="productsbest"
              >
                <Box
                  className="products_sliderbest1"
                  onClick={() => chosenProductHandler(product._id)}
                >
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
                      src={image_path}
                      alt=""
                    />

                    <Box
                      sx={{ zIndex: "6", position: "absolute" }}
                      className="like_view_boxbest"
                    >
                      <Badge
                        badgeContent={product.product_likes}
                        sx={{
                          color: "#121212",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Checkbox
                          icon={<img src="/icons/heart_green.png" alt="" />}
                          id={product._id}
                          checkedIcon={<Favorite style={{ color: "red" }} />}
                          onClick={targetLikeProduct}
                          /*@ts-ignore*/
                          checked={
                            product?.me_liked &&
                            product?.me_liked[0]?.my_favorite
                              ? true
                              : false
                          }
                        />
                      </Badge>
                    </Box>
                  </Box>
                  <Box>
                    {" "}
                    <Button
                      className={"add_card_btnbest"}
                      onClick={(e) => {
                        props.onAdd(product);
                        e.stopPropagation();
                      }}
                      sx={{
                        background: "#86bc42",
                        width: "240px",
                        height: "35px",
                      }}
                    >
                      <img
                        src={"/icons/shopping-cart.png"}
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "flex",
                        }}
                      />{" "}
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "13px",
                          fontWeight: "700",
                          lineHeight: "16px",
                        }}
                      >
                        ADD TO CART
                      </span>
                    </Button>
                  </Box>
                  <Box className="product_infosale" sx={{ marginTop: "30px" }}>
                    <Box className="brand_namebest">
                      {" "}
                      {product?.member_data[0]?.mb_nick}
                    </Box>
                    <Box className="product_retingbest">
                      <Rating
                        size="small"
                        name="read-only"
                        value={
                          product.reviews && product.reviews.length > 0
                            ? (product.reviews as Review[])[0]?.average_rating
                            : 0 // Provide a default value if there are no reviews
                        }
                        readOnly
                      />
                    </Box>
                    <Box className="product_namebest">
                      {" "}
                      {product.product_name}
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
function setProductRebuild(arg0: Date) {
  throw new Error("Function not implemented.");
}
