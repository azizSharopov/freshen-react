import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";
import { NavLink } from "react-router-dom";

export function Construction(props: any) {
  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div style={{ background: "#fffff" }}>
        <div className="mobile_v"></div>
        <Box className="mobile_v_text">
          <p className="mb_text">Mobil version is developing! 👨‍💻</p>
          <p className="mb_text">Please use our desktop version</p>
        </Box>
      </div>
    );
  } else {
    return null;
  }
}
