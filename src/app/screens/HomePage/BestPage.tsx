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
      .getTargetProducts({ order: "product_likes", page: 1, limit: 200 })
      .then((data) => setBestProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

  const refs: any = useRef([]);

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

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
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
        <Box className="prev_btn shop_prev">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 40 }}
            style={{
              color: "#41544A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          />
        </Box>
        <Container>
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
                      sx={{ marginLeft: "30px" }}
                    >
                      <img src={image_path} alt="best product" />

                      <Box
                        className="like_view_boxbest"
                        sx={{ marginLeft: "230px" }}
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
                          onClick={targetLikeProduct}
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
                        {product.discounted_price &&
                        product.product_discount?.isValid === true &&
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
                              ${product.discounted_price}{" "}
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
