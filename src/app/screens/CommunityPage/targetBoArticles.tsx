import React, { useRef } from "react";
import { Box, Link, Rating, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import PaginationAllProducts from "../ShopPage/paginationAllProduct";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";
import { Review } from "../../../types/follow";

export function TargetArticles(props: any) {
  const { setArticlesRebuild } = props;
  const refs: any = useRef([]);
  /** HANDLERS */
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
    <Stack
      style={{
        width: "100%",

        position: "relative",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/homepage/diet-food.jpg";
        return (
          <Link
            href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
          >
            <Stack
              className="blog_box"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "500px",
                width: "440px",
                marginTop: "40px",
                // border: "1px solid #eaeaea",
              }}
            >
              <Box
                className="blog_img"
                sx={{
                  backgroundImage: `url(${art_image_url})`,
                  zIndex: "3",
                  width: "438px",
                  height: "290px",
                }}
              >
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
                    {moment().format("DD")}
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
                    marginTop: "280px",
                    borderRadius: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box className="blog_subject_home">{article?.bo_id}</Box>
                </Box>
                <Box
                  className="blog_subject_blog1"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Checkbox
                    icon={<img src="/icons/heart_green.png" alt="" />}
                    id={article._id}
                    checkedIcon={<img src="/icons/heart_red.png" alt="" />}
                    onClick={targetLikeHandler}
                    /*@ts-ignore*/
                    checked={
                      article?.me_liked && article?.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
                  />
                </Box>
              </Box>
              <Box className="all_blog_subject_info">
                <Box className="all_blog_subject_text">
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
                {/* <Box className="chosen_retingbest">
                  <Rating size="small" name="read-only" readOnly />
                </Box> */}

                <Box className="blog_text_conti">CONTINUE READING</Box>
              </Box>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
}
