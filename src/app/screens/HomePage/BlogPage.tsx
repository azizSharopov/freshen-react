import React from "react";
import { Box, Container, Stack } from "@mui/material";
// import PaginationAllProducts from "../ShopPage/paginationAllProduct";

const restaurant_list = Array.from(Array(3).keys());
export default function BlogPage() {
  return (
    <Container>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Box className="home_top">Our Blog</Box>
        <Box
          sx={{ marginTop: "111px", width: "100px" }}
          className="top_product_link"
        >
          View All
        </Box>
      </Stack>
      <Stack className="blogs" sx={{ flexDirection: "row" }}>
        {restaurant_list.map((ele, index) => {
          return (
            <Box className="blog_box">
              <Box
                className="blog_img"
                sx={{
                  backgroundImage: "url(/admin_photo/girl-milk.jpg)",
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
                    marginTop: "225px",
                    borderRadius: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box className="blog_subject_home">BAKERY</Box>
                </Box>
              </Box>
              <Box className="blog_subject_info">
                <Box className="blog_subject_text">
                  How To Make A Fresh Juice Blended For Your Family?
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
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
