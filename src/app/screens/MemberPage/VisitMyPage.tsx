import React, { useEffect, useState } from "react";
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
import { MemberFollowers } from "./accountFollowers";
import AccountFollowings from "./accountFollowings";
import AccauntArticle from "./accauntArticle";
import AccauntCoupon from "./accauntCoupon";
import { TuiEditor } from "../../components/TUIEditor/TuiEditor";
import TViewer from "../../components/TUIEditor/TuiViewer";
// REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenSingleBoArticle,
  setChosenMemberBoArticles,
} from "./slice";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoArticles,
  retrieveChosenSingleBoArticle,
} from "./selector";
import { Member } from "../../../types/user";
import { BoArticle, SearchMemberArticlesObj } from "../../../types/boArticle";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispach(setChosenSingleBoArticle(data)),
  setChosenMemberBoArticles: (data: BoArticle[]) =>
    dispach(setChosenMemberBoArticles(data)),
});
/** REDUX SELECTOR */
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenMemberBoArticlesRetriever = createSelector(
  retrieveChosenMemberBoArticles,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);
const chosenSingleBoArticleRetriever = createSelector(
  retrieveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({
    chosenSingleBoArticle,
  })
);

export default function VisitMyPage(props: any) {
  /** INITIALIZATIONS **/

  const {
    setChosenMember,
    setChosenSingleBoArticle,
    setChosenMemberBoArticles,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetriever
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriever);

  const [value, setValue] = useState("2");
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const [followeRebuild, setFollowRebuild] = useState<boolean>(false);
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({ mb_id: "none", page: 1, limit: 10 });

  useEffect(() => {
    if (!verifiedMemberData) {
      sweetFailureProvider("Please login first", true, true);
    }

    const communityService = new CommunityApiService();
    const memberService = new MemberApiService();
    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setChosenMemberBoArticles(data))
      .catch((err) => console.log(err));
    memberService
      .getChosenMember(verifiedMemberData?._id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, articlesRebuild, followeRebuild]);

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
  };

  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getChosenArticle(art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("3");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
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
                  <img src={verifiedMemberData?.mb_image} alt="my_page" />
                </Box>
                <Box className="account_name_box">
                  <span>{chosenMember?.mb_nick}</span>
                  <br />
                  {chosenMember?.mb_email}
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
                  value={"9"}
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
                      <AccountBalanceWalletIcon /> Coupon
                    </Box>
                  }
                  value={"7"}
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
                      <PeopleOutlineIcon /> Followings
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
                      <ArticleIcon /> Articles
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
                      <ManageAccountsIcon /> Accaunt Details
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
              </TabList>
            </Box>
            <Box sx={{ background: "#ffffff" }} className="my_page_tabpanels">
              <TabPanel value={"2"}>
                <AccauntDetail />
              </TabPanel>

              <TabPanel value={"4"}>
                <AccauntArticle
                  chosenMemberBoArticles={chosenMemberBoArticles}
                  renderChosenArticleHandler={renderChosenArticleHandler}
                  setArticlesRebuild={setArticlesRebuild}
                />
              </TabPanel>
              {/* <TabPanel value={"3"}>
                <TViewer chosenSingleBoArticle={chosenSingleBoArticle} />
              </TabPanel> */}
              <TabPanel value={"5"}>
                <AccountFollowings
                  action_enabled={true}
                  followeRebuild={followeRebuild}
                  setFollowRebuild={setFollowRebuild}
                  mb_id={verifiedMemberData?._id}
                />
              </TabPanel>
              <TabPanel value={"6"}>
                <MemberFollowers
                  action_enabled={true}
                  followeRebuild={followeRebuild}
                  setFollowRebuild={setFollowRebuild}
                  mb_id={verifiedMemberData?._id}
                />
              </TabPanel>
              <TabPanel value={"8"}>
                <AccauntWishlist />
              </TabPanel>
              <TabPanel value={"9"}>
                <AccauntOrders />
              </TabPanel>
              <TabPanel value={"7"}>
                <AccauntCoupon />
              </TabPanel>
            </Box>
          </Box>
        </TabContext>
      </Container>
    </div>
  );
}
