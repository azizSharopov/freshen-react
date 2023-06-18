import React, { useEffect, useRef, useState } from "react";
import { Box, Checkbox, Container, Link, Stack } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink, useHistory } from "react-router-dom";
// import PaginationAllProducts from "../ShopPage/paginationAllProduct";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setBestBoArticles } from "./slice";
import { retrieveBestBoArticles } from "./selector";

import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import TViewer from "../../components/TUIEditor/TuiViewer";
import CommunityApiService from "../../apiServices/communityApiService";

import moment from "moment";
import { Favorite } from "@mui/icons-material";
import { Review } from "../../../types/follow";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setBestBoArticles: (data: BoArticle[]) => dispatch(setBestBoArticles(data)),
});

// REDUX SELECTOR
const bestBoArticlesRetriever = createSelector(
  retrieveBestBoArticles,
  (bestBoArticles) => ({
    bestBoArticles,
  })
);

export default function BlogPage(props: any) {
  /** INITIALIZATIONSS **/

  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const history = useHistory();
  const { setBestBoArticles } = actionDispatch(useDispatch());
  const { bestBoArticles } = useSelector(bestBoArticlesRetriever);
  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 3,
        order: "art_likes",
      })
      .then((data) => setBestBoArticles(data))
      .catch((err) => console.log(err));
  }, [articlesRebuild]);

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
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const { isMobile } = useDeviceDetect();
  if (isMobile()) {
    return (
      <Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "90px",
          }}
        >
          <Box className="home_top_mb">OUR BLOG</Box>
        </Box>
        <Stack className="blogs" sx={{ flexWrap: "wrap" }}>
          {bestBoArticles?.map((article: BoArticle, index: any) => {
            const art_image_url = article?.art_image
              ? `${serverApi}/${article?.art_image}`
              : "/homepage/diet-food.jpg";

            return (
              // <Link
              //   href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
              // >
              <Box className="blog_box_mb" key={index}>
                <Box
                  className="blog_img_mb"
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
                      // position: "absolute",
                      marginLeft: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      marginTop: "30px",
                    }}
                  >
                    <span
                      className="brand_namebest"
                      style={{ color: "#121212" }}
                    >
                      {moment().format("MM")}
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
                      marginTop: "150px",
                      borderRadius: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box className="blog_subject_home">{article?.bo_id}</Box>
                  </Box>
                  <Box
                    className="blog_subject_blog2"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    sx={{ marginLeft: "310px" }}
                  >
                    <Checkbox
                      icon={<img src="/icons/heart_green.png" alt="" />}
                      id={article._id}
                      checkedIcon={<img src="/icons/heart_red.png" alt="" />}
                      onClick={(e) => {
                        targetLikeHandler(e);
                      }}
                      /*@ts-ignore*/
                      checked={
                        article?.me_liked && article?.me_liked[0]?.my_favorite
                          ? true
                          : false
                      }
                    />
                  </Box>
                </Box>
                <Box className="blog_subject_info_mb">
                  <Box className="blog_subject_text" sx={{ width: "340px" }}>
                    {article?.art_subject}
                  </Box>
                  <Box className="home_blog_by_mb">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        padding: "10px",
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
                            ? (article.reviews as Review[])[0]?.average_rating
                            : 0 // Provide a default value if there are no reviews
                        }
                        <span style={{ marginLeft: "5px" }}>Comments</span>
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
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      <div
                        ref={(element) => (refs.current[article._id] = element)}
                      >
                        {article.art_likes}
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
              // </Link>
            );
          })}
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box className="home_top">OUR BLOG</Box>
          {/* <Box className="best_product_link"> */}
          <Link
            className="best_product_link"
            href="/community"
            sx={{
              color: "#41544A",
              marginTop: "115px",
              fontFamily: "Signika",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "30px",
            }}
          >
            View All_
            <ArrowRightAltIcon />
          </Link>

          {/* </Box> */}
          {/* <Box className="best_product_link">
          <Link className="best_product_link" href="/community">
            {" "}
            View All_ <ArrowRightAltIcon />
          </Link>
        </Box> */}
        </Box>
        <Stack className="blogs" sx={{ flexDirection: "row" }}>
          {bestBoArticles?.map((article: BoArticle, index: any) => {
            const art_image_url = article?.art_image
              ? `${serverApi}/${article?.art_image}`
              : "/homepage/diet-food.jpg";

            return (
              <Link
                href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
              >
                <Box className="blog_box" key={index}>
                  <Box
                    className="blog_img"
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
                        // position: "absolute",
                        marginLeft: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        marginTop: "30px",
                      }}
                    >
                      <span
                        className="brand_namebest"
                        style={{ color: "#121212" }}
                      >
                        {moment().format("MM")}
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
                        marginTop: "150px",
                        borderRadius: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box className="blog_subject_home">{article?.bo_id}</Box>
                    </Box>
                    <Box
                      className="blog_subject_blog2"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Checkbox
                        icon={<img src="/icons/heart_green.png" alt="" />}
                        id={article._id}
                        checkedIcon={<img src="/icons/heart_red.png" alt="" />}
                        onClick={(e) => {
                          targetLikeHandler(e);
                        }}
                        /*@ts-ignore*/
                        checked={
                          article?.me_liked && article?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      />
                    </Box>
                  </Box>
                  <Box className="blog_subject_info">
                    <Box className="blog_subject_text">
                      {article?.art_subject}
                    </Box>
                    <Box className="home_blog_by">
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
                              ? (article.reviews as Review[])[0]?.average_rating
                              : 0 // Provide a default value if there are no reviews
                          }
                          <span style={{ marginLeft: "5px" }}>Comments</span>
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
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
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
            );
          })}
        </Stack>
      </Box>
    );
  }
}
