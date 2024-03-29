import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import assert from "assert";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setBestProducts } from "../../screens/HomePage/slice";
import { Product } from "../../../types/product";
import ProductApiService from "../../apiServices/productApiService";
import { retrieveBestProducts } from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { Review } from "../../../types/follow";
import MemberApiService from "../../apiServices/memberApiService";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setBestProducts: (data: Product[]) => dispach(setBestProducts(data)),
  // setChosenShop: (data: Shop) => dispach(setChosenShop(data)),
});

/** REDUX SELECTOR */
const bestProductRetriever = createSelector(
  retrieveBestProducts,
  (bestProducts) => ({
    bestProducts,
  })
);
// const chosenShopRetriever = createSelector(
//   retrieveChosenShop,
//   (chosenShop) => ({
//     chosenShop,
//   })
// );

export function BestPage(props: any) {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { setBestProducts } = actionDispatch(useDispatch());
  const { bestProducts } = useSelector(bestProductRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const chosenShopHandler = (order: string) => {
    // setChosenShopId(id);
    history.push(`/shop`);
    props.targetProductsSearchObj.shop_mb_id = null;
    props.targetProductsSearchObj.order = order;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_likes", page: 1, limit: 30 })
      .then((data) => setBestProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

  const refs: any = useRef([]);

  /** HANDLERS */
  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };
  const targetLikeProduct = async (e: any, id: string) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);
      console.log("e.target.id:::::", id);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      console.log("like_result::::", like_result);

      setProductRebuild(new Date());
      assert.ok(like_result, Definer.general_err1);

      const targetRef = refs.current[like_result.like_ref_id];
      if (targetRef) {
        if (like_result.like_status > 0) {
          e.target.style.fill = "red";
          targetRef.innerHTML++;
        } else {
          e.target.style.fill = "white";
          targetRef.innerHTML--;
        }
      }

      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR", err);
      sweetErrorHandling(err).then();
    }
  };
  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div
        style={{
          width: "100%",
          height: "450px",
          marginTop: "50px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Box className="home_top_mb" sx={{ marginTop: "40px" }}>
            {" "}
            Best Products
          </Box>
        </Box>
        <div
          className={"best_products"}
          style={{
            width: "100%",
            height: "430px",
            marginTop: "40px",
            display: "flex",
            // position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="prev_btn_mb shop-prev1"
            style={{
              color: "#41544A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontSize: 30,
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 30, color: "#41544A" }} />
          </Box>

          <Swiper
            style={{ width: "100%" }}
            className={"best_products_wrapper_mb"}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={30}
            navigation={{
              nextEl: ".shop-next1",
              prevEl: ".shop-prev1",
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
            {bestProducts.map((product: Product) => {
              const image_path = `${serverApi}/${product.product_images[0]}`;
              return (
                <SwiperSlide
                  style={{
                    cursor: "pointer",
                  }}
                  className="productsbest"
                >
                  <Box
                    className="products_sliderbest"
                    // onClick={() => chosenProductHandler(product._id)}
                  >
                    <Box
                      className="products_slider_img_best"
                      sx={{
                        marginLeft: "20px",
                        width: "280px",
                        height: "220px",
                        backgroundSize: "cover",
                      }}
                    >
                      <img
                        style={{ backgroundSize: "cover" }}
                        src={image_path}
                        alt="best product"
                      />

                      <Box
                        className="like_view_boxbest"
                        sx={{ marginLeft: "210px" }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Checkbox
                          icon={<img src="/icons/heart_green.png" alt="" />}
                          id={product._id}
                          checkedIcon={
                            <img src="/icons/heart_red.png" alt="" />
                          }
                          onClick={(e) => {
                            targetLikeProduct(e, product._id);
                          }}
                          /*@ts-ignore*/
                          checked={
                            product?.me_liked &&
                            product?.me_liked[0]?.my_favorite
                              ? true
                              : false
                          }
                        />
                      </Box>
                    </Box>
                    <Box
                      className="product_infobest"
                      sx={{ marginTop: "20px" }}
                    >
                      <Box className="brand_namebest">
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
                        {product.product_name}
                      </Box>
                      <Box className="product_pricebest">
                        {product.discounted_result &&
                        product.product_discount?.type === "percentage" ? (
                          <Box
                            className="product_price"
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                            }}
                          >
                            <Box
                              className="product_price_current"
                              sx={{
                                color: "#86bc42",
                                fontWeight: "600",
                                fontSize: "16px",
                              }}
                            >
                              ${product.discounted_result}{" "}
                            </Box>

                            <Box
                              className="product_price_old"
                              sx={{
                                textDecorationLine: "line-through",
                                color: "#7a7878",
                                fontWeight: "600",
                                fontSize: "16px",
                              }}
                            >
                              {" "}
                              ${product.product_price}
                            </Box>
                          </Box>
                        ) : (
                          <Box className="product_price">
                            <Box
                              className="product_price_current"
                              sx={{
                                color: "#86bc42",
                                fontWeight: "600",
                                fontSize: "16px",
                              }}
                            >
                              ${product.product_price}
                            </Box>
                          </Box>
                        )}
                      </Box>
                      <Box sx={{ marginBottom: "10px" }}>
                        {" "}
                        <Button
                          className={"add_card_btnbest"}
                          onClick={(e) => {
                            props.onAdd(product);
                            e.stopPropagation();
                          }}
                          sx={{
                            color: "#ffffff",
                            fontSize: "14px",
                            width: "240px",
                            height: "35px",
                            background: "#86bc42",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#86bc42",
                            },
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
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Box className="next_btn_mb shop-next1" style={{ color: "#41544A" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 30 }} />
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "650px",
          marginTop: "10px",

          display: "flex",
          flexDirection: "column",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container style={{ display: "flex", flexDirection: "row" }}>
          <Box className="home_top"> Best Products</Box>
          <Box
            className="best_product_link"
            onClick={() => chosenShopHandler("product_likes")}
          >
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
          <Box
            className="prev_btn shop-prev1"
            style={{
              color: "#41544A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontSize: 40,
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 40, color: "#41544A" }} />
          </Box>
          <Container>
            <Swiper
              style={{ width: "1280px" }}
              className={"best_products_wrapper"}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".shop-next1",
                prevEl: ".shop-prev1",
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
              {bestProducts.map((product: Product) => {
                const image_path = `${serverApi}/${product.product_images[0]}`;
                return (
                  <SwiperSlide
                    style={{
                      cursor: "pointer",
                    }}
                    className="productsbest"
                  >
                    <Box
                      className="products_sliderbest"
                      onClick={() => chosenProductHandler(product._id)}
                    >
                      <Box
                        className="products_slider_img_best"
                        sx={{
                          marginLeft: "20px",
                          width: "280px",
                          height: "220px",
                          backgroundSize: "cover",
                        }}
                      >
                        <img
                          style={{ backgroundSize: "cover" }}
                          src={image_path}
                          alt="best product"
                        />

                        <Box
                          className="like_view_boxbest"
                          sx={{ marginLeft: "210px" }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Checkbox
                            icon={<img src="/icons/heart_green.png" alt="" />}
                            id={product._id}
                            checkedIcon={
                              <img src="/icons/heart_red.png" alt="" />
                            }
                            onClick={(e) => {
                              targetLikeProduct(e, product._id);
                            }}
                            /*@ts-ignore*/
                            checked={
                              product?.me_liked &&
                              product?.me_liked[0]?.my_favorite
                                ? true
                                : false
                            }
                          />
                        </Box>
                      </Box>
                      <Box
                        className="product_infobest"
                        sx={{ marginTop: "20px" }}
                      >
                        <Box className="brand_namebest">
                          {product?.member_data[0]?.mb_nick}
                        </Box>
                        <Box className="product_retingbest">
                          <Rating
                            size="small"
                            name="read-only"
                            value={
                              product.reviews && product.reviews.length > 0
                                ? (product.reviews as Review[])[0]
                                    ?.average_rating
                                : 0 // Provide a default value if there are no reviews
                            }
                            readOnly
                          />
                        </Box>
                        <Box className="product_namebest">
                          {product.product_name}
                        </Box>
                        <Box className="product_pricebest">
                          {product.discounted_result &&
                          product.product_discount?.type === "percentage" ? (
                            <Box
                              className="product_price"
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "15px",
                              }}
                            >
                              <Box
                                className="product_price_current"
                                sx={{
                                  color: "#86bc42",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                }}
                              >
                                ${product.discounted_result}{" "}
                              </Box>

                              <Box
                                className="product_price_old"
                                sx={{
                                  textDecorationLine: "line-through",
                                  color: "#7a7878",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                }}
                              >
                                {" "}
                                ${product.product_price}
                              </Box>
                            </Box>
                          ) : (
                            <Box className="product_price">
                              <Box
                                className="product_price_current"
                                sx={{
                                  color: "#86bc42",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                }}
                              >
                                ${product.product_price}
                              </Box>
                            </Box>
                          )}
                        </Box>
                        <Box sx={{ marginBottom: "10px" }}>
                          {" "}
                          <Button
                            className={"add_card_btnbest"}
                            onClick={(e) => {
                              props.onAdd(product);
                              e.stopPropagation();
                            }}
                            sx={{
                              color: "#ffffff",
                              fontSize: "14px",
                              width: "240px",
                              height: "35px",
                              background: "#86bc42",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "#86bc42",
                              },
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
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
          <Box className="next_btn shop-next1" style={{ color: "#41544A" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
          </Box>
        </div>
      </div>
    );
  }
}
