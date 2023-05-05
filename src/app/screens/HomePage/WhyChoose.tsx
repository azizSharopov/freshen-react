import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function WhyChoose() {
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
