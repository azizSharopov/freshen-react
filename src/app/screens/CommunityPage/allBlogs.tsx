import React from "react";
import { Box, Container, Stack } from "@mui/material";
import PaginationAllProducts from "../ShopPage/paginationAllProduct";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { TuiEditor } from "../../components/TUIEditor/TuiEditor";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Marginer from "../../components/marginer";

const blogs_list = Array.from(Array(9).keys());
export default function AllBlogs() {
  const [value, setValue] = React.useState("2");
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const top100Films = [
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
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
            marginTop: "50px",
          }}
        >
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TabContext value={value}>
              <Box className="blog_right">
                <Box>
                  <TabList orientation="vertical" onChange={handleChange}>
                    <Box className="blog_category_box">
                      <Box className="blog_category">
                        <Box className="blog_categ">Blog Categories</Box>
                        <Box className="blog_categ_text">
                          <Tab
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "35px",
                              color: "#121212",
                            }}
                            label="Fruit"
                            value={"1"}
                          />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "35px",
                              color: "#121212",
                            }}
                            label="Vegetables"
                            value={"2"}
                          />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "35px",
                              color: "#121212",
                            }}
                            label="Drinks"
                            value={"3"}
                          />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Bakery" value={"4"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Butter & Egges" value={"5"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Milks & Creams" value={"6"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Meats" value={"7"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Fishs" value={"8"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Milks & Creams" value={"9"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Cofee & Tea" value={"10"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Cookies" value={"11"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Chocolates" value={"12"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Lates news" value={"13"} />
                        </Box>
                        <Box className="blog_categ_text">
                          <Tab label="Best blogs" value={"14"} />
                        </Box>
                      </Box>

                      <Box className="write_blog_btn">
                        <Tab label=" Create Post" value={"15"} />
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
                      sx={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      {blogs_list.map((ele, index) => {
                        return (
                          <Box className="com_blog_box">
                            <Box
                              className="com_blog_img"
                              sx={{
                                backgroundImage:
                                  "url(/admin_photo/girl-milk.jpg)",
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
                                How To Make A Fresh Juice Blended For Your
                                Family?
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
                        mt: "30px",
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
                        <Box className="blog_box">
                          <Box
                            className="blog_img"
                            sx={{
                              backgroundImage:
                                "url(/admin_photo/girl-milk.jpg)",
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: "20px",
                      width: "100%",
                      mt: "30px",
                    }}
                  >
                    <PaginationAllProducts />
                  </Box>
                </TabPanel>

                <TabPanel value="7">
                  <TuiEditor />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
          {/* <TabList orientation="vertical" onChange={handleChange}>
            <Stack spacing={2} sx={{ width: 270 }}>
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
            <Box className="blog_category">
              <Box className="blog_categ">Blog Categories</Box>
              <Box className="blog_categ_text">
                <Tab label="Fruit" value={"1"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Vegetables" value={"2"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Drinks" value={"3"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Bakery" value={"4"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Butter & Egges" value={"5"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Milks & Creams" value={"6"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Meats" value={"7"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Fishs" value={"8"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Milks & Creams" value={"9"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Cofee & Tea" value={"10"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Cookies" value={"11"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Chocolates" value={"12"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Lates news" value={"13"} />
              </Box>
              <Box className="blog_categ_text">
                <Tab label="Best blogs" value={"14"} />
              </Box>
            </Box>

            <Box className="write_blog_btn">
              <Tab label=" Create Post" value={"15"} />
            </Box>
          </TabList> */}

          {/* <Stack className="blogs" sx={{ flexDirection: "row" }}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "20px",
                  width: "100%",
                  mt: "30px",
                }}
              >
                <PaginationAllProducts />
              </Box>
            </TabPanel>
          </Stack> */}

          {/* <TabPanel value="7">
            <TuiEditor />
          </TabPanel> */}
        </Stack>
      </Container>
    </div>
  );
}
