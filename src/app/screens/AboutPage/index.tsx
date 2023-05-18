import { Box, Container, Stack } from "@mui/material";
import React from "react";
import "../../../css/about.css";

const blog_best_list = Array.from(Array(3).keys());
export function AboutPage() {
  return (
    <div style={{ background: "#ffffff" }}>
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
            <Box className="blog_page">About us</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>About Us</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container>
        <Stack
          sx={{
            width: "100%",
            height: "680px",
            display: "flex",
            flexDirection: "row",
            marginTop: "50px",
          }}
        >
          <Stack className="about_page_left">
            <Box className="about_page_l1"></Box>
            <Box className="about_page_l2"></Box>
          </Stack>
          <Box className="about_page_right">
            <Box className="about_page_r1">
              Save more with Freshen ! We give you the lowest prices on all your
              grocery needs.
            </Box>
            <Box
              className="about_page_r2"
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="about_page_r21">Our Vision</span>
              <span className="about_page_r22">
                Essentially, the good stuff is right here. We source the best
                suppliers and makers of natural and organic products that you
                won’t find on the high street. If you care about how things get
                made and what’s in them, we bring you products created with
                care.{" "}
              </span>
            </Box>
            <Box
              className="about_page_r3"
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="about_page_r21">Our Goal</span>
              <span className="about_page_r22">
                Essentially, the good stuff is right here. We source the best
                suppliers and makers of natural and organic products that you
                won’t find on the high street. If you care about how things get
                made and what’s in them, we bring you products created with
                care.{" "}
              </span>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Container>
        <Box className="home_top">Why choose FRESHEN</Box>
        <Stack
          sx={{
            height: "212px",
            marginTop: "80px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            gap: "40px",
          }}
        >
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon1">
              <img src="./icons/love.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Eat More Healthfully.
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon2">
              <img src="./icons/lemon.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                We Have Reputation
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon3">
              <img src="./icons/carrot.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Fresh & Pesticide Free
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            height: "212px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            gap: "40px",
          }}
        >
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon4">
              <img src="./icons/broccoli.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                No Commitment Required
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon5">
              <img src="./icons/salad.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Flexibility
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
          <Box
            className="home_why_choose"
            style={{
              width: "410px",
              height: "85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box className="about_choose_icon6">
              <img src="./icons/apple.png" alt="why_choose" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "start",
              }}
            >
              <Box className="why_choose_tex" sx={{ textAlign: "start" }}>
                Customization
              </Box>
              <Box className="why_choose_text" sx={{ textAlign: "start" }}>
                Sed semper convallis ultricies. Aliqua erat vol esent friday.
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
      <div className="why_love_us">
        <Container
          style={{ display: "flex", flexDirection: "column", gap: "40px" }}
        >
          <div className="why_love">People blog about us</div>
          <div className="why_love_blog">
            <Stack className="blogs" sx={{ flexDirection: "row" }}>
              {blog_best_list.map((ele, index) => {
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
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </div>
        </Container>
      </div>

      <Container
        sx={{
          height: "230px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <img src="/homepage/image22.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 26.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 24.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 23.png" alt="adver" />
        </Box>
        <Box>
          <img src="/homepage/image 25.png" alt="adver" />
        </Box>
      </Container>
    </div>
  );
}
