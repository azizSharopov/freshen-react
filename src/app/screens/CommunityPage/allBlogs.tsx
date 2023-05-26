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

const blogs_list = Array.from(Array(6).keys());
export default function AllBlogs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const top100Films = [
    { title: "Fruit" },
    { title: "Meats" },
    { title: "Vegetables" },
    { title: "Drinks" },
    { title: "Bakery" },
  ];
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
            <Box className="blog_page">Latest News</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>Our Blog</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container>
        <Stack
          sx={{
            width: "100%",
            height: "auto",
            marginTop: "30px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TabContext value={value}>
              <Box className="blog_right">
                <Stack spacing={2} sx={{ width: "270px" }}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                </Stack>
                <Box>
                  <TabList orientation="vertical" onChange={handleChange}>
                    <Box className="blog_category_box">
                      <Box
                        className="blog_category"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box className="blog_categ">Blog Categories</Box>
                        <Box className="blog_categor">
                          <Tab label="Fruits" value={"1"} />
                        </Box>
                        <Box className="blog_categor">
                          <Tab label="Meats" value={"2"} />
                        </Box>
                        <Box className="blog_categor">
                          <Tab label="Vegetables" value={"3"} />
                        </Box>
                        <Box className="blog_categor">
                          <Tab label="Freshen" value={"4"} />
                        </Box>
                        <Box className="blog_categor">
                          <Tab label="Latest news" value={"5"} />
                        </Box>
                        <Box className="blog_categor">
                          <Tab label="Best blogs" value={"6"} />
                        </Box>
                        <Box className="blog_categor">
                          <Tab label="Others" value={"7"} />
                        </Box>
                      </Box>

                      <Box className="write_blog_btn">
                        <Tab
                          sx={{ fontWeight: "700", color: "#ffffff" }}
                          label="Create Post"
                          value={"8"}
                        />
                      </Box>
                    </Box>
                  </TabList>
                </Box>
              </Box>
              <Box className="blog_left">
                <Box>
                  <TabPanel value="1">
                    <Stack
                      className="blogs"
                      sx={{ flexDirection: "row", flexWrap: "wrap" }}
                    >
                      {blogs_list.map((ele, index) => {
                        return (
                          <Box
                            className="blog_box"
                            sx={{
                              height: "500px",
                              width: "440px",
                              marginTop: "40px",
                            }}
                          >
                            <Box
                              className="blog_img"
                              sx={{
                                backgroundImage:
                                  "url(/admin_photo/girl-milk.jpg)",
                                zIndex: "3",
                                width: "440px",
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
                                  marginTop: "285px",
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
                                How To Make A Fresh Juice Blended For Your
                                Family?
                              </Box>
                              <Box className="chosen_retingbest">
                                <Rating
                                  size="small"
                                  name="read-only"
                                  value={4}
                                  readOnly
                                />
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
                                  <span className="blog_by_css">
                                    32 Comments
                                  </span>
                                </Box>
                              </Box>
                              <Box className="blog_text_small">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat…
                              </Box>
                              <Box className="blog_text_conti">
                                CONTINUE READING
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
                  </TabPanel>
                </Box>
                <TabPanel value="2">
                  <Stack
                    className="blogs"
                    sx={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {blogs_list.map((ele, index) => {
                      return (
                        <Box
                          className="blog_box"
                          sx={{
                            height: "500px",
                            width: "440px",
                            marginTop: "40px",
                          }}
                        >
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
                              zIndex: "3",
                              width: "440px",
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
                                marginTop: "285px",
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
                            <Box className="chosen_retingbest">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
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
                            <Box className="blog_text_small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat…
                            </Box>
                            <Box className="blog_text_conti">
                              CONTINUE READING
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
                </TabPanel>
                <TabPanel value="3">
                  <Stack
                    className="blogs"
                    sx={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {blogs_list.map((ele, index) => {
                      return (
                        <Box
                          className="blog_box"
                          sx={{
                            height: "500px",
                            width: "440px",
                            marginTop: "40px",
                          }}
                        >
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
                              zIndex: "3",
                              width: "440px",
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
                                marginTop: "285px",
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
                            <Box className="chosen_retingbest">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
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
                            <Box className="blog_text_small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat…
                            </Box>
                            <Box className="blog_text_conti">
                              CONTINUE READING
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
                </TabPanel>
                <TabPanel value="4">
                  <Stack
                    className="blogs"
                    sx={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {blogs_list.map((ele, index) => {
                      return (
                        <Box
                          className="blog_box"
                          sx={{
                            height: "500px",
                            width: "440px",
                            marginTop: "40px",
                          }}
                        >
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
                              zIndex: "3",
                              width: "440px",
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
                                marginTop: "285px",
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
                            <Box className="chosen_retingbest">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
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
                            <Box className="blog_text_small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat…
                            </Box>
                            <Box className="blog_text_conti">
                              CONTINUE READING
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
                </TabPanel>
                <TabPanel value="5">
                  <Stack
                    className="blogs"
                    sx={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {blogs_list.map((ele, index) => {
                      return (
                        <Box
                          className="blog_box"
                          sx={{
                            height: "500px",
                            width: "440px",
                            marginTop: "40px",
                          }}
                        >
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
                              zIndex: "3",
                              width: "440px",
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
                                marginTop: "285px",
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
                            <Box className="chosen_retingbest">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
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
                            <Box className="blog_text_small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat…
                            </Box>
                            <Box className="blog_text_conti">
                              CONTINUE READING
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
                </TabPanel>
                <TabPanel value="6">
                  <Stack
                    className="blogs"
                    sx={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {blogs_list.map((ele, index) => {
                      return (
                        <Box
                          className="blog_box"
                          sx={{
                            height: "500px",
                            width: "440px",
                            marginTop: "40px",
                          }}
                        >
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
                              zIndex: "3",
                              width: "440px",
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
                                marginTop: "285px",
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
                            <Box className="chosen_retingbest">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
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
                            <Box className="blog_text_small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat…
                            </Box>
                            <Box className="blog_text_conti">
                              CONTINUE READING
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
                </TabPanel>
                <TabPanel value="7">
                  <Stack
                    className="blogs"
                    sx={{ flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {blogs_list.map((ele, index) => {
                      return (
                        <Box
                          className="blog_box"
                          sx={{
                            height: "500px",
                            width: "440px",
                            marginTop: "40px",
                          }}
                        >
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
                              zIndex: "3",
                              width: "440px",
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
                                marginTop: "285px",
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
                            <Box className="chosen_retingbest">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
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
                            <Box className="blog_text_small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat…
                            </Box>
                            <Box className="blog_text_conti">
                              CONTINUE READING
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
                </TabPanel>
                <TabPanel value="8">
                  <TuiEditor />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
