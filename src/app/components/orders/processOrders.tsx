import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Marginer from "../marginer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import moment from "moment";

const pausedOrders = [[1, 2, 3, 4]];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Box className="order_text_head">PRODUCT</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "45%",
          }}
        >
          <span className="order_text_head">PRICE</span>
          <span className="order_text_head">QUANTITY </span>
          <span className="order_text_head">SUBTOTAL</span>
        </Box>
      </Stack>
      <Box sx={{ marginTop: "20px" }}></Box>
      <Marginer
        direction="horizontal"
        height="2"
        width="2"
        bg="#EAEAEA"
        opsty="1"
      />
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/shop_photo/bell-pepper.jpg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <Box className={"priceBox"}>
                        <Box sx={{ marginTop: "10px" }}>
                          <HighlightOffIcon />
                        </Box>
                        <img src={image_path} className={"orderProductImg"} />
                        <p
                          className={"titleProduct"}
                          style={{ textAlign: "start" }}
                        >
                          Bell-pepper
                        </p>
                      </Box>
                      <Box className={"priceBox"}>
                        <p style={{ color: "#86bc42" }}>$11</p>

                        <p>5</p>

                        <p>$55</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box
                className={"total_price_box black_solid"}
                sx={{ background: "#ebebeb" }}
              >
                <Box className={"boxTotal"}>
                  <p>Product price</p>
                  <p>$55</p>

                  <p>Shipping</p>
                  <p>$2</p>

                  <p>Totals</p>
                  <p style={{ color: "#86bc42", fontWeight: "600" }}>$57</p>
                </Box>
                <p className={"data_compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>

                <Button
                  variant="contained"
                  style={{
                    background: "#86bc42",
                    color: "#ffffff",
                    borderRadius: "4px",
                    fontWeight: "700",
                    fontSize: "13px",
                    boxShadow:
                      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  PLACE ORDER
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
