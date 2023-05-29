import React from "react";
import {
  Box,
  Container,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
} from "@mui/material";
import PaginationAllProducts from "../ShopPage/paginationAllProduct";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { TuiEditor } from "../../components/TUIEditor/TuiEditor";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Marginer from "../../components/marginer";
import "../../../css/blog.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TViewer from "../../components/TUIEditor/TuiViewer";
import { ReviewsComponent } from "../ShopPage/reviews";
import { ChosenReviews } from "./chosenReviews";
import BlogPage from "../HomePage/BlogPage";

const chosen_blog_list = Array.from(Array(3).keys());
export default function ChosenBlog() {
  return (
    <div>
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
            <Box className="blog_page">BLOG SINGLE</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>Our Blog</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack className="chosen_blog_left" sx={{ marginTop: "100px" }}>
          <Box className="chosen_blog_box">
            <Box
              className="chosen_blog_img"
              sx={{
                backgroundImage: "url(/admin_photo/girl-milk.jpg)",
                zIndex: "3",
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
                  width: "180px",
                  height: "30px",
                  background: "#86bc42",
                  zIndex: "5",
                  position: "absolute",
                  marginLeft: "20px",
                  marginTop: "485px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="blog_subject_home">BAKERY</Box>
              </Box>
            </Box>
            <Box className="chosen_subject_info">
              <Box className="chosen_subject_text">
                How To Make A Fresh Juice Blended For Your Family?
              </Box>
              <Box className="chosen_retingbest">
                <Rating size="small" name="read-only" value={4} readOnly />
              </Box>
              <Box className="blog_by">
                <Box>
                  <span>
                    <img src="/icons/user1.png" alt="blog_by" />
                  </span>
                  <span className="blog_by_css">By Admin</span>
                </Box>
                <Box>
                  <span>
                    <img src="/icons/chat1.png" alt="blog_by" />
                  </span>
                  <span className="blog_by_css">32 Comments</span>
                </Box>
              </Box>
              <Box className="chosen_blog_text1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                eros pede semper est, vitae luctus metus libero eu augue. Morbi
                purus libero, faucibus adipiscing, commodo quis, gravida id,
                est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis,
                mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                urna.
              </Box>
            </Box>
          </Box>
          <Marginer
            direction="horizontal"
            height="1"
            width="2"
            bg="#EAEAEA"
            opsty="1"
          />
        </Stack>

        <Stack className="chosen_blog_right">
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "60px",
              marginTop: "30px",
            }}
          >
            <Stack
              className="shop_pro"
              style={{ width: "300px", height: "570px" }}
            >
              <Box className="blog_categ">BLOG CATEGORIES</Box>

              <Box className="blog_categor1">
                <span className="blog_categor">Fruits</span>
                <span>(34)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Meats</span>
                <span>(34)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Vegetables</span>
                <span>(45)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Drinks</span>
                <span>(56)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Bakery</span>
                <span>(67)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Freshen</span>
                <span>(78)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Latest news</span>
                <span>(58)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Best blogs</span>
                <span>(89)</span>
              </Box>
              <Box className="blog_categor1">
                <span className="blog_categor">Others</span>
                <span>(63)</span>
              </Box>
            </Stack>
          </Stack>
          <Box sx={{ marginTop: "50px" }}></Box>
          <Marginer
            direction="horizontal"
            height="1"
            width="2"
            bg="#EAEAEA"
            opsty="1"
          />
        </Stack>
      </Container>
      <Container>
        <Stack>
          <Box sx={{ display: "flex", gap: "110px", marginTop: "10px" }}>
            <Box>
              <ChosenReviews />
            </Box>
            <Box>
              <Box className="write_review_section">
                <Box className="write_review_box">
                  <Box className="count_of_review"> Add a review </Box>

                  <Box className="rating_select">
                    Your Rating{" "}
                    <Rating size="small" name="controlled" value={4} readOnly />
                  </Box>
                  <Box className="rating_select"> Your Review</Box>
                  <Box className="write_review_box">
                    <textarea
                      name="comment_content"
                      className="comment_content"
                      value={""}
                    ></textarea>
                  </Box>
                  <Box className="review_submit_btn">SUBMIT</Box>
                </Box>

                <Box className="wrire_review_box"></Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Container>
        <BlogPage />
      </Container>
    </div>
  );
}
