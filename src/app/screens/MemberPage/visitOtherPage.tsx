// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { Box, Button, Container, Stack, Tab } from "@mui/material";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
// import Marginer from "../../components/marginer";
// import PersonIcon from "@mui/icons-material/Person";
// import AccauntDetail from "./accountDatail";
// import AccauntOrders from "./accauntOrders";
// import AccauntAddress from "./accountAddress";
// import AccauntWishlist from "./accauntWishlist";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import HomeIcon from "@mui/icons-material/Home";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import ArticleIcon from "@mui/icons-material/Article";
// import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import "../../../css/my_page.css";
// import AccountFollowers from "./accountFollowers";
// import AccountFollowings from "./accountFollowings";
// import AccauntArticle from "./accauntArticle";
// import AccauntCoupon from "./accauntCoupon";
// import TViewer from "../../components/TUIEditor/TuiViewer";

// // Others
// import Pagination from "@mui/material/Pagination";
// import PaginationItem from "@mui/material/PaginationItem";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// // REDUX
// import { createSelector } from "reselect";
// import { Dispatch } from "@reduxjs/toolkit";
// import {
//   setChosenMember,
//   setChosenSingleBoArticle,
//   setChosenMemberBoArticles,
// } from "./slice";
// import {
//   retrieveChosenMember,
//   retrieveChosenMemberBoArticles,
//   retrieveChosenSingleBoArticle,
// } from "./selector";
// import { Member } from "../../../types/user";
// import { BoArticle, SearchMemberArticlesObj } from "../../../types/boArticle";
// import CommunityApiService from "../../apiServices/communityApiService";
// import MemberApiService from "../../apiServices/memberApiService";
// import {
//   sweetErrorHandling,
//   sweetTopSmallSuccessAlert,
// } from "../../../lib/sweetAlert";
// import { Definer } from "../../../lib/Definer";
// import assert from "assert";
// import FollowApiService from "../../apiServices/followApiService";
// import { verifiedMemberData } from "../../apiServices/verify";
// import { useHistory } from "react-router-dom";

// /** REDUX SLICE */
// const actionDispatch = (dispach: Dispatch) => ({
//   setChosenMember: (data: Member) => dispach(setChosenMember(data)),
//   setChosenSingleBoArticle: (data: BoArticle) =>
//     dispach(setChosenSingleBoArticle(data)),
//   setChosenMemberBoArticles: (data: BoArticle[]) =>
//     dispach(setChosenMemberBoArticles(data)),
// });

// /** REDUX SELECTOR */
// const chosenMemberRetriever = createSelector(
//   retrieveChosenMember,
//   (chosenMember) => ({
//     chosenMember,
//   })
// );
// const chosenMemberBoArticlesRetriever = createSelector(
//   retrieveChosenMemberBoArticles,
//   (chosenMemberBoArticles) => ({
//     chosenMemberBoArticles,
//   })
// );
// const chosenSingleBoArticleRetriever = createSelector(
//   retrieveChosenSingleBoArticle,
//   (chosenSingleBoArticle) => ({
//     chosenSingleBoArticle,
//   })
// );

// export default function VisitOtherPage(props: any) {
//   /** INITIALIZATIONS **/
//   const history = useHistory();
//   const { chosen_mb_id, chosen_art_id } = props;
//   const {
//     setChosenMember,
//     setChosenSingleBoArticle,
//     setChosenMemberBoArticles,
//   } = actionDispatch(useDispatch());
//   const { chosenMember } = useSelector(chosenMemberRetriever);
//   const { chosenMemberBoArticles } = useSelector(
//     chosenMemberBoArticlesRetriever
//   );
//   const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriever);

//   const [value, setValue] = React.useState("1");
//   const [memberArticleSearchObj, setMemberArticleSearchObj] =
//     useState<SearchMemberArticlesObj>({
//       mb_id: chosen_mb_id,
//       page: 1,
//       limit: 6,
//     });
//   const [articlesRebuild, setArticlesRebuild] = useState(new Date());
//   const [followRebuild, setFollowRebuild] = useState(false);

