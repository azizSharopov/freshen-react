import { Box, Container, Stack } from "@mui/material";
import React from "react";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

export function WhyChoose() {
  const { isMobile } = useDeviceDetect();
  if (isMobile()) {
    return (
      <div>
        <Box sx={{ marginTop: "40px" }}>
          <Box className="home_top_mb">Why choose us</Box>
          <Box
            sx={{
              height: "700px",
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <Box
              className="home_why_choose"
              style={{
                width: "280px",
                height: "212px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="why_choose_icon">
                <img src="./icons/scooter.png" alt="why_choose" />
              </Box>
              <Box className="why_choose_tex">We drive fast & ship faster</Box>
              <Box className="why_choose_text">
                Sed semper convallis ultricies. Aliqua erat vol esent friday
                ngilla augue.
              </Box>
            </Box>
            <Box
              className="home_why_choose"
              style={{
                width: "280px",
                height: "212px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="why_choose_icon">
                <img src="./icons/cash.png" alt="why_choose" />
              </Box>
              <Box className="why_choose_tex">We save your more money</Box>
              <Box className="why_choose_text">
                Sed semper convallis ultricies. Aliqua erat vol esent friday
                ngilla augue.
              </Box>
            </Box>
            <Box
              className="home_why_choose"
              style={{
                width: "280px",
                height: "212px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="why_choose_icon">
                <img src="./icons/sale.png" alt="why_choose" />
              </Box>
              <Box className="why_choose_tex">Daily discount coupons</Box>
              <Box className="why_choose_text">
                Sed semper convallis ultricies. Aliqua erat vol esent friday
                ngilla augue.
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Box className="home_top">Why choose us</Box>
          <Stack
            sx={{
              height: "212px",
              marginTop: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box
              className="home_why_choose"
              style={{
                width: "280px",
                height: "212px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="why_choose_icon">
                <img src="./icons/scooter.png" alt="why_choose" />
              </Box>
              <Box className="why_choose_tex">We drive fast & ship faster</Box>
              <Box className="why_choose_text">
                Sed semper convallis ultricies. Aliqua erat vol esent friday
                ngilla augue.
              </Box>
            </Box>
            <Box
              className="home_why_choose"
              style={{
                width: "280px",
                height: "212px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="why_choose_icon">
                <img src="./icons/cash.png" alt="why_choose" />
              </Box>
              <Box className="why_choose_tex">We save your more money</Box>
              <Box className="why_choose_text">
                Sed semper convallis ultricies. Aliqua erat vol esent friday
                ngilla augue.
              </Box>
            </Box>
            <Box
              className="home_why_choose"
              style={{
                width: "280px",
                height: "212px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box className="why_choose_icon">
                <img src="./icons/sale.png" alt="why_choose" />
              </Box>
              <Box className="why_choose_tex">Daily discount coupons</Box>
              <Box className="why_choose_text">
                Sed semper convallis ultricies. Aliqua erat vol esent friday
                ngilla augue.
              </Box>
            </Box>
          </Stack>
        </Container>
      </div>
    );
  }
}
