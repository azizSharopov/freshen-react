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
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

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
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({
        order: "discounted_result",
        page: 1,
        limit: 30,
      })
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.discounted_result !== null
        );
        setSaleProducts(filteredData);
      })
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
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          // position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Box className="home_top_mb" sx={{ width: "50%" }}>
            Deal of the Day
            <img
              style={{ width: "100px", marginLeft: "40px" }}
              src="/homepage/sale.jpg"
              alt="deal_sale"
            />
          </Box>

          {/* <Box className="sale_time">
          <span className="sale_time_end">Ends in:</span>
          <span className="sale_time1">04 : 43 : 11</span>
         
        </Box> */}
        </Box>
        <div
          className={"best_products"}
          style={{
            width: "100%",
            height: "450px",
            marginTop: "60px",
            display: "flex",
            // position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="prev_btn_mb shop-prev2"
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
            // style={{ width: "100%" }}
            className={"best_products_wrapper1"}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={30}
            navigation={{
              nextEl: ".shop-next2",
              prevEl: ".shop-prev2",
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
                    // border: "1px solid #eaeaea",
                  }}
                  className="productsbest1"
                >
                  <Box
                    className="products_sliderbest1"
                    sx={{ height: "410px" }}
                    // onClick={() => chosenProductHandler(product._id)}
                  >
                    {/* <Box
                    sx={{
                      zIndex: "5",
                      position: "absolute",
                      marginLeft: "20px",
                    }}
                    className="product_sale_info"
                  > */}
                    {product.discounted_result &&
                    product.product_discount?.type === "percentage" ? (
                      <Box
                        sx={{
                          zIndex: "5",
                          position: "absolute",
                          marginLeft: "25px",
                          marginTop: "25px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "30px",
                          width: "59px",
                          background: "#d53f20",
                          borderRadius: "60px",
                          color: "#ffffff",
                          fontFamily: "Lato",
                          fontWeight: "700",
                          fontSize: "14px",
                        }}
                      >
                        {product.product_discount?.value}%{" "}
                      </Box>
                    ) : null}
                    {/* </Box> */}
                    <Box
                      className="products_slider_img_best1"
                      // style={{ width: "220px", height: "200px" }}
                    >
                      <img
                        // style={{ width: "210px", height: "190px" }}
                        src={image_path}
                        alt=""
                      />

                      <Box
                        sx={{ zIndex: "6" }}
                        className="like_view_boxbest1"
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
                    <Box>
                      {" "}
                      <Button
                        className={"add_card_deal"}
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
                    <Box
                      className="product_infosale1"
                      sx={{ marginTop: "30px" }}
                    >
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
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box className="next_btn_mb shop-next2" style={{ color: "#41544A" }}>
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
            marginTop: "40px",
          }}
        >
          <Box className="home_top" sx={{ width: "50%" }}>
            Deal of the Day
            <img
              style={{ width: "200px", marginLeft: "40px" }}
              src="/homepage/sale.jpg"
              alt="deal_sale"
            />
          </Box>

          {/* <Box className="sale_time">
          <span className="sale_time_end">Ends in:</span>
          <span className="sale_time1">04 : 43 : 11</span>
         
        </Box> */}
        </Container>
        <div
          className={"best_products"}
          style={{
            width: "1441",
            height: "454px",
            marginTop: "60px",
            display: "flex",
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="prev_btn shop-prev2"
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
            style={{ width: "1280px" }}
            className={"best_products_wrapper"}
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={30}
            navigation={{
              nextEl: ".shop-next2",
              prevEl: ".shop-prev2",
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
                  className="productsbest1"
                >
                  <Box
                    className="products_sliderbest1"
                    sx={{ height: "410px" }}
                    onClick={() => chosenProductHandler(product._id)}
                  >
                    {/* <Box
                    sx={{
                      zIndex: "5",
                      position: "absolute",
                      marginLeft: "20px",
                    }}
                    className="product_sale_info"
                  > */}
                    {product.discounted_result &&
                    product.product_discount?.type === "percentage" ? (
                      <Box
                        sx={{
                          zIndex: "5",
                          position: "absolute",
                          marginLeft: "25px",
                          marginTop: "25px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "30px",
                          width: "59px",
                          background: "#d53f20",
                          borderRadius: "60px",
                          color: "#ffffff",
                          fontFamily: "Lato",
                          fontWeight: "700",
                          fontSize: "14px",
                        }}
                      >
                        {product.product_discount?.value}%{" "}
                      </Box>
                    ) : null}
                    {/* </Box> */}
                    <Box
                      className="products_slider_img_best1"
                      // style={{ width: "220px", height: "200px" }}
                    >
                      <img
                        // style={{ width: "210px", height: "190px" }}
                        src={image_path}
                        alt=""
                      />

                      <Box
                        sx={{ zIndex: "6" }}
                        className="like_view_boxbest1"
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
                    <Box>
                      {" "}
                      <Button
                        className={"add_card_deal"}
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
                    <Box
                      className="product_infosale1"
                      sx={{ marginTop: "30px" }}
                    >
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
                      {/* <Box
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
                    </Box> */}
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box className="next_btn shop-next2" style={{ color: "#41544A" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
          </Box>
        </div>
      </div>
    );
  }
}
