import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import Favorite from "@mui/icons-material/Favorite";

import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import moment from "moment";
import { SearchMemberArticlesObj } from "../../../types/boArticle";
import { Review } from "../../../types/follow";

export default function AccauntArticle(props: any) {
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({ mb_id: "none", page: 1, limit: 10 });
  const refs: any = useRef([]);
  const { chosenMemberBoArticles } = props;

  /** HANDLERS */

  const handlePaginationChange = (event: any, value: number) => {
    props.memberArticleSearchObj.page = value;
    props.setMemberArticleSearchObj({ ...props.memberArticleSearchObj });
  };

  return (
    <Box>
      <Box
        className="dash_head_text"
        sx={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span>Articles</span>
        {/* <Button
          variant="contained"
          style={{
            width: "200px",
            height: "40px",
            background: "#86BC42",
            borderRadius: "4px",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "13px",
            lineHeight: "16px",
            color: "#FFFFFF",
            position: "relative",
          }}
          // onClick={() => setValue(!value)}
        >
          Create Post
        </Button> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "930px",
        }}
      >
        <Stack
          className="blogs"
          sx={{ flexDirection: "row", flexWrap: "wrap" }}
        >
          {chosenMemberBoArticles.map((article: BoArticle) => {
            const image_path = article.art_image
              ? `${serverApi}/${article.art_image}`
              : "/homepage/diet-food.jpg";
            return (
              <Box
                className="blog_box"
                sx={{ cursor: "pointer" }}
                // onClick={() => renderChosenArticleHandler(article?._id)}
              >
                <Box
                  className="blog_img"
                  sx={{
                    backgroundImage: `url(${image_path})`,
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
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box className="blog_subject_home">{article?.bo_id}</Box>
                  </Box>
                </Box>
                <Box className="blog_subject_info">
                  <Box className="blog_subject_text">
                    {article?.art_subject}
                  </Box>
                  <Box className="all_blog_by">
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
                        ref={(element) => (refs.current[article._id] = element)}
                      >
                        {article.art_likes}
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "20px",
            width: "100%",
            mt: "90px",
          }}
        >
          <Pagination
            count={
              props.memberArticleSearchObj.page >= 3
                ? props.memberArticleSearchObj.page + 1
                : 3
            }
            page={props.memberArticleSearchObj.page}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color="secondary"
              />
            )}
            onChange={handlePaginationChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