//   useEffect(() => {
//     if (chosen_mb_id === verifiedMemberData?._id) {
//       history.push("/member-page");
//     }
//     const communityService = new CommunityApiService();
//     communityService
//       .getChosenArticle(chosen_art_id)
//       .then((data) => {
//         setChosenSingleBoArticle(data);
//         setValue("4");
//       })
//       .catch((err) => console.log(err));
//     communityService
//       .getMemberCommunityArticles(memberArticleSearchObj)
//       .then((data) => setChosenMemberBoArticles(data))
//       .catch((err) => console.log(err));
//   }, [memberArticleSearchObj, chosen_mb_id, articlesRebuild, followRebuild]);

//   useEffect(() => {
//     if (chosen_mb_id === verifiedMemberData?._id) {
//       history.push("/member-page/");
//     }

//     const memberService = new MemberApiService();
//     memberService
//       .getChosenMember(memberArticleSearchObj.mb_id)
//       .then((data) => setChosenMember(data))
//       .catch((err) => console.log(err));
//   }, [verifiedMemberData, chosen_mb_id, followRebuild]);

//   /** HANDLERS **/

//   const handlePaginationChange = (event: any, value: number) => {
//     memberArticleSearchObj.page = value;
//     setMemberArticleSearchObj({ ...memberArticleSearchObj });
//   };

//   const renderChosenArticleHandler = async (art_id: string) => {
//     try {
//       const communityService = new CommunityApiService();
//       communityService
//         .getChosenArticle(art_id)
//         .then((data) => {
//           setChosenSingleBoArticle(data);
//           setValue("4");
//         })
//         .catch((err) => console.log(err));
//     } catch (err) {
//       console.log(err);
//       sweetErrorHandling(err).then();
//     }
//   };

//   const subscribeHandler = async (e: any) => {
//     try {
//       assert.ok(verifiedMemberData, Definer.auth_err1);

//       const followService = new FollowApiService();
//       await followService.subscribe(e.target.value);

//       await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
//       setFollowRebuild(!followRebuild);
//     } catch (err) {
//       console.log(err);
//       sweetErrorHandling(err).then();
//     }
//   };

//   const unsubscribeHandler = async (e: any) => {
//     try {
//       assert.ok(verifiedMemberData, Definer.auth_err1);

//       const followService = new FollowApiService();
//       await followService.unsubscribe(e.target.value);

//       await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
//       setFollowRebuild(!followRebuild);
//     } catch (err) {
//       console.log(err);
//       sweetErrorHandling(err).then();
//     }
//   };

//   const handleChange = (event: any, newValue: string) => {
//     setValue(newValue);
//   };
//   return (
//     <div style={{ background: "#ffffff" }}>
//       <div className="blogPage">
//         <div>
//           <img src="/homepage/image 28.png" alt="" />
//         </div>
//         <Container>
//           <Box
//             sx={{
//               width: "135px",
//               height: "91px",
//               position: "absolute",
//               marginTop: "62px",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Box className="blog_page">Selected Article</Box>
//             <Box className="blog_page1">
//               <Box>
//                 Home /{" "}
//                 <span style={{ fontWeight: "600" }}>Selected Article</span>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </div>

