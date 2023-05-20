import React from "react";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaginationAllProducts from "../ShopPage/paginationAllProduct";

const blogs_list = Array.from(Array(6).keys());
export default function AccauntArticle() {
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
          {blogs_list.map((ele, index) => {
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
                    <span
                      className="brand_namebest"
                      style={{ color: "#121212" }}
                    >
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
          <PaginationAllProducts />
        </Box>
      </Box>
    </Box>
  );
}
