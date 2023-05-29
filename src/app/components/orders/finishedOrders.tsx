import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import moment from "moment";

// REDUX
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "../../screens/OrdersPage/selector";
import { useSelector } from "react-redux";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";

/** REDUX SELECTOR */
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

export default function FinishedOrders(props: any) {
  /** INITIALIZATIONS */
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order: Order) => {
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

                  <span className="boxfinish_tex1">
                    {" "}
                    {moment(order.createdAt).format("YY-MM-DD HH:mm")}
                  </span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="boxfinish_tex">Total</span>

                  <span className="boxfinish_tex1">
                    ${order.order_total_amount}
                  </span>
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
