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
                sx={{
                  backgroundImage: "url(/homepage/woman.jpg)",
                  zIndex: "3",
                }}
              >
                {/* <img src="/homepage/blog.jpg" alt="blog" /> */}
                <Box
                  sx={{
                    width: "65px",
                    height: "77px",
                    background: "#86bc42",
                    zIndex: "5",
                    position: "absolute",
                    marginLeft: "20px",
                  }}
                ></Box>
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
                  }}
                ></Box>
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
