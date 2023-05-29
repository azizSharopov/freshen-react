import React from "react";
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

export function TargetArticles(props: any) {
  const { setArticlesRebuild } = props;
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
          : "/admin_photo/girl_milk.jpg";
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
                  height: "300px",
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
                    MAY
                  </span>
                  <span className="home_blog_date">24</span>
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "30px",
                    background: "#86bc42",
                    zIndex: "5",
                    position: "absolute",
                    marginLeft: "20px",
                    marginTop: "275px",
                    borderRadius: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box className="blog_subject_home">{article?.bo_id}</Box>
                </Box>
              </Box>
              <Stack className="all_blog_subject_info">
                <Box className="all_blog_subject_text">
                  {article?.art_subject}
                </Box>
                <Stack
                  className="all_blog_by"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <Box>
                    <img src="/icons/user1.png" alt="all_blog_by" />
                  </Box>
                  <Box className="all_by_css">
                    {" "}
                    {article?.member_data.mb_nick}
                  </Box>

                  <Box sx={{ marginLeft: "30px", marginTop: "5px" }}>
                    <img src="/icons/chat1.png" alt="all_blog_by" />
                  </Box>
                  <Box className="all_by_css">32 Comments</Box>
                </Stack>
                <Box className="chosen_retingbest">
                  <Rating size="small" name="read-only" value={4} readOnly />
                </Box>

                <Box className="blog_text_conti">CONTINUE READING</Box>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
}
