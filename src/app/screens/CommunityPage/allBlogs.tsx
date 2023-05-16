import React from "react";
import { Box, Container, Stack } from "@mui/material";
import PaginationAllProducts from "../ShopPage/paginationAllProduct";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { TuiEditor } from "../../components/TUIEditor/TuiEditor";

const blogs_list = Array.from(Array(9).keys());
export default function AllBlogs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Stack className="nav_map">Home / Community</Stack>
      <Stack className="all_blogs">
        <TabContext value={value}>
          <Box className="blog_header"> Blogs</Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "56px" }}>
            <TabList orientation="vertical" onChange={handleChange}>
              <Box className="blog_category_box">
                <input
                  className="search_blogs"
                  type="text"
                  placeholder="Search"
                />

                <Box className="blog_category">
                  <Box className="blog_category_head">Categories</Box>
                  <Box className="blog_categoties">
                    <Tab label="Furnitures" value={"1"} />
                  </Box>
                  <Box className="blog_categoties">
                    <Tab label="Interiors" value={"2"} />
                  </Box>
                  <Box className="blog_categoties">
                    <Tab label="Technology" value={"3"} />
                  </Box>
                  <Box className="blog_categoties">
                    <Tab label="Organic" value={"4"} />
                  </Box>
                  <Box className="blog_categoties">
                    <Tab label="Uncategorized" value={"5"} />
                  </Box>
                  <Box className="blog_categoties">
                    <Tab label="Watches" value={"6"} />
                  </Box>
                </Box>
              </Box>

              <Box className="write_blog_btn">
                <Tab label=" Create Post" value={"7"} />
              </Box>
            </TabList>

            <TabPanel value="1">
              <Stack
                className="blogs_page"
                sx={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                {blogs_list.map((ele, index) => {
                  return (
                    <Box className="blog_page_box">
                      <Box
                        className="blog_page_img"
                        sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
                      ></Box>
                      <Box className="blog_page_type">Furnitures & Tricks</Box>
                      <Box className="blog_page_subject">
                        Collar brings back coffee brewing ritual
                      </Box>
                      <Box className="blog_page_date">April 06, 2022</Box>
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
            <TabPanel value="2">
              <Stack
                className="blogs_page"
                sx={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                {blogs_list.map((ele, index) => {
                  return (
                    <Box className="blog_page_box">
                      <Box
                        className="blog_page_img"
                        sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
                      ></Box>
                      <Box className="blog_page_type">Interiors & Tricks</Box>
                      <Box className="blog_page_subject">
                        Collar brings back coffee brewing ritual
                      </Box>
                      <Box className="blog_page_date">April 06, 2022</Box>
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
            <TabPanel value="3">
              <Stack
                className="blogs_page"
                sx={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                {blogs_list.map((ele, index) => {
                  return (
                    <Box className="blog_page_box">
                      <Box
                        className="blog_page_img"
                        sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
                      ></Box>
                      <Box className="blog_page_type">Technology & Tricks</Box>
                      <Box className="blog_page_subject">
                        Collar brings back coffee brewing ritual
                      </Box>
                      <Box className="blog_page_date">April 06, 2022</Box>
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
            <TabPanel value="4">
              <Stack
                className="blogs_page"
                sx={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                {blogs_list.map((ele, index) => {
                  return (
                    <Box className="blog_page_box">
                      <Box
                        className="blog_page_img"
                        sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
                      ></Box>
                      <Box className="blog_page_type">Organic & Tricks</Box>
                      <Box className="blog_page_subject">
                        Collar brings back coffee brewing ritual
                      </Box>
                      <Box className="blog_page_date">April 06, 2022</Box>
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
            <TabPanel value="5">
              <Stack
                className="blogs_page"
                sx={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                {blogs_list.map((ele, index) => {
                  return (
                    <Box className="blog_page_box">
                      <Box
                        className="blog_page_img"
                        sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
                      ></Box>
                      <Box className="blog_page_type">
                        Uncategorized & Tricks
                      </Box>
                      <Box className="blog_page_subject">
                        Collar brings back coffee brewing ritual
                      </Box>
                      <Box className="blog_page_date">April 06, 2022</Box>
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
            <TabPanel value="6">
              <Stack
                className="blogs_page"
                sx={{ flexDirection: "row", flexWrap: "wrap" }}
              >
                {blogs_list.map((ele, index) => {
                  return (
                    <Box className="blog_page_box">
                      <Box
                        className="blog_page_img"
                        sx={{ backgroundImage: "url(/homepage/blog.jpg)" }}
                      ></Box>
                      <Box className="blog_page_type">Watches & Tricks</Box>
                      <Box className="blog_page_subject">
                        Collar brings back coffee brewing ritual
                      </Box>
                      <Box className="blog_page_date">April 06, 2022</Box>
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
      </Stack>
    </Container>
  );
}
