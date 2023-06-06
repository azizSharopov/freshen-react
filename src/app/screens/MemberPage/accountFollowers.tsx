import { Stack, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

// REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setMemberFollowers } from "./slice";
import { retrieveMemberFollowers } from "./selector";
import { FollowSearchObj, Follower } from "../../../types/follow";
import FollowApiService from "../../apiServices/followApiService";
import { log } from "console";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispach(setMemberFollowers(data)),
});

/** REDUX SELECTOR */
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  })
);

export function MemberFollowers(props: any) {
  /** INITIALIZATIONS **/
  const history = useHistory();
  const { mb_id, followeRebuild, setFollowRebuild } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    { page: 1, limit: 50, mb_id: mb_id }
  );

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followeRebuild]);

  /** HANDLERS */
  const subscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.subscribe(id);

      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setFollowRebuild(!followeRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handlePaginationChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };

  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member-page/other?mb_id=${mb_id}`);
    document.location.reload();
  };

  return (
    <Box className="dash_tabpanels">
      <Box className="dash_head_text">
        <span>Followers</span>
      </Box>
      <Box className="dash_search product_table">
        <TableContainer component={Paper}>
          <Table
            sx={{ width: "700px" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#F3F5F6",
                  borderRadius: "6px",
                  mb: "10px",
                }}
              >
                <TableCell
                  sx={{
                    width: "50px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                  }}
                >
                  N
                </TableCell>
                <TableCell
                  sx={{
                    width: "150px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                  }}
                >
                  Photo
                </TableCell>
                <TableCell
                  sx={{
                    width: "300px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    width: "100px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Follow back
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_data" sx={{ border: "none" }}>
              {memberFollowers.map((follower: Follower) => {
                const image_url = follower?.subscriber_member_data?.mb_image
                  ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
                  : "/icons/user1.svg";
                return (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {},
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontFamily: "Lato",
                      }}
                      component="th"
                      scope="row"
                    ></TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px",
                        fontFamily: "Lato",
                      }}
                    >
                      <Box
                        sx={{
                          width: "70px",
                          height: "70px",
                        }}
                      >
                        <img
                          style={{
                            backgroundSize: "cover",
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            border: "1px solid #86bc42",
                          }}
                          src={image_url}
                          alt="follow"
                        />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Lato",
                      }}
                    >
                      {follower?.subscriber_member_data?.mb_nick}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontFamily: "Lato",
                      }}
                    >
                      {" "}
                      {props.action_enabled &&
                        (follower?.me_followed &&
                        follower.me_followed[0]?.my_following ? (
                          <Button
                            variant={"contained"}
                            className={"following_already"}
                            disabled
                            sx={{
                              fontSize: "13px",
                              width: "180px",
                              height: "25px",

                              textTransform: "none",
                            }}
                          >
                            Following
                          </Button>
                        ) : (
                          <Button
                            variant={"contained"}
                            className="dash_search_btn"
                            sx={{
                              color: "#ffffff",
                              fontSize: "13px",
                              width: "180px",
                              height: "25px",

                              backgroundColor: "#86bc42",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "#ffffff",
                                border: "1px solid #eaeaea",
                                color: "#121212",
                              },
                            }}
                            onClick={(e) =>
                              subscribeHandler(e, follower?.subscriber_id)
                            }
                          >
                            Follow back
                          </Button>
                        ))}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
