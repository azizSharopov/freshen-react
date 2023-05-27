import React, { useEffect, useState } from "react";
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
import { BoArticle, SearchArticlesObj } from "../../../types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { TargetArticles } from "./targetBoArticles";
import { verifiedMemberData } from "../../apiServices/verify";

// REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetBoArticles } from "./slice";
import { retrieveTargetBoArticles } from "./selector";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTargetBoArticles: (data: BoArticle[]) =>
    dispach(setTargetBoArticles(data)),
});

/** REDUX SELECTOR */
const targetBoArticlesRetriever = createSelector(
  retrieveTargetBoArticles,
  (targetBoArticles) => ({
    targetBoArticles,
  })
);

export default function AllBlogs() {
  /** INITIALIZATIONS **/
  const { setTargetBoArticles } = actionDispatch(useDispatch());
  const { targetBoArticles } = useSelector(targetBoArticlesRetriever);

  const [value, setValue] = React.useState("6");
  const [searchArticlesObj, setSearchArticlesObj] = useState<SearchArticlesObj>(
    {
      bo_id: "all",
      page: 1,
      limit: 6,
      order: "createdAt",
    }
  );
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles(searchArticlesObj)
      .then((data) => setTargetBoArticles(data))
      .catch((err) => console.log(err));
  }, [searchArticlesObj, articlesRebuild]);

  // const top100Films = [
  //   { title: "Fruit" },
  //   { title: "Meats" },
  //   { title: "Vegetables" },
  //   { title: "FRESHEN" },
  //   { title: "OTHERS" },
  // ];

  /** HANDLES **/
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    searchArticlesObj.page = 1;
    switch (newValue) {
      case "1":
        searchArticlesObj.bo_id = "FRUITS";
        break;
      case "2":
        searchArticlesObj.bo_id = "MEATS";
        break;
      case "3":
        searchArticlesObj.bo_id = "VEGETABLES";
        break;
      case "4":
        searchArticlesObj.bo_id = "FRESHEN";
        break;
      case "5":
        searchArticlesObj.bo_id = "OTHERS";
        break;
      case "6":
        searchArticlesObj.bo_id = "all";
        break;
    }
    setSearchArticlesObj({ ...searchArticlesObj });
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    searchArticlesObj.page = value;
    setSearchArticlesObj({ ...searchArticlesObj });
  };

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
            <Box className="blog_page">OUR BLOG</Box>
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
                {/* <Stack spacing={2} sx={{ width: "270px" }}>
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
                </Stack> */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  <Box className="blog_categ">Blog Categories</Box>

                  <TabList
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    variant="scrollable"
                    style={{
                      width: "260px",
                    }}
                  >
                    <Tab
                      label="Fruits"
                      value={"1"}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        color: "#121212",
                        marginRight: "100px",
                        "&.Mui-selected": {
                          color: "#000000;",
                          backgroundColor: "#86bc42",
                          borderRadius: "5px",
                          border: "none !important",
                          boxShadow: "none",
                          outline: "none",
                        },
                        textTransform: "none",
                      }}
                    />
                    <Tab
                      label="Meats"
                      value={"2"}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        color: "#121212",
                        marginRight: "100px",
                        "&.Mui-selected": {
                          color: "#000000;",
                          backgroundColor: "#86bc42",
                          borderRadius: "5px",
                          border: "none !important",
                          boxShadow: "none",
                          outline: "none",
                        },
                        textTransform: "none",
                      }}
                    />
                    <Tab
                      label="Vegetables"
                      value={"3"}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        color: "#121212",
                        marginRight: "100px",
                        "&.Mui-selected": {
                          color: "#000000;",
                          backgroundColor: "#86bc42",
                          borderRadius: "5px",
                          border: "none !important",
                          boxShadow: "none",
                          outline: "none",
                        },
                        textTransform: "none",
                      }}
                    />
                    <Tab
                      label="Freshen"
                      value={"4"}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        color: "#121212",
                        marginRight: "100px",
                        "&.Mui-selected": {
                          color: "#000000;",
                          backgroundColor: "#86bc42",
                          borderRadius: "5px",
                          border: "none !important",
                          boxShadow: "none",
                          outline: "none",
                        },
                        textTransform: "none",
                      }}
                    />
                    <Tab
                      label="Others"
                      value={"5"}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        color: "#121212",
                        marginRight: "100px",
                        "&.Mui-selected": {
                          color: "#000000;",
                          backgroundColor: "#86bc42",
                          borderRadius: "5px",
                          border: "none !important",
                          boxShadow: "none",
                          outline: "none",
                        },
                        textTransform: "none",
                      }}
                    />

                    <Tab
                      label="All"
                      value={"6"}
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        color: "#121212",
                        marginRight: "100px",
                        "&.Mui-selected": {
                          color: "#000000;",
                          backgroundColor: "#86bc42",
                          borderRadius: "5px",
                          border: "none !important",
                          boxShadow: "none",
                          outline: "none",
                        },
                        textTransform: "none",
                      }}
                    />
                    {verifiedMemberData ? (
                      <Box className="write_blog_btn">
                        <Tab
                          label="Create Post"
                          value={"7"}
                          onClick={() => setValue("7")}
                          sx={{
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: "600",
                            lineHeight: "26px",
                            color: "#121212",
                            "&.Mui-selected": {
                              color: "#000000;",
                              backgroundColor: "#86bc42",
                              borderRadius: "5px",
                              border: "none !important",
                              boxShadow: "none",
                              outline: "none",
                            },
                            textTransform: "none",
                          }}
                        />
                      </Box>
                    ) : null}
                  </TabList>
                </Box>
              </Box>
              <Box className="blog_left">
                <TabPanel value="1">
                  <TargetArticles
                    targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>

                <TabPanel value="2">
                  <TargetArticles
                    targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>
                <TabPanel value="3">
                  <TargetArticles
                    targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>
                <TabPanel value="4">
                  <TargetArticles
                    targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>
                <TabPanel value="5">
                  <TargetArticles
                    targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>

                <TabPanel value="6">
                  <TargetArticles
                    targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>

                <TabPanel value="7">
                  <TuiEditor
                    setValue={setValue}
                    setArticlesRebuild={setArticlesRebuild}
                  />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
          {value !== "7" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <Pagination
                count={
                  searchArticlesObj.page >= 3 ? searchArticlesObj.page + 1 : 3
                }
                page={searchArticlesObj.page}
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                    color="secondary"
                  />
                )}
                onChange={handlePaginationChange}
              />
            </Box>
          )}
        </Stack>
      </Container>
    </div>
  );
}
