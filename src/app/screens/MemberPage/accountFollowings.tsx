import { Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Dispatch } from "@reduxjs/toolkit";
// Others
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { setMemberFollowings } from "./slice";
import { retrieveMemberFollowings } from "./selector";
import { FollowSearchObj, Following } from "../../../types/follow";
import FollowApiService from "../../apiServices/followApiService";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";
import {
  Container,
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
  setMemberFollowings: (data: Following[]) =>
    dispach(setMemberFollowings(data)),
});

/** REDUX SELECTOR */
const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  })
);

export default function AccountFollowings(props: any) {
  /** INITIALIZATIONS **/
  const history = useHistory();
  const { mb_id, followeRebuild, setFollowRebuild } = props;
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);
  const [followingsSearchObj, setFollowingsSearchObj] =
    useState<FollowSearchObj>({ page: 1, limit: 5, mb_id: mb_id });

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowings(followingsSearchObj)
      .then((data) => setMemberFollowings(data))
      .catch((err) => console.log(err));
  }, [followingsSearchObj, followeRebuild]);

  /** HANDLERS */
  const unsubscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.unsubscribe(id);

      await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
      setFollowRebuild(!followeRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handlePaginationChange = (event: any, value: number) => {
    followingsSearchObj.page = value;
    setFollowingsSearchObj({ ...followingsSearchObj });
  };

  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member-page/other?mb_id=${mb_id}`);
    document.location.reload();
  };

  return (
    <Box className="dash_tabpanels">
      <Box className="dash_head_text">
        <span>Following</span>
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
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_data" sx={{ border: "none" }}>
              {memberFollowings.map((following: Following) => {
                const image_url = following?.follow_member_data?.mb_image
                  ? `${serverApi}/${following.follow_member_data.mb_image}`
                  : "/icons/user1.svg";
                return (
                  <TableRow
                    // key={e.id}
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
                    >
                      {/* {index + 1} */}
                    </TableCell>
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
                      {following?.follow_member_data?.mb_nick}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontFamily: "Lato",
                      }}
                    >
                      {props.action_enabled && (
                        <Button
                          className="dash_search_btn"
                          sx={{
                            color: "#ffffff",
                            fontSize: "13px",
                            width: "180px",
                            height: "25px",

                            backgroundColor: "#d53f20",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#ffffff",
                              border: "1px solid #eaeaea",
                              color: "#121212",
                            },
                          }}
                          onClick={(e) =>
                            unsubscribeHandler(e, following?.follow_id)
                          }
                        >
                          Cancel
                        </Button>
                      )}
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
