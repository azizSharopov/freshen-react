import React, { useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
import { useHistory } from "react-router-dom";
import moment from "moment";

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

export default function BlogPage() {
  /** INITIALIZATIONSS **/

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
  }, []);

  return (
    <Container>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Box className="home_top">OUR BLOG</Box>
        <Box className="best_product_link">
          View All_ <ArrowRightAltIcon />
        </Box>
      </Container>
      <Stack className="blogs" sx={{ flexDirection: "row" }}>
        {bestBoArticles?.map((article: BoArticle, index: any) => {
          const art_image_url = article?.art_image
            ? `${serverApi}/${article?.art_image}`
            : "/homepage/diet-food.jpg";
          return (
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
                    position: "absolute",
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <span className="brand_namebest" style={{ color: "#121212" }}>
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
                    marginTop: "225px",
                    borderRadius: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box className="blog_subject_home">{article?.bo_id}</Box>
                </Box>
              </Box>
              <Box className="blog_subject_info">
                <Box className="blog_subject_text">{article?.art_subject}</Box>
                <Box className="blog_by">
                  <Box>
                    <span>
                      <img src="/icons/user1.png" alt="blog_by" />
                    </span>
                    <span className="blog_by_css">
                      {article?.member_data?.mb_nick}
                    </span>
                  </Box>
                  <Box>
                    <span>
                      <img src="/icons/chat1.png" alt="blog_by" />
                    </span>
                    <span className="blog_by_css">32 Comments</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
