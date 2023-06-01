import { Box, Container, Stack, Link, Badge, Checkbox } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "../../../css/about.css";
import "../../../css/home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setFreshenBoArticles } from "./slice";
import { retrieveFreshenBoArticles } from "./selector";

import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import TViewer from "../../components/TUIEditor/TuiViewer";
import CommunityApiService from "../../apiServices/communityApiService";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Favorite } from "@mui/icons-material";
import assert from "assert";
import { verifiedMemberData } from "../../apiServices/verify";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Review } from "../../../types/follow";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setFreshenBoArticles: (data: BoArticle[]) =>
    dispatch(setFreshenBoArticles(data)),
});

// REDUX SELECTOR
const freshenBoArticlesRetriever = createSelector(
  retrieveFreshenBoArticles,
  (freshenBoArticles) => ({
    freshenBoArticles,
  })
);

export function AboutPage(props: any) {
  /** INITIALIZATIONSS **/

  const history = useHistory();
  const { setFreshenBoArticles } = actionDispatch(useDispatch());
  const { freshenBoArticles } = useSelector(freshenBoArticlesRetriever);
  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles({
        bo_id: "FRESHEN",
        page: 1,
        limit: 10,
        order: "art_likes",
      })
      .then((data) => setFreshenBoArticles(data))
      .catch((err) => console.log(err));
  }, []);
  const refs: any = useRef([]);

  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
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
      props.setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <div className="blogPage">
        <div>
          <img src="/homepage/image 28.png" alt="" />
        </div>
        <Container>
          <Box
            sx={{
              width: "135px",
              height: "91px",
              position: "absolute",
              marginTop: "62px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="blog_page">About us</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>About Us</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container>
        <Stack
          sx={{
            width: "100%",
            height: "680px",
            display: "flex",
            flexDirection: "row",
            marginTop: "50px",
          }}
        >
          <Stack className="about_page_left">
            <Box className="about_page_l1"></Box>
            <Box className="about_page_l2"></Box>
          </Stack>
          <Box className="about_page_right">
            <Box className="about_page_r1">
              Save more with Freshen ! We give you the lowest prices on all your
              grocery needs.
            </Box>
            <Box
              className="about_page_r2"
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="about_page_r21">Our Vision</span>
              <span className="about_page_r22">
                Essentially, the good stuff is right here. We source the best
                suppliers and makers of natural and organic products that you
                won’t find on the high street. If you care about how things get
                made and what’s in them, we bring you products created with
                care.{" "}
              </span>
            </Box>
            <Box
              className="about_page_r3"
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="about_page_r21">Our Goal</span>
              <span className="about_page_r22">
                Essentially, the good stuff is right here. We source the best
                suppliers and makers of natural and organic products that you
                won’t find on the high street. If you care about how things get
                made and what’s in them, we bring you products created with
                care.{" "}
              </span>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Container>
        <Box className="home_top">Why choose FRESHEN</Box>
        <Stack
          sx={{
            height: "212px",
            marginTop: "80px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            gap: "40px",
          }}
        >
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon1">
              <img src="./icons/love.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Eat More Healthfully.
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon2">
              <img src="./icons/lemon.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                We Have Reputation
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon3">
              <img src="./icons/carrot.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Fresh & Pesticide Free
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            height: "212px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            gap: "40px",
          }}
        >
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon4">
              <img src="./icons/broccoli.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                No Commitment Required
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon5">
              <img src="./icons/salad.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Flexibility
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon6">
              <img src="./icons/apple.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Customization
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
      <div
        className="why_love_us"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box className="why_love_about">People blog about us</Box>
        <Stack
          style={{
            width: "100%",
            height: "400px",
            marginTop: "150px",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "40",
          }}
        >
          <Swiper
            className={"about_wrapper"}
            slidesPerView={3}
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
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {freshenBoArticles?.map((article: BoArticle, index) => {
              const art_image_url = article?.art_image
                ? `${serverApi}/${article?.art_image}`
                : "/homepage/diet-food.jpg";
              return (
                <SwiperSlide
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Link
                    href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
                  >
                    <Box className="blog_box_about" key={index}>
                      <Box
                        className="blog_img_about"
                        sx={{
                          backgroundImage: `url(${art_image_url})`,
                          zIndex: "3",
                        }}
                      >
                        {/* <img src="/homepage/blog.jpg" alt="blog" /> */}
                        <Box
                          sx={{
                            width: "65px",
                            height: "77px",
                            background: "#ffffff",
                            zIndex: "5",
                            position: "absolute",
                            marginLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                          }}
                        >
                          <span
                            className="brand_namebest"
                            style={{ color: "#121212" }}
                          >
                            {moment(article?.createdAt).format("MM")}
                          </span>
                          <span className="home_blog_date">
                            {" "}
                            {moment(article?.createdAt).format("DD")}
                          </span>
                        </Box>
                        <Box
                          sx={{
                            width: "150px",
                            height: "30px",
                            background: "#86bc42",
                            zIndex: "5",
                            position: "absolute",
                            marginLeft: "20px",
                            marginTop: "225px",
                            borderRadius: "60px",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          <Box className="blog_subject_home">
                            {article?.bo_id}
                          </Box>
                        </Box>
                        <Box
                          className="blog_subject_about"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Checkbox
                            icon={<img src="/icons/heart_green.png" alt="" />}
                            id={article._id}
                            checkedIcon={
                              <img src="/icons/heart_red.png" alt="" />
                            }
                            onClick={targetLikeHandler}
                            /*@ts-ignore*/
                            checked={
                              article?.me_liked &&
                              article?.me_liked[0]?.my_favorite
                                ? true
                                : false
                            }
                          />
                        </Box>
                      </Box>
                      <Box className="blog_subject_info">
                        <Box className="about_subject_text">
                          {article?.art_subject}
                        </Box>
                        <Box className="about_blog_by">
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "10px",
                            }}
                          >
                            <img
                              style={{
                                width: "15px",
                                height: "15px",
                                marginTop: "5px",
                              }}
                              src="/icons/user1.png"
                              alt="blog_by"
                            />
                            <Box className="about_by_css">
                              {article?.member_data?.mb_nick}
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "10px",
                              marginLeft: "30px",
                            }}
                          >
                            <img
                              style={{
                                width: "15px",
                                height: "15px",
                                marginTop: "5px",
                              }}
                              src="/icons/chat1.png"
                              alt="blog_by"
                            />
                            <Box className="about_by_css">
                              {
                                article.reviews && article.reviews.length > 0
                                  ? (article.reviews as Review[])[0]
                                      ?.average_rating
                                  : 0 // Provide a default value if there are no reviews
                              }
                              <span style={{ marginLeft: "5px" }}>
                                Comments
                              </span>
                            </Box>
                          </Box>

                          <Box
                            className="about_by_css"
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "10px",
                              marginLeft: "30px",
                            }}
                          >
                            {" "}
                            <Favorite
                              sx={{ fontSize: 20, marginLeft: "5px" }}
                            />
                            <div
                              ref={(element) =>
                                (refs.current[article._id] = element)
                              }
                            >
                              {article.art_likes}
                            </div>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </div>

      <Container
        sx={{
          height: "230px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
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
      </Container>
    </div>
  );
}
