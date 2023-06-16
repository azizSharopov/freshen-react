import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {
  Box,
  Button,
  Checkbox,
  Container,
  Rating,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { RatingComponent, ReviewsComponent } from "./reviews";

import Marginer from "../../components/marginer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { BestPage } from "../HomePage/BestPage";
import { Definer } from "../../../lib/Definer";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import ProductApiService from "../../apiServices/productApiService";
import ShopApiService from "../../apiServices/shopApiService";
import { serverApi } from "../../../lib/config";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Product } from "../../../types/product";
import { Shop } from "../../../types/user";

import { setChosenShop, setChosenProduct, setMemberReviews } from "./slice";
import {
  retrieveChosenShop,
  retrieveChosenProduct,
  retrieveMemberReviews,
} from "./selector";
import { useParams } from "react-router-dom";
import assert from "assert";
import { verifiedMemberData } from "../../apiServices/verify";
import { Review, Reviews } from "../../../types/follow";
import { SearchReviewsObj } from "../../../types/others";
import moment from "moment";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenShop: (data: Shop) => dispach(setChosenShop(data)),
  setMemberReviews: (data: Reviews[]) => dispach(setMemberReviews(data)),
});

/** REDUX SELECTOR */
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const chosenShopRetriever = createSelector(
  retrieveChosenShop,
  (chosenShop) => ({
    chosenShop,
  })
);
const memberReviewsRetriever = createSelector(
  retrieveMemberReviews,
  (memberReviews) => ({
    memberReviews,
  })
);

