import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaginationAllProducts from "../ShopPage/paginationAllProduct";
import { verifiedMemberData } from "../../apiServices/verify";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import React, { ChangeEvent, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import MemberApiService from "../../apiServices/memberApiService";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import moment from "moment";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { SearchMemberArticlesObj } from "../../../types/boArticle";

export default function AccauntArticle(props: any) {
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({ mb_id: "none", page: 1, limit: 10 });

  const {
    chosenMemberBoArticles,
    renderChosenArticleHandler,
    setArticlesRebuild,
  } = props;

  /** HANDLERS */
  const targetLikeHandler = async (e: any) => {
    try {
      e.stopPropagation();
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const handlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
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
        <Button
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
        </Button>
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
                  <Box className="blog_by">
                    <Box>
                      <span>
                        <img src="/icons/user1.png" alt="blog_by" />
                      </span>
                      <span className="blog_by_css">
                        {" "}
                        {article?.member_data?.mb_nick}
                      </span>
                    </Box>
                    <Box>
                      <span>
                        <img src="/icons/chat1.png" alt="blog_by" />
                      </span>
                      <span className="blog_by_css">32 Comments</span>
                      <span>
                        {" "}
                        <Button
                          sx={{
                            background: "#ff2c2c",
                            borderRadius: "40px",
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "13px",
                            lineHeight: "16px",
                            color: "#FFFFFF",

                            width: "130px",
                            height: "20px",
                            marginLeft: "20px",
                            textTransform: "none",
                            "&:hover": {
                              color: "#121212",
                              border: "1px solid #eaeaea",
                              background: "#d53f20",
                            },
                          }}
                        >
                          DELETE
                        </Button>
                      </span>
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
              memberArticleSearchObj.page >= 3
                ? memberArticleSearchObj.page + 1
                : 3
            }
            page={memberArticleSearchObj.page}
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
