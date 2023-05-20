import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";

const finishedOrders = [[1]];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_finish_box"}>
              <Box className={"orders_finish"}>
                <Box sx={{ textAlign: "center", marginTop: "50px" }}>
                  <img src="/icons/icons.png" alt="" />
                </Box>

                <Box
                  className={"orders_finish_text"}
                  sx={{ textAlign: "center" }}
                >
                  Your order is completed!
                </Box>
                <Box
                  className={"orders_finish_text1"}
                  sx={{ textAlign: "center" }}
                >
                  Thank you. Your order has been received.
                </Box>
              </Box>
              <Box className={"boxfinishTotal"}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="boxfinish_tex">Order Number</span>

                  <span className="boxfinish_tex1">13119</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="boxfinish_tex">Date</span>

                  <span className="boxfinish_tex1">27/11/2020</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="boxfinish_tex">Total</span>

                  <span className="boxfinish_tex1">$40.10</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="boxfinish_tex">Payment Method</span>

                  <span className="boxfinish_tex1">Direct Bank Transfer</span>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
