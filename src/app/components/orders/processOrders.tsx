import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Marginer from "../marginer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import moment from "moment";

// REDUX
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "../../screens/OrdersPage/selector";
import { useSelector } from "react-redux";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

export default function ProcessOrders(props: any) {
  /** INITIALIZATIONS */
  const { processOrders } = useSelector(processOrdersRetriever);

  /** HANDLERS **/
  const finishOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "FINISHED" };

      if (!verifiedMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Confirm that your order has been completed?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("finishOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };
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
        {processOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product.product_images[0]}`;
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
                          {product.product_name}
                        </p>
                      </Box>
                      <Box className={"priceBox"}>
                        <p style={{ color: "#86bc42" }}> ${item.item_price}</p>

                        <p>{item.item_quantity}</p>

                        <p>${item.item_price * item.item_quantity}</p>
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
                  <p>${order.order_total_amount - order.order_delivery_cost}</p>

                  <p>Shipping</p>
                  <p>${order.order_delivery_cost}</p>

                  <p>Totals</p>
                  <p
                    style={{
                      color: "#41544A",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    ${order.order_total_amount}
                  </p>
                </Box>
                <p className={"data_compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>

                <Button
                  value={order._id}
                  onClick={finishOrderHandler}
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
