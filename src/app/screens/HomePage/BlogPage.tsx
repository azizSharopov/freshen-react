import React from "react";
import { Box, Container, Stack } from "@mui/material";
// import PaginationAllProducts from "../ShopPage/paginationAllProduct";

const restaurant_list = Array.from(Array(3).keys());
export default function BlogPage() {
  return (
    <Container style={{ marginTop: "110px" }}>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Box className="category_text">Top Selling Products</Box>
        <Box className="top_product_link">View All</Box>
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
