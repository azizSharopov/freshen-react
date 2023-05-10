import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function SalePage() {
  return (
    <div style={{ background: "#ffffff", marginTop: "70px" }}>
      <Container>
        <Stack
          className="sale_page"
          style={{ flexDirection: "row", marginTop: "20px" }}
        >
          <Box className="sale_page1">
            <Box
              className="sale_page_info"
              sx={{
                width: "285px",
                height: "151px",
                mt: "84px",
                ml: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="sale_page_info1">Fresh Fruit</Box>
              <Box
                className="sale_page_info2"
                sx={{ color: "#ffffff", width: "285px" }}
              >
                Fresh Summer With Just $99.99
              </Box>
              <Box className="sale_page_info3">
                <NavLink className="service_link" to="/our_stores">
                  SHOP NOW
                </NavLink>
              </Box>
            </Box>
          </Box>

          <Box className="sale_page2">
            <Box
              className="sale_page_info"
              sx={{
                width: "188px",
                height: "151px",
                mt: "54px",
                ml: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                position: "relative",
              }}
            >
              <Box className="sale_page_info1" sx={{ color: "#121212" }}>
                Seasonal Sale
              </Box>
              <Box className="sale_page_info2" sx={{ width: "188px" }}>
                <Box sx={{ color: "#121212", width: "188", height: "40px" }}>
                  Up To Breads
                </Box>

                <span style={{ color: "#849D6A" }}>20% Off</span>
              </Box>
              <Box className="sale_page_info3">
                <NavLink
                  className="service_link"
                  to="/our_stores"
                  style={{ color: "#121212" }}
                >
                  SHOP NOW
                </NavLink>
              </Box>
            </Box>
          </Box>
          <Box className="sale_page3">
            <Box
              className="sale_page_info"
              sx={{
                width: "188px",
                height: "151px",
                mt: "54px",
                ml: "80px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                position: "relative",
              }}
            >
              <Box className="sale_page_info1" sx={{ color: "#121212" }}>
                Tasty Healthy
              </Box>
              <Box className="sale_page_info2" sx={{ width: "188px" }}>
                <Box sx={{ color: "#121212", width: "188", height: "40px" }}>
                  Fresh
                </Box>

                <span style={{ color: "#849D6A" }}>Vegetables</span>
              </Box>
              <Box className="sale_page_info3">
                <NavLink
                  className="service_link"
                  to="/our_stores"
                  style={{ color: "#121212" }}
                >
                  SHOP NOW
                </NavLink>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