//       <Container>
//         <TabContext value={value}>
//           <Box className="my_page">
//             <Box className="my_page_tablist">
//               <Box className="account_infos">
//                 <Box className="account_img_box">
//                   <img src="/homepage/hand-drawn.jpg" alt="my_page" />
//                 </Box>
//                 <Box className="account_name_box">
//                   <span> {chosenMember?.mb_nick}</span>
//                   <br />
//                   {chosenMember?.mb_email}
//                 </Box>
//               </Box>
//               <Box className="spes_box">
//                 <Box className="spes_type">SNS:</Box>
//                 <Box className="sns_icons">
//                   <Box>
//                     <img src="/icons/fc.png" alt="fc" />
//                   </Box>
//                   <Box>
//                     <img src="/icons/tw1.png" alt="fc" />
//                   </Box>
//                   <Box>
//                     <img src="/icons/ins.png" alt="fc" />
//                   </Box>
//                   <Box>
//                     <img
//                       style={{ width: "15px" }}
//                       src="/icons/tg.png"
//                       alt="fc"
//                     />
//                   </Box>
//                 </Box>
//               </Box>
//               <Box className={"user_media_box"}>
//                 <p className={"follows"}>
//                   Followers: {chosenMember?.mb_subscriber_cnt}
//                 </p>
//                 <p className={"follows"}>
//                   Followers: {chosenMember?.mb_follow_cnt}
//                 </p>
//               </Box>
//               <p className={"user_desc"}>
//                 {chosenMember?.mb_description ??
//                   "qushimcha malumot kiritilmagan"}
//               </p>

//               <Marginer
//                 direction="horizontal"
//                 height="1"
//                 width="2"
//                 bg="#EAEAEA"
//                 opsty="1"
//               />