export default function ChosenPage(props: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  /** INITIALIZATIONS **/
  let { product_id } = useParams<{ product_id: string }>();
  const { setChosenProduct, setChosenShop, setMemberReviews } = actionDispatch(
    useDispatch()
  );
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenShop } = useSelector(chosenShopRetriever);
  const { memberReviews } = useSelector(memberReviewsRetriever);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const productRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenProduct(
        product_id
      );
      setChosenProduct(product);

      const shopService = new ShopApiService();
      const shop = await shopService.getChosenShop(product.shop_mb_id);
      setChosenShop(shop);

      const productReviews: Reviews[] =
        await productService.getReviewsChosenItem(targetSearchObj);
      setMemberReviews(productReviews);
    } catch (err) {
      console.log(`ProductRelatedProcess, ERROR:`, err);
    }
  };

  /** review */
  const [reviewContent, setReviewContent] = useState("");
  const [reviewRating, setReviewRating] = useState(2);
  const [displayedReviews, setDisplayedReviews] = useState<number>(20);

  const [targetSearchObj, setTargetSearchObj] = useState<SearchReviewsObj>({
    page: 1,
    limit: displayedReviews,
    order: "createdAt",
    rating_ref_id: product_id,
  });

  const submitReview = async () => {
    try {
      // Validate the review content
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      assert.ok(reviewContent.trim() !== "", "Please enter your review.");

      // Create the review object
      const reviewData = {
        rating_ref_id: product_id, // Replace articleId with the actual article ID
        mb_id: verifiedMemberData._id, // Replace member._id with the actual member ID
        cmt_content: reviewContent.trim(),
        rating_stars: reviewRating, // Replace 2 with the actual rating value
        rating_group: "product",
      };

      // Call the API to create the review
      const communityService = new ProductApiService();
      const createdReview = await communityService.createReview(reviewData);

      // Handle the success case
      console.log("Review created:", createdReview);
      // Add any additional logic or state updates as needed

      // Reset the review content
      setReviewContent("");
      await sweetTopSmallSuccessAlert("submitted successfully", 700, false);
      setProductRebuild(new Date());
    } catch (err) {
      console.log("Error creating review:", err);
      sweetErrorHandling(err).then();

      // Handle the error case
      // You can display an error message or perform any necessary actions
    }
  };

  const [value, setValue] = React.useState("1");

  const [tabValue, settabValue] = React.useState("a");

  const [product_cnt, setProduct_cnt] = React.useState(1);

  useEffect(() => {
    productRelatedProcess().then();
  }, [productRebuild, displayedReviews, product_id]);

  /** HANDLERS */
  const handleSeeAllReviews = () => {
    const newDisplayedReviews = displayedReviews + 5; // Increase the number of displayed reviews
    setDisplayedReviews(newDisplayedReviews);
    setTargetSearchObj((prevSearchObj) => ({
      ...prevSearchObj,
      limit: newDisplayedReviews,
    }));
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

  const handle_cnt_minus = (event: any) => {
    setProduct_cnt((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handle_cnt_plus = (event: any) => {
    setProduct_cnt((prev) => prev + 1);
  };
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handleChangetablist = (event: any, newValue: string) => {
    settabValue(newValue);
  };
  const shop_mb_nick = chosenShop?.mb_nick;

  const product_raviews = chosenProduct?.reviews?.[0]?.average_rating ?? 0;
  const product_raviews_cnt = chosenProduct?.reviews?.[0]?.reviews_cnt ?? 0;

  return (
    <div style={{ background: "#ffffff" }}>
      <div className="blogPage">
        <div>
          <img src="/homepage/image 28.png" alt="" />
        </div>
        <Container>
          <Box
            sx={{
              width: "335px",
              height: "91px",
              position: "absolute",
              marginTop: "62px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="blog_page" sx={{ width: "400px" }}>
              {chosenProduct?.product_name}
            </Box>
            <Box className="blog_page1">
              <Box>
                Home / Shop /{" "}
                <span style={{ fontWeight: "600" }}>{chosenShop?.mb_nick}</span>
              </Box>
            </Box>
            {/* <Box className="chosen_page">Home / Shop / </Box>
            <Box className="chosen_page"> {chosenShop?.mb_nick} / </Box>
            <Box className="chosen_page1">{chosenProduct?.product_name} </Box> */}
          </Box>
        </Container>
      </div>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            width: "520px",
            height: "678px",
          }}
        >
          <Box className="img_part_product">
            <TabContext value={value}>
              <Box>
                {chosenProduct?.product_images.map((ele: string, index) => {
                  const image_path = `${serverApi}/${ele}`;
                  return (
                    <TabPanel value={(index + 1).toString()}>
                      <Box className="main_img_part_product">
                        <img
                          style={{ width: "560px" }}
                          src={image_path}
                          alt="chosen"
                        />
                      </Box>
                    </TabPanel>
                  );
                })}
              </Box>
              <Box className="all_img_part_product">
                <TabList onChange={handleChange}>
                  {chosenProduct?.product_images.map((ele: string, index) => {
                    const image_path = `${serverApi}/${ele}`;
                    return (
                      <Tab
                        label={
                          <Box className="small_img_part_product">
                            <img src={image_path} alt="chosen" />
                          </Box>
                        }
                        value={(index + 1).toString()}
                      />
                    );
                  })}
                </TabList>
              </Box>
            </TabContext>
          </Box>
        </Stack>
        <Stack className="chosen_pro_info" sx={{ marginLeft: "20px" }}>
          <Box className="chosen_instock">
            <Box className="chosen_instock1">IN STOCK</Box>
          </Box>
          <Box className="chosen_pro_name"> {chosenProduct?.product_name}</Box>
          <Box className="product_reting_chosen">
            <Box className="product_retingonsale">
              <Rating
                size="small"
                name="read-only"
                value={product_raviews ? product_raviews : 0}
                readOnly
              />

              <Box>{product_raviews_cnt ? product_raviews_cnt : 0} reviews</Box>
            </Box>
          </Box>
          <Box
            className="product_pricebest"
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            {chosenProduct?.discounted_result &&
            chosenProduct.product_discount?.type === "percentage" ? (
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
                  ${chosenProduct?.discounted_result}{" "}
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
                  ${chosenProduct?.product_price}
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
                  ${chosenProduct?.product_price}
                </Box>
              </Box>
            )}
          </Box>
          <Box className="product_box_text">
            {chosenProduct?.product_description}
          </Box>
          <Box className="add_cart_buy">
            {/* <Box className="count_cart_buy">
              <Box className="add_change" onClick={handle_cnt_minus}>
                -
              </Box>
              {product_cnt}
              <Box className="add_change" onClick={handle_cnt_plus}>
                +
              </Box>
            </Box> */}
            <Button
              className="add_card_chosen"
              onClick={(e) => {
                props.onAdd(chosenProduct);
              }}
              sx={{
                cursor: "pointer",
                color: "#ffffff",
                fontSize: "14px",
                width: "232px",
                height: "55px",
                background: "#86bc42",
                textTransform: "none",
                "&:hover": {
                  boxShadow: "10px 5px 5px red",
                  backgroundColor: "#86bc42",
                },
              }}
            >
              <Box>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/icons/shopping-cart.png"
                  alt=""
                />{" "}
              </Box>
              <Box
                style={{
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "16px",
                }}
              >
                ADD TO CART
              </Box>
            </Button>
          </Box>
          <Box
            className="chosen_heart"
            sx={{ width: "200px" }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Checkbox
              icon={<img src="/icons/heart_green.png" alt="" />}
              id={chosenProduct?._id}
              checkedIcon={<img src="/icons/heart_red.png" alt="" />}
              onClick={targetLikeProduct}
              /*@ts-ignore*/
              checked={
                chosenProduct?.me_liked &&
                !!chosenProduct?.me_liked[0]?.my_favorite
                  ? true
                  : false
              }
            />{" "}
            Add to Wishlist
          </Box>
          <Box sx={{ mt: "30px", mb: "20px" }}>
            <Box className="spes_box">
              <Box className="spes_type">SKU:</Box>
              <Box className="spes_value">{chosenProduct?.product_sku}</Box>
            </Box>
            <Box className="spes_box">
              <Box className="spes_type">Categories:</Box>
              <Box className="spes_value"> {shop_mb_nick}</Box>
            </Box>
            <Box className="spes_box">
              <Box className="spes_type">Share:</Box>
              <Box className="sns_icons">
                <Box>
                  <img src="/icons/fc.png" alt="fc" />
                </Box>
                <Box>
                  <img src="/icons/tw1.png" alt="fc" />
                </Box>
                <Box>
                  <img src="/icons/ins.png" alt="fc" />
                </Box>
                <Box>
                  <img style={{ width: "15px" }} src="/icons/tg.png" alt="fc" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>

        <Stack className="chosen_pro_info1">
          {" "}
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/fast.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                Free Delivery
              </span>
              <span>For all oders over $99</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/credit-card.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                Secure Payment
              </span>
              <span>100% secure payment</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/returning.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                7 Days Return
              </span>
              <span>If goods have problems</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/support.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                24/7 Support
              </span>
              <span>Dedicated support</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info" sx={{ marginTop: "180px" }}>
            <img
              style={{ height: "350px", width: "280px" }}
              src="/homepage/fresh-vegetab.jpg"
              alt=""
            />
          </Box>
        </Stack>
      </Container>
      <Box sx={{ marginTop: "130px" }}></Box>
      <Marginer
        direction="horizontal"
        height="1"
        width="2"
        bg="#EAEAEA"
        opsty="1"
      />
      <Container sx={{ marginTop: "50px" }}>
        <Box sx={{ display: "flex", gap: "110px" }}>
          {/* <Box>
            <ReviewsComponent chosenProduct={chosenProduct} />
          </Box> */}
          <Stack sx={{ width: "500px", height: "auto" }}>
            <Box className="count_of_review">Reviews</Box>
            {Array.isArray(memberReviews) &&
              memberReviews.map((reviews: Reviews, index: any) => {
                const options: Intl.DateTimeFormatOptions = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                };
                const createAt = new Date(reviews.createdAt);
                const formattedDate =
                  createAt instanceof Date
                    ? createAt.toLocaleDateString(undefined, options)
                    : "";
                console.log("review", reviews.member_data);

                const image_path = `${serverApi}/${reviews.member_data[0]?.mb_image}`;
                return (
                  <Box className="reviews_box" key={reviews._id}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Box className="review_account_info">
                        {reviews.member_data[0]?.mb_image ? (
                          <Box
                            className="review_account_img"
                            sx={{ backgroundImage: `url(${image_path})` }}
                          >
                            {reviews.member_data[0]?.mb_nick[0]}.
                          </Box>
                        ) : (
                          <Box
                            className="review_account_img"
                            sx={{ backgroundColor: "#86bc42" }}
                          >
                            <img
                              src="/icons/default_user.png"
                              alt="user_chosen"
                            />
                          </Box>
                        )}
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Box className="user_of_review">
                            {" "}
                            {reviews?.member_data[0]?.mb_nick}
                          </Box>
                          <Box className="date_of_review">
                            {" "}
                            {moment(reviews?.createdAt).format(
                              "YY-MM-DD HH:mm"
                            )}
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        className="rating_of_review"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Rating
                          size="small"
                          name="read-only"
                          value={reviews.rating_stars}
                          readOnly
                        />
                      </Box>
                    </Box>
                    <Box
                      className="date_of_review"
                      sx={{
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      {reviews.cmt_content}
                    </Box>
                  </Box>
                );
              })}
          </Stack>

          <Box>
            <Box className="write_review_section">
              <Box className="write_review_box">
                <Box className="count_of_review"> Add a review </Box>

                <Box className="rating_select">
                  Your Rating{" "}
                  <Rating
                    size="small"
                    name="controlled"
                    value={reviewRating}
                    onChange={(event, value) =>
                      setReviewRating(value as number)
                    }
                  />
                </Box>
                <Box className="rating_select"> Your Review</Box>
                <Box className="write_review_box">
                  <textarea
                    name="comment_content"
                    className="comment_content"
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                  ></textarea>
                </Box>
                <Box
                  sx={{ cursor: "pointer" }}
                  className="review_submit_btn"
                  onClick={submitReview}
                >
                  SUBMIT
                </Box>
              </Box>

              <Box className="wrire_review_box"></Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <div>
        <Container
          sx={{
            width: "50%",
            height: "50px",
            marginLeft: "50%",
            marginTop: "100px",
            background: "#ffffff",
            zIndex: "777",
            position: "absolute",
          }}
        ></Container>
        <BestPage
          onAdd={props.onAdd}
          targetProductsSearchObj={props.targetProductsSearchObj}
          setTargetProductsSearchObj={props.setTargetProductsSearchObj}
        />
      </div>
    </div>
  );
}
