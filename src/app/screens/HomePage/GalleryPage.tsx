import { Box, Container, Stack } from "@mui/material";
import React from "react";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

export function GalleryPage() {
  const { isMobile } = useDeviceDetect();
  if (isMobile()) {
    return <Box></Box>;
  } else {
    return (
      <div>
        <Container>
          <Box className="home_top">Our Gallery</Box>
          <Stack
            sx={{
              height: "220px",
              marginTop: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box className="home_gallery">
              <img
                style={{
                  width: "240px",
                }}
                src="./homepage/blog9.jpg"
                alt="our_gallery
            "
              />
            </Box>
            <Box className="home_gallery">
              <img
                style={{
                  width: "240px",
                }}
                src="./homepage/blog4.jpg"
                alt="our_gallery
            "
              />
            </Box>
            <Box className="home_gallery">
              <img
                style={{
                  width: "230px",
                }}
                src="./homepage/blog2.jpg"
                alt="our_gallery
            "
              />
            </Box>
            <Box className="home_gallery">
              <img
                style={{
                  width: "240px",
                }}
                src="./homepage/blog6.jpg"
                alt="our_gallery
            "
              />
            </Box>
            <Box className="home_gallery">
              <img
                style={{
                  width: "240px",
                }}
                src="./homepage/blog1.jpg"
                alt="our_gallery"
              />
            </Box>
          </Stack>
        </Container>
      </div>
    );
  }
}
