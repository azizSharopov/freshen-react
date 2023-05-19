import React from "react";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Marginer from "../../components/marginer";
export default function AccauntCoupon() {
  return (
    <div>
      <Box className="coupon_setting_input_box">
        <label style={{ marginTop: "15px" }} className={"spec_label"}>
          <AccountBalanceWalletIcon />_ COUPON
        </label>
        <input
          style={{ zIndex: "2" }}
          className={"spec_input"}
          type="password"
          placeholder={"Coupon code"}
          name="new_mb_password"
        />
      </Box>
      <Button
        className="dash_search_btn"
        sx={{
          background: "#86BC42",
          zIndex: "3",
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "13px",
          lineHeight: "16px",
          color: "#FFFFFF",
          marginTop: "10px",
          width: "120px",
          height: "40px",
          marginLeft: "190px",
          textTransform: "none",
          "&:hover": {
            color: "#121212",
          },
        }}
      >
        <PointOfSaleIcon />
      </Button>
      <Box sx={{ marginTop: "50px", marginLeft: "50px" }}></Box>
      <Marginer
        direction="horizontal"
        height="1"
        width="2"
        bg="#EAEAEA"
        opsty="1"
      />
    </div>
  );
}
