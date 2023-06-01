import { Container, Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import Marginer from "../../components/marginer";
import { Order } from "../../../types/order";
import { useLocation } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders,
} from "../../screens/OrdersPage/slice";
import OrderApiService from "../../apiServices/orderApiService";
import { Member } from "../../../types/user";
import { verifiedMemberData } from "../../apiServices/verify";
import { Link } from "react-router-dom";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
});

export function OrdersPage(props: any) {
  /** INITIALIZATIONS **/
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const [value, setValue] = useState("1");
  // const verifiedMemberData: Member | null = props.verifiedMemberData;
  useEffect(() => {
    const orderService = new OrderApiService();
    orderService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [props.orderRebuild]);

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <div className="OrdersPage">
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
            <Box className="orders_page">Orders</Box>
            <Box className="orders_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>My_orders</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>

      <Container
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "diveder",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TabList
                  onChange={handleChange}
                  value={value}
                  aria-label="basic tabs example"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tab
                    sx={{
                      fontWeight: "700",
                      fontSize: "13px",
                      color: "#121212",
                      fontFamily: "Signika",
                      lineHeight: "24px",

                      "&.Mui-selected": {
                        backgroundColor: "#86bc42",
                        borderRadius: "4px",
                        border: "none !important",
                        boxShadow: "none",
                        outline: "none",
                      },
                      textTransform: "uppercase",
                    }}
                    label="SHOPPING CART"
                    value={"1"}
                  />
                  <Tab
                    sx={{
                      fontWeight: "700",
                      fontSize: "13px",
                      color: "#121212",
                      fontFamily: "Signika",
                      lineHeight: "24px",
                      "&.Mui-selected": {
                        backgroundColor: "#86bc42",
                        borderRadius: "4px",
                        border: "none !important",
                        boxShadow: "none",
                        outline: "none",
                      },
                      textTransform: "uppercase",
                    }}
                    label=" CHECKOUT"
                    value={"2"}
                  />
                  <Tab
                    sx={{
                      fontWeight: "700",
                      fontSize: "13px",
                      color: "#121212",
                      fontFamily: "Signika",
                      lineHeight: "24px",
                      "&.Mui-selected": {
                        backgroundColor: "#86bc42",
                        borderRadius: "4px",
                        border: "none !important",
                        boxShadow: "none",
                        outline: "none",
                      },
                      textTransform: "uppercase",
                    }}
                    label="ORDER COMPLETE"
                    value={"3"}
                  />
                </TabList>
              </Box>
            </Box>
            <Stack className={"order_main_content"}>
              <PausedOrders
                setValue={setValue}
                setOrderRebuild={props.setOrderRebuild}
              />
              <ProcessOrders
                setValue={setValue}
                setOrderRebuild={props.setOrderRebuild}
              />
              <FinishedOrders setOrderRebuild={props.setOrderRebuild} />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box className="account_infos">
              <Box className="account_img1">
                <Box className="account_img_box">
                  <img
                    style={{ backgroundSize: "cover" }}
                    src={
                      verifiedMemberData?.mb_image
                        ? verifiedMemberData.mb_image
                        : "/homepage/hand-drawn.jpg"
                    }
                    alt="my_page"
                  />
                  {/* <img src={"/icons/user1.svg"} alt="my_page" /> */}
                </Box>
                <Box className="account_name_box">
                  <span> {verifiedMemberData?.mb_nick}</span>
                  <br />
                  {verifiedMemberData?.mb_email}
                </Box>
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
                  <img style={{ width: "15px" }} src="/icons/tg.png" alt="fc" />
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
            <Box
              style={{ border: "1px solid #A1A1A1" }}
              width={"100%"}
              sx={{ mt: "40px", mb: "8px" }}
            ></Box>
            <Box className={"order_user_address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className={"spec_address_txt"}>Daegu, South Korea</div>
            </Box>
            <Link to="/member-page" className="order_text_conti">
              Change address
            </Link>
          </Box>
          <Box className={"order_info_box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"card_number"}
              placeholder={"Card number : 1234 2777 7772 4321"}
              className={"card_input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"card_period"}
                placeholder={"02 / 24"}
                className={"card_half_input"}
              />
              <input
                type={"text"}
                name={"card_cvv"}
                placeholder={"CVV : 010"}
                className={"card_half_input"}
              />
            </div>
            <input
              type={"text"}
              name={"card_creator"}
              placeholder={"User Name"}
              className={"card_input"}
            />
            <div className={"cards_box"}>
              <img src={"/icons/western_card.svg"} />
              <img src={"/icons/master_card.svg"} />
              <img src={"/icons/paypal_card.svg"} />
              <img src={"/icons/visa_card.svg"} />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
