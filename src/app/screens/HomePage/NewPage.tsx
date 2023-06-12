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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Autoplay, Pagination, Navigation } from "swiper";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewProducts } from "../../screens/HomePage/slice";
import { Product } from "../../../types/product";
import ProductApiService from "../../apiServices/productApiService";
import { retrieveNewProducts } from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { NavLink, useHistory } from "react-router-dom";
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
  setNewProducts: (data: Product[]) => dispach(setNewProducts(data)),
});

/** REDUX SELECTOR */
const newProductRetriever = createSelector(
  retrieveNewProducts,
  (newProducts) => ({
    newProducts,
  })
);

export function NewPage(props: any) {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { setNewProducts } = actionDispatch(useDispatch());
  const { newProducts } = useSelector(newProductRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "createdAt", page: 1, limit: 200 })
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

  const refs: any = useRef([]);

  /** HANDLERS */
  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };

  const chosenShopHandler = (order: string) => {
    // setChosenShopId(id);
    history.push(`/shop`);
    props.targetProductsSearchObj.shop_mb_id = null;
    props.targetProductsSearchObj.order = order;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
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

  return (
    <div
      style={{
        width: "100%",
        height: "555px",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Box className="home_top"> New Products</Box>
        <Box
          className="best_product_link"
          onClick={() => chosenShopHandler("createdAt")}
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
          className="prev_btn shop-prev"
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
        <Swiper
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
          {newProducts.map((product: Product) => {
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
                    sx={{ marginLeft: "30px" }}
                  >
                    <img src={image_path} alt="best product" />

                    <Box
                      className="like_view_boxbest"
                      sx={{ marginLeft: "210px" }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {/* <Badge
                      badgeContent={product.product_likes}
                      sx={{
                        color: "#121212",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    > */}
                      <Checkbox
                        icon={<img src="/icons/heart_green.png" alt="" />}
                        id={product._id}
                        checkedIcon={<img src="/icons/heart_red.png" alt="" />}
                        onClick={(e) => {
                          targetLikeProduct(e, product._id);
                        }}
                        /*@ts-ignore*/
                        checked={
                          product?.me_liked && product?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      />
                      {/* </Badge> */}
                    </Box>
                  </Box>
                  <Box className="product_infobest" sx={{ marginTop: "20px" }}>
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
        <Box className="next_btn shop-next" style={{ color: "#41544A" }}>
          <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
        </Box>
      </div>
    </div>
  );
}
