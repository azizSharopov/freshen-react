import { Container, Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AccauntArticle from "./accauntArticle";
import { MemberFollowers } from "./accountFollowers";
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
import Marginer from "../../components/marginer";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { serverApi } from "../../../lib/config";

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
      limit: 8,
    });
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const [followRebuild, setFollowRebuild] = useState<boolean>(false);

  useEffect(() => {
    // if (chosen_mb_id === verifiedMemberData?._id) {
    //   history.push("/member-page");
    // }
    const communityService = new CommunityApiService();
    if (chosen_art_id) {
      communityService
        .getChosenArticle(chosen_art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    }
    // communityService
    //   .getChosenArticle(chosen_art_id)
    //   .then((data) => {
    //     setChosenSingleBoArticle(data);
    //     setValue("4");
    //   })
    //   .catch((err) => console.log(err));
    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setChosenMemberBoArticles(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, chosen_mb_id, articlesRebuild]);

  useEffect(() => {
    // if (chosen_mb_id === verifiedMemberData?._id) {
    //   history.push("/member-page");
    // }

    const memberService = new MemberApiService();
    memberService
      .getChosenMember(memberArticleSearchObj?.mb_id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [verifiedMemberData, chosen_mb_id, followRebuild]);

  /** HANDLERS **/
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
                Home / <span style={{ fontWeight: "600" }}>Other_Account</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container>
        <TabContext value={value}>
          <Box className={"my_page1"}>
            <Stack className={"my_page_tablist"}>
              <Box className="account_infos_other">
                <Box className="account_img">
                  <Box className="account_img_box">
                    <img
                      src={
                        chosenMember?.mb_image
                          ? `${serverApi}/${chosenMember.mb_image}`
                          : "/icons/user1.svg"
                      }
                      alt="my_page"
                    />
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
                <Box
                  sx={{ width: "300px", height: "2px", background: "#86bc42" }}
                ></Box>
                <Box className={"user_media_box"}>
                  <p className={"follows"}>
                    Followers: {chosenMember?.mb_subscriber_cnt}
                  </p>
                  <p className={"follows"}>
                    Following: {chosenMember?.mb_follow_cnt}
                  </p>
                </Box>
                <p className="dash_tab">
                  {chosenMember?.mb_description ??
                    "Description is not included"}
                </p>

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
                          style={{
                            background: "#d53f20",
                            color: "#121212",
                            fontWeight: "600",
                          }}
                          onClick={unsubscribeHandler}
                        >
                          Cancel
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
                          style={{
                            backgroundColor: "#86bc42",
                            color: "#121212",
                            fontWeight: "600",
                          }}
                          onClick={subscribeHandler}
                          // @ts-ignore
                        >
                          To Follow
                        </Button>
                      )}
                    />
                  )}
                </TabList>
                <Box
                  sx={{ width: "300px", height: "2px", background: "#86bc42" }}
                ></Box>
                <Box
                  sx={{
                    background: "#ffffff",
                    mt: "20px",
                    width: "270px",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    orientation="vertical"
                    variant="scrollable"

                    // value={value}
                    // aria-label="Vertical tabs example"
                    // sx={{
                    //   borderRight: 1,
                    //   borderColor: "divider",
                    //   width: "99%",
                    // }}
                  >
                    <Tab
                      value={"1"}
                      component={(e) => (
                        <div
                          onClick={() => setValue("1")}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <ArticleIcon />{" "}
                          <Box sx={{ marginTop: "5px" }}> Articles</Box>
                        </div>
                      )}
                    />
                    <Tab
                      value={"2"}
                      component={(e) => (
                        <div
                          onClick={() => setValue("2")}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <PeopleAltIcon />{" "}
                          <Box sx={{ marginTop: "5px" }}> Followers</Box>
                        </div>
                      )}
                    />
                    <Tab
                      value={"3"}
                      component={(e) => (
                        <div
                          onClick={() => setValue("3")}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <PeopleOutlineIcon />{" "}
                          <Box
                            sx={{
                              marginTop: "5px",
                            }}
                          >
                            {" "}
                            Followings
                          </Box>
                        </div>
                      )}
                    />
                  </TabList>
                </Box>
              </Box>
            </Stack>

            <Stack className="my_page_tabpanels" sx={{ background: "#ffffff" }}>
              <Box>
                <TabPanel value={"1"}>
                  <Box className={"menu_name"}>Articles</Box>
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
                    <MemberFollowers
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
                  <Box className={"menu_content"}>
                    <TViewer chosenSingleBoArticle={chosenSingleBoArticle} />
                  </Box>

                  {/* <TViewer
                    actions_enabled={false}
                    chosenSingleBoArticle={chosenSingleBoArticle}
                  /> */}
                </TabPanel>
              </Box>
            </Stack>
          </Box>
        </TabContext>
      </Container>
    </div>
  );
}
