import React, { useState } from "react";
import { Box, Container, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Marginer from "../../components/marginer";
import PersonIcon from "@mui/icons-material/Person";
import AccauntDetail from "./accountDatail";
import AccauntOrders from "./accauntOrders";
import AccauntAddress from "./accountAddress";
import AccauntWishlist from "./accauntWishlist";
import ViewListIcon from "@mui/icons-material/ViewList";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import "../../../css/my_page.css";
import AccountFollowers from "./accountFollowers";
import AccountFollowings from "./accountFollowings";
import AccauntArticle from "./accauntArticle";
import AccauntCoupon from "./accauntCoupon";
export default function MemberPage() {
  const [value, setValue] = useState("1");
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
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
            <Box className="blog_page">My_Page</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>My_Account</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>

      <Container>
        <TabContext value={value}>
          <Box className="my_page">
            <Box className="my_page_tablist">
              <Box className="account_infos">
                <Box className="account_img_box">
                  <img src="/homepage/hand-drawn.jpg" alt="my_page" />
                </Box>
                <Box className="account_name_box">
                  <span>Ayden</span>
                  <br />
                  sharopovaziz23@gmail.com
                </Box>
              </Box>
              <Box className="spes_box">
                <Box className="spes_type">SNS:</Box>
                <Box className="sns_icons">
                  <Box>
                    <img src="/icons/fc.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/tw1.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/ins.png" alt="fc" />
                  </Box>
                  <Box>
                    <img
                      style={{ width: "15px" }}
                      src="/icons/tg.png"
                      alt="fc"
                    />
                  </Box>
                </Box>
              </Box>
              <Marginer
                direction="horizontal"
                height="1"
                width="2"
                bg="#EAEAEA"
                opsty="1"
              />

              <TabList
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                sx={{ mt: "20px" }}
              >
                <Tab
                  label={
                    <Box className="dash_tab">
                      <ViewListIcon /> Orders
                    </Box>
                  }
                  value={"7"}
                  className="tablist_style"
                  sx={{
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
                  label={
                    <Box className="dash_tab">
                      {" "}
                      <img src="/icons/heart.png" alt="" /> Wishlist
                    </Box>
                  }
                  value={"6"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />
                <Tab
                  label={
                    <Box className="dash_tab">
                      {" "}
                      <AccountBalanceWalletIcon /> Coupon
                    </Box>
                  }
                  value={"8"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />
                <Tab
                  label={
                    <Box className="dash_tab">
                      {" "}
                      <PeopleAltIcon /> Followers
                    </Box>
                  }
                  value={"5"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />
                <Tab
                  label={
                    <Box className="dash_tab">
                      {" "}
                      <PeopleOutlineIcon /> Followings
                    </Box>
                  }
                  value={"4"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />

                <Tab
                  label={
                    <Box className="dash_tab">
                      {" "}
                      <ArticleIcon /> Articles
                    </Box>
                  }
                  value={"3"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />
                <Tab
                  label={
                    <Box className="dash_tab">
                      {" "}
                      <HomeIcon /> Address
                    </Box>
                  }
                  value={"2"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />
                <Tab
                  label={
                    <Box className="dash_tab">
                      <ManageAccountsIcon /> Accaunt Details
                    </Box>
                  }
                  value={"1"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      backgroundColor: "#86bc42",
                      borderRadius: "5px",
                    },
                    textTransform: "none",
                  }}
                />
              </TabList>
            </Box>
            <Box sx={{ background: "#ffffff" }} className="my_page_tabpanels">
              <TabPanel value={"1"}>
                <AccauntDetail />
              </TabPanel>
              <TabPanel value={"2"}>
                <AccauntAddress />
              </TabPanel>
              <TabPanel value={"3"}>
                <AccauntArticle />
              </TabPanel>
              <TabPanel value={"4"}>
                <AccountFollowings />
              </TabPanel>
              <TabPanel value={"5"}>
                <AccountFollowers />
              </TabPanel>
              <TabPanel value={"6"}>
                <AccauntWishlist />
              </TabPanel>
              <TabPanel value={"7"}>
                <AccauntOrders />
              </TabPanel>
              <TabPanel value={"8"}>
                <AccauntCoupon />
              </TabPanel>
            </Box>
          </Box>
        </TabContext>
      </Container>
    </div>
  );
}
