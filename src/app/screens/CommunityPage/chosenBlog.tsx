import React from "react";
import { Box, Container, Stack } from "@mui/material";
import "../../../css/shop.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TViewer from "../../components/TUIEditor/TuiViewer";
import { ReviewsComponent } from "../ShopPage/reviews";
const restaurant_list = Array.from(Array(3).keys());
export default function ChosenBlogs() {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Stack className="blog_short_info">
        <Box className="chosen_blog_category">Tips & Tricks</Box>
        <Box className="chosen_blog_subject">
          Virtual Reality: another world within sight
        </Box>
        <Box className="chosen_blog_category">April 06, 2022</Box>
      </Stack>
      <TViewer />

      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Box className="category_text">Related Articles</Box>
      </Stack>
      <Stack className="blogs" sx={{ flexDirection: "row" }}>
        {restaurant_list.map((ele, index) => {
          return (
            <Box className="blog_box">
              <Box
                className="blog_img"
                sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
              >
                {/* <img src="/homepage/blog.jpg" alt="blog" /> */}
              </Box>
              <Box className="blog_type">Tips & Tricks</Box>
              <Box className="blog_subject">
                Collar brings back coffee brewing ritual
              </Box>
              <Box className="blog_date">April 06, 2022</Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
