import { Box, Button, Container, Switch, Tab } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Marginer from "../../components/marginer";
import { Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { verifiedMemberData } from "../../apiServices/verify";
import { MemberUpdateData } from "../../../types/user";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import { useHistory } from "react-router-dom";

export default function AccauntDetail(props: any) {
  const [value, setValue] = useState("1");
  const history = useHistory();

  const handleCancel = () => {
    history.push("/");
  };

  /**INITIALIZATIONS */
  const [file, setFile] = useState(verifiedMemberData?.mb_image);

  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_phone: "",
    mb_email: "",
    mb_address: "",
    mb_description: "",
    mb_image: "",
    mb_password: "",
  });
  /**HANDLERS */

  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberEmailHandler = (e: any) => {
    memberUpdate.mb_email = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const changeMemberAddressHandler = (e: any) => {
    memberUpdate.mb_address = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const changemb_passwordHandler = (e: any) => {
    memberUpdate.mb_password = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const handleImagePreviewer = (e: any) => {
    try {
      const file = e.target.files[0];

      const fileType = file["type"];
      const validTypes = ["image/jpg", "image/png", "image/jpeg"];
      assert.ok(validTypes.includes(fileType) && file, Definer.input_err2);

      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file));
    } catch (err) {
      console.log(`ERROR::: handleImagePreviewer ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const handleSubmitButton = async () => {
    try {
      const memberService = new MemberApiService();
      const result = await memberService.updateMemberData(memberUpdate);

      assert.ok(result, Definer.general_err1);
      await sweetTopSmallSuccessAlert(
        "Information modified successfully!",
        700,
        false
      );
      window.location.reload();
    } catch (err) {
      console.log(`ERROR::: handleSubmitButton ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "30px" }}>
        <span>Account Details</span>
      </Box>
      <TabContext value={value}>
        <Box className="market_account_set_box" sx={{ marginLeft: "10px" }}>
          <TabList onChange={handleChange}>
            <Tab
              label="Profile Informations"
              value={"1"}
              sx={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#121212",
                "&.Mui-selected": {
                  color: "#86bc42;",
                  fontSize: "18px",
                  fontWeight: "600",
                },
                textTransform: "none",
              }}
            ></Tab>
            {/* <Tab
              label="Password"
              value={"2"}
              sx={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#121212",
                "&.Mui-selected": {
                  color: "#86bc42;",
                  fontSize: "18px",
                  fontWeight: "600",
                },
                textTransform: "none",
              }}
            ></Tab>
            <Tab
              label="SNS link"
              value={"3"}
              sx={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#121212",
                "&.Mui-selected": {
                  color: "#86bc42;",
                  fontSize: "18px",
                  fontWeight: "600",
                },
                textTransform: "none",
              }}
            ></Tab> */}
          </TabList>
        </Box>
        <Box>
          <TabPanel value={"1"}>
            <Box className="market_account_set_box">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  flexWrap: "wrap",
                  width: "900px",
                  marginBottom: "20px",
                }}
              >
                <Box className={"member_media_frame"} sx={{ width: "830px" }}>
                  <img
                    src={file}
                    className={"mb_image"}
                    style={{ borderRadius: "50%" }}
                    width={"100px"}
                    height={"100px"}
                  />
                  <div className={"media_change_box"}>
                    <span>Upload image</span>
                    <p>You can upload images in JPG, JPEG, PNG format!</p>
                    <div className={"up_del_box"}>
                      <Button
                        component="label"
                        style={{ minWidth: "0" }}
                        onChange={handleImagePreviewer}
                      >
                        <CloudDownloadIcon />
                        <input type="file" hidden />
                      </Button>
                    </div>
                  </div>
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>User Name</label>
                  <input
                    className={"spec_input mb_first_name"}
                    type="text"
                    placeholder={verifiedMemberData?.mb_nick}
                    name="mb_nick"
                    onChange={changeMemberNickHandler}
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>Phone Number</label>
                  <input
                    className={"spec_input mb_phone"}
                    type="text"
                    placeholder={verifiedMemberData?.mb_phone}
                    name="mb_phone"
                    onChange={changeMemberPhoneHandler}
                  />
                </Box>{" "}
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>Address</label>
                  <input
                    className={"spec_input mb_address"}
                    type="text"
                    placeholder={
                      verifiedMemberData?.mb_address ?? "no address entered"
                    }
                    name="mb_address"
                    onChange={changeMemberAddressHandler}
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>Email</label>
                  <input
                    className={"spec_input mb_email"}
                    type="Email"
                    placeholder={verifiedMemberData?.mb_email}
                    name="mb_email"
                    onChange={changeMemberEmailHandler}
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>User description</label>
                  <textarea
                    style={{ height: "150px" }}
                    className={"spec_input mb_description"}
                    placeholder={
                      verifiedMemberData?.mb_description ?? "not available"
                    }
                    name="mb_description"
                    onChange={changeMemberDescriptionHandler}
                  />
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={handleSubmitButton}
                  className="dash_search_btn"
                  sx={{
                    background: "#86BC42",
                    borderRadius: "4px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#FFFFFF",

                    width: "160px",
                    height: "50px",

                    textTransform: "none",
                    "&:hover": {
                      color: "#121212",
                      border: "1px solid #eaeaea",
                    },
                  }}
                >
                  UPDATE
                </Button>
                <Button
                  className="dash_search_btn"
                  onClick={handleCancel}
                  sx={{
                    background: "#86BC42",
                    borderRadius: "4px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    marginLeft: "20px",
                    width: "160px",
                    height: "50px",

                    textTransform: "none",
                    "&:hover": {
                      color: "#121212",
                      border: "1px solid #eaeaea",
                    },
                  }}
                >
                  CANCEL
                </Button>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={"2"}>
            <Box className="market_setting_input_box">
              <label style={{ marginTop: "15px" }} className={"spec_label"}>
                New Password
              </label>
              <input
                className={"spec_input new_mb_password"}
                type="password"
                placeholder={""}
                name="new_mb_password"
                // onChange={changemb_passwordHandler}
              />
            </Box>
            <Box className="market_setting_input_box">
              <label className={"spec_label"}>Confirm New Password</label>
              <input
                className={"spec_input new_mb_password"}
                type="password"
                placeholder={""}
                name="new_mb_password"
                //  onChange={changemb_passwordHandler}
              />
            </Box>
            <Box sx={{ mt: "40px" }}>
              <Button
                onClick={handleSubmitButton}
                className="dash_search_btn"
                sx={{
                  background: "#86BC42",
                  borderRadius: "4px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#FFFFFF",

                  width: "160px",
                  height: "50px",

                  textTransform: "none",
                  "&:hover": {
                    color: "#121212",
                    border: "1px solid #eaeaea",
                  },
                }}
              >
                UPDATE PROFILE
              </Button>
              <Button
                className="dash_search_btn"
                sx={{
                  background: "#86BC42",
                  borderRadius: "4px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  marginLeft: "20px",
                  width: "160px",
                  height: "50px",

                  textTransform: "none",
                  "&:hover": {
                    color: "#121212",
                    border: "1px solid #eaeaea",
                  },
                }}
              >
                CANCEL
              </Button>
            </Box>
          </TabPanel>

          <TabPanel value={"3"}>
            <Box className="market_account_set_box" sx={{ marginTop: "40px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  flexWrap: "wrap",
                  width: "900px",
                  marginBottom: "20px",
                }}
              >
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>
                    {" "}
                    <Box>
                      <img src="/icons/ins.png" alt="fc" />
                    </Box>
                    Link Instagram
                  </label>
                  <input
                    className={"spec_input mb_first_name"}
                    type="text"
                    placeholder={"Instagram"}
                    name="mb_first_name"
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>
                    <Box>
                      <img
                        style={{ width: "15px" }}
                        src="/icons/tg.png"
                        alt="fc"
                      />
                    </Box>
                    Link Telegram
                  </label>
                  <input
                    className={"spec_input mb_last_name"}
                    type="text"
                    placeholder={"Telegram"}
                    name="mb_last_name"
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>
                    <Box>
                      <img src="/icons/fc.png" alt="fc" />
                    </Box>
                    Link Facebook
                  </label>
                  <input
                    className={"spec_input mb_phone"}
                    type="text"
                    placeholder={"Facebook"}
                    name="mb_phone"
                  />
                </Box>{" "}
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>
                    <Box>
                      <img src="/icons/tw1.png" alt="fc" />
                    </Box>
                    Link Twitter
                  </label>
                  <input
                    className={"spec_input mb_email"}
                    type="text"
                    placeholder={"Twitter"}
                    name="mb_email"
                  />
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={handleSubmitButton}
                  className="dash_search_btn"
                  sx={{
                    background: "#86BC42",
                    borderRadius: "4px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#FFFFFF",

                    width: "160px",
                    height: "50px",

                    textTransform: "none",
                    "&:hover": {
                      color: "#121212",
                      border: "1px solid #eaeaea",
                    },
                  }}
                >
                  UPDATE
                </Button>
                <Button
                  className="dash_search_btn"
                  sx={{
                    background: "#86BC42",
                    borderRadius: "4px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    marginLeft: "20px",
                    width: "160px",
                    height: "50px",

                    textTransform: "none",
                    "&:hover": {
                      color: "#121212",
                      border: "1px solid #eaeaea",
                    },
                  }}
                >
                  CANCEL
                </Button>
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
