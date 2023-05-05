import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function DeliveryPage() {
  return (
    <div>
      <Container>
        <Stack className="delivery_home">
          <Box className="delivery_pic"></Box>
          <Box
            className="delivery_tex"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <img src="./icons/whatsapp.png" alt="delivery_home" />
            <span className="delivery_text">
              {" "}
              WHATSAPP ORDERING SERVICE – PLACE YOUR ORDERS AT
            </span>
            <span className="delivery_text" style={{ color: "#86bc42" }}>
              99899 7110001
            </span>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