//               <TabList
//                 onChange={handleChange}
//                 orientation="vertical"
//                 variant="scrollable"
//                 sx={{ mt: "20px" }}
//               >
//                 <Tab
//                   component={(e) => (
//                     <Box className="dash_tab" onClick={() => setValue("1")}>
//                       {" "}
//                       <ArticleIcon /> Articles
//                     </Box>
//                   )}
//                   value={"1"}
//                   className="tablist_style"
//                   sx={{
//                     "&.Mui-selected": {
//                       color: "#000000;",
//                       backgroundColor: "#86bc42",
//                       borderRadius: "5px",
//                     },
//                     textTransform: "none",
//                   }}
//                 />
//                 <Tab
//                   component={(e) => (
//                     <Box className="dash_tab" onClick={() => setValue("2")}>
//                       {" "}
//                       <PeopleOutlineIcon /> Followings
//                     </Box>
//                   )}
//                   value={"2"}
//                   className="tablist_style"
//                   sx={{
//                     "&.Mui-selected": {
//                       color: "#000000;",
//                       backgroundColor: "#86bc42",
//                       borderRadius: "5px",
//                     },
//                     textTransform: "none",
//                   }}
//                 />
//                 <Tab
//                   component={(e) => (
//                     <Box className="dash_tab" onClick={() => setValue("3")}>
//                       {" "}
//                       <PeopleAltIcon /> Followers
//                     </Box>
//                   )}
//                   value={"3"}
//                   className="tablist_style"
//                   sx={{
//                     "&.Mui-selected": {
//                       color: "#000000;",
//                       backgroundColor: "#86bc42",
//                       borderRadius: "5px",
//                     },
//                     textTransform: "none",
//                   }}
//                 />
//               </TabList>
//               <Box
//                 display={"flex"}
//                 justifyContent={"flex-end"}
//                 sx={{ mt: "10px" }}
//               >
//                 <TabList
//                   onChange={handleChange}
//                   aria-label="lap API tabs example"
//                 >
//                   {chosenMember?.me_followed &&
//                   chosenMember?.me_followed[0]?.my_following ? (
//                     <Tab
//                       style={{ flexDirection: "column" }}
//                       value={"4"}
//                       component={(e) => (
//                         <Button
//                           value={chosenMember?._id}
//                           variant={"contained"}
//                           style={{ background: "rgba(247, 9, 9, 0.72)" }}
//                           onClick={unsubscribeHandler}
//                         >
//                           Bekor qilish
//                         </Button>
//                       )}
//                     />
//                   ) : (
//                     <Tab
//                       style={{ flexDirection: "column" }}
//                       value={"4"}
//                       component={(e) => (
//                         <Button
//                           value={chosenMember?._id}
//                           variant={"contained"}
//                           style={{ backgroundColor: "#30945e" }}
//                           onClick={subscribeHandler}
//                           // @ts-ignore
//                         >
//                           Folow qilish
//                         </Button>
//                       )}
//                     />
//                   )}
//                 </TabList>
//               </Box>
//             </Box>
//           </Box>
//           <Box sx={{ background: "#ffffff" }} className="my_page_tabpanels">
//             <TabPanel value={"1"}>
//               <Box className={"menu_name"}>Articles</Box>
//               <Box className={"menu_content"}>
//                 <AccauntArticle />
//                 <Stack
//                   sx={{ my: "40px" }}
//                   direction="row"
//                   alignItems="center"
//                   justifyContent="center"
//                 >
//                   <Box className={"bottom_box"}>
//                     <Pagination
//                       count={
//                         memberArticleSearchObj.page >= 3
//                           ? memberArticleSearchObj.page + 1
//                           : 3
//                       }
//                       page={memberArticleSearchObj.page}
//                       renderItem={(item) => (
//                         <PaginationItem
//                           components={{
//                             previous: ArrowBackIcon,
//                             next: ArrowForwardIcon,
//                           }}
//                           {...item}
//                           color={"secondary"}
//                         />
//                       )}
//                       onChange={handlePaginationChange}
//                     />
//                   </Box>
//                 </Stack>
//               </Box>
//               <AccauntArticle />
//             </TabPanel>
//             <TabPanel value={"2"}>
//               <Box className={"menu_name"}>Followers</Box>
//               <Box className={"menu_content"}>
//                 <AccountFollowers />
//               </Box>
//             </TabPanel>
//             <TabPanel value={"3"}>
//               <Box className={"menu_name"}>Following</Box>
//               <Box className={"menu_content"}>
//                 <AccountFollowings />
//               </Box>
//             </TabPanel>
//             <TabPanel value={"4"}>
//               <Box className={"menu_name"}>Selected Article</Box>
//               <Box className={"menu_content"}></Box>
//               <TViewer text={`<h3>Hello</h3>`} />
//             </TabPanel>
//           </Box>
//         </TabContext>
//       </Container>
//     </div>
//   );
// }
import { Container, Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AccauntArticle from "./accauntArticle";
import AccountFollowers from "./accountFollowers";
import AccountFollowings from "./accountFollowings";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TViewer from "../../components/TUIEditor/TuiViewer";
import { useHistory } from "react-router-dom";
// Others
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import FollowApiService from "../../apiServices/followApiService";
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

export function VisitOtherPage(props: any) {
  /** INITIALIZATIONS **/
  const history = useHistory();
  const { chosen_mb_id, chosen_art_id } = props;
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

  const [value, setValue] = React.useState("1");
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({
      mb_id: chosen_mb_id,
      page: 1,
      limit: 4,
    });
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const [followRebuild, setFollowRebuild] = useState<boolean>(false);

  useEffect(() => {
    if (chosen_mb_id === verifiedMemberData?._id) {
      history.push("/member-page");
    }
    const communityService = new CommunityApiService();
    communityService
      .getChosenArticle(chosen_art_id)
      .then((data) => {
        setChosenSingleBoArticle(data);
        setValue("4");
      })
      .catch((err) => console.log(err));
    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setChosenMemberBoArticles(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, chosen_mb_id, articlesRebuild, followRebuild]);

  useEffect(() => {
    if (chosen_mb_id === verifiedMemberData?._id) {
      history.push("/member-page");
    }

    const memberService = new MemberApiService();
    memberService
      .getChosenMember(memberArticleSearchObj.mb_id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [verifiedMemberData, chosen_mb_id, followRebuild]);

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
          setValue("4");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const subscribeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.subscribe(e.target.value);

      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const unsubscribeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.unsubscribe(e.target.value);

      await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className={"my_page"}>
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className={"my_page_frame"}>
          <TabContext value={value}>
            <Stack className={"my_page_left"}>
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value={"1"}>
                  <Box className={"menu_name"}>Maqolalar</Box>
                  <Box className={"menu_content"}>
                    <AccauntArticle
                      actions_enabled={false}
                      chosenMemberBoArticles={chosenMemberBoArticles}
                      renderChosenArticleHandler={renderChosenArticleHandler}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                    <Stack
                      sx={{ my: "40px" }}
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={
                            memberArticleSearchObj.page >= 3
                              ? memberArticleSearchObj.page + 1
                              : 3
                          }
                          page={memberArticleSearchObj.page}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color={"secondary"}
                            />
                          )}
                          onChange={handlePaginationChange}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className={"menu_name"}>Followers</Box>
                  <Box className={"menu_content"}>
                    <AccountFollowers
                      action_enabled={false}
                      mb_id={chosen_mb_id}
                      setFollowRebuild={setFollowRebuild}
                      followRebuild={followRebuild}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>Following</Box>
                  <Box className={"menu_content"}>
                    <AccountFollowings
                      action_enabled={false}
                      mb_id={chosen_mb_id}
                      setFollowRebuild={setFollowRebuild}
                      followRebuild={followRebuild}
                    />
                  </Box>
                </TabPanel>

                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>Tanlangan maqola</Box>
                  <Box className={"menu_content"}></Box>
                  <TViewer text={`<h3>Hello</h3>`} />
                </TabPanel>
              </Box>
            </Stack>

            <Stack className={"my_page_right"}>
              <Box className={"order_info_box"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className={"order_user_img"}>
                    <img
                      src={"/homepage/garlic.jpg"}
                      className={"order_user_avatar"}
                    />
                    <div className={"order_user_icon_box"}>
                      <img src={"/icons/default_user.png"} />
                    </div>
                  </div>
                  <span className={"order_user_name"}>
                    {chosenMember?.mb_nick}
                  </span>
                  <span className={"order_user_prof"}>
                    {chosenMember?.mb_type}
                  </span>
                </Box>
                <Box className={"user_media_box"}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                  <YouTubeIcon />
                </Box>
                <Box className={"user_media_box"}>
                  <p className={"follows"}>
                    Followers: {chosenMember?.mb_subscriber_cnt}
                  </p>
                  <p className={"follows"}>
                    Followers: {chosenMember?.mb_follow_cnt}
                  </p>
                </Box>
                <p className={"user_desc"}>
                  {chosenMember?.mb_description ??
                    "qushimcha malumot kiritilmagan"}
                </p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lap API tabs example"
                  >
                    {chosenMember?.me_followed &&
                    chosenMember?.me_followed[0]?.my_following ? (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={(e) => (
                          <Button
                            value={chosenMember?._id}
                            variant={"contained"}
                            style={{ background: "rgba(247, 9, 9, 0.72)" }}
                            onClick={unsubscribeHandler}
                          >
                            Bekor qilish
                          </Button>
                        )}
                      />
                    ) : (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={(e) => (
                          <Button
                            value={chosenMember?._id}
                            variant={"contained"}
                            style={{ backgroundColor: "#30945e" }}
                            onClick={subscribeHandler}
                            // @ts-ignore
                          >
                            Folow qilish
                          </Button>
                        )}
                      />
                    )}
                  </TabList>
                </Box>
              </Box>

              <Box className={"my_page_menu"}>
                <TabList
                  onChange={handleChange}
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider", width: "98%" }}
                >
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"1"}
                    component={(e) => (
                      <div className={`menu_box`} onClick={() => setValue("1")}>
                        <img src={"/icons/pencil.svg"} />
                        <span>Articles</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={(e) => (
                      <div className={`menu_box`} onClick={() => setValue("2")}>
                        <img src={"/icons/followers.svg"} />
                        <span>Followerlari</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"3"}
                    component={(e) => (
                      <div className={`menu_box`} onClick={() => setValue("3")}>
                        <img src={"/icons/following.svg"} />
                        <span>Followlari</span>
                      </div>
                    )}
                  />
                </TabList>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
