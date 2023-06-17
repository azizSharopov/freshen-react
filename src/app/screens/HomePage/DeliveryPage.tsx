import { Box, Container, Stack } from "@mui/material";
import React from "react";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

export function DeliveryPage() {
  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box className="delivery_home_mb">
            <Box className="delivery_pic_mb">
              <img
                style={{
                  zIndex: "4",

                  width: "100px",
                  height: "70px",
                }}
                src="/icons/Group.png"
                alt=""
              />
            </Box>
            <Box
              className="delivery_tex_mb"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <img
                style={{ width: "30px", marginLeft: "70px" }}
                src="./icons/whatsapp.png"
                alt="delivery_home"
              />
              {/* <span className="delivery_text_mb">
                {" "}
                WHATSAPP ORDERING SERVICE – PLACE YOUR ORDERS AT
              </span> */}
              <span className="delivery_text_mb" style={{ color: "#86bc42" }}>
                99899 7110001
              </span>
            </Box>
          </Box>
        </Box>
      </div>
    );
  } else {
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
}
