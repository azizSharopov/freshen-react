import React, { useState } from "react";
import { Box, Button, Container, Switch, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Marginer from "../../components/marginer";
const label = { inputProps: { "aria-label": "Switch demo" } };
export default function AccauntDetail() {
  const [value, setValue] = useState("1");
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "30px" }}>
        <span>Account Details</span>
      </Box>
      <TabContext value={value}>
        <Box className="market_account_set_box">
          <TabList onChange={handleChange}>
            <Tab
              label="Profile Informations"
              value={"1"}
              sx={{
                "&.Mui-selected": {
                  color: "#000000;",
                },
                textTransform: "none",
              }}
            ></Tab>
            <Tab
              label="Password"
              value={"2"}
              sx={{
                "&.Mui-selected": {
                  color: "#000000;",
                },
                textTransform: "none",
              }}
            ></Tab>
            <Tab
              label="Permissions"
              value={"3"}
              sx={{
                "&.Mui-selected": {
                  color: "#000000;",
                },
                textTransform: "none",
              }}
            ></Tab>
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
                  width: "950px",
                  marginBottom: "20px",
                }}
              >
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>First Name</label>
                  <input
                    className={"spec_input mb_first_name"}
                    type="text"
                    placeholder={"Umar"}
                    name="mb_first_name"
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>Last Name</label>
                  <input
                    className={"spec_input mb_last_name"}
                    type="text"
                    placeholder={"Rakhmatjonov"}
                    name="mb_last_name"
                  />
                </Box>
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>Phone Number</label>
                  <input
                    className={"spec_input mb_phone"}
                    type="text"
                    placeholder={"01032025252"}
                    name="mb_phone"
                  />
                </Box>{" "}
                <Box className="market_setting_input_box">
                  <label className={"spec_label"}>E-mail</label>
                  <input
                    className={"spec_input mb_email"}
                    type="text"
                    placeholder={"someone@mail.com"}
                    name="mb_email"
                  />
                </Box>
              </Box>
              <Box>
                <Button
                  className="dash_search_btn"
                  sx={{
                    color: "#000000",
                    fontSize: "14px",
                    width: "160px",
                    height: "40px",

                    border: "2px solid #f5c34b",
                    backgroundColor: "#f5c34b",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#f5c34b",
                    },
                  }}
                >
                  Update
                </Button>
                <Button
                  className="dash_search_btn"
                  sx={{
                    color: "#000000",
                    fontSize: "13px",
                    marginLeft: "20px",
                    width: "160px",
                    height: "40px",
                    border: "2px solid #f5c34b",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#f5c34b",
                    },
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={"2"}>
            <Box className="market_setting_input_box">
              <label style={{ marginTop: "15px" }} className={"spec_label"}>
                Current Password
              </label>
              <input
                className={"spec_input mb_password"}
                type="password"
                placeholder={""}
                name="mb_password"
              />
            </Box>
            <Box className="market_setting_input_box">
              <label style={{ marginTop: "15px" }} className={"spec_label"}>
                New Password
              </label>
              <input
                className={"spec_input new_mb_password"}
                type="password"
                placeholder={""}
                name="new_mb_password"
              />
            </Box>
            <Box className="market_setting_input_box">
              <label className={"spec_label"}>Confirm New Password</label>
              <input
                className={"spec_input new_mb_password"}
                type="password"
                placeholder={""}
                name="new_mb_password"
              />
            </Box>
            <Box sx={{ mt: "40px" }}>
              <Button
                className="dash_search_btn"
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  width: "160px",
                  height: "40px",

                  border: "2px solid #f5c34b",
                  backgroundColor: "#f5c34b",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f5c34b",
                  },
                }}
              >
                Update Profile
              </Button>
              <Button
                className="dash_search_btn"
                sx={{
                  color: "#000000",
                  fontSize: "13px",
                  marginLeft: "20px",
                  width: "160px",
                  height: "40px",
                  border: "2px solid #f5c34b",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f5c34b",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={"3"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",

                width: "950px",
                marginBottom: "20px",
              }}
            >
              <Box className="per_box">
                <Box>
                  <Box className="note_type">SMS</Box>
                  <Box className="note_text">
                    Messages to be sent by hitechmart to your mobile phone via
                    SMS method
                  </Box>
                </Box>
                <Box>
                  <Switch {...label} defaultChecked />
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: "40px" }}>
              <Button
                className="dash_search_btn"
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  width: "160px",
                  height: "40px",

                  border: "2px solid #f5c34b",
                  backgroundColor: "#f5c34b",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f5c34b",
                  },
                }}
              >
                Update
              </Button>
              <Button
                className="dash_search_btn"
                sx={{
                  color: "#000000",
                  fontSize: "13px",
                  marginLeft: "20px",
                  width: "160px",
                  height: "40px",
                  border: "2px solid #f5c34b",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f5c34b",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
