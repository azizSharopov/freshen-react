import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function GalleryPage() {
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
              src="./admin_photo/open.jpg"
              alt="our_gallery
            "
            />
          </Box>
          <Box className="home_gallery">
            <img
              style={{
                width: "240px",
              }}
              src="./admin_photo/asel.jpg"
              alt="our_gallery
            "
            />
          </Box>
          <Box className="home_gallery">
            <img
              style={{
                width: "230px",
              }}
              src="./admin_photo/call-center.jpg"
              alt="our_gallery
            "
            />
          </Box>
          <Box className="home_gallery">
            <img
              style={{
                width: "240px",
              }}
              src="./admin_photo/people-working.jpg"
              alt="our_gallery
            "
            />
          </Box>
          <Box className="home_gallery">
            <img
              style={{
                width: "240px",
              }}
              src="./admin_photo/delivy.jpg"
              alt="our_gallery"
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
