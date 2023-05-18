import { Box, Container } from "@mui/material";
import React from "react";

export function ContactPage() {
  return (
    <div>
      <div className="blogPage">
        <div>
          <img src="/homepage/image 28.png" alt="" />
        </div>
        <Container>
          <Box
            sx={{
              width: "135px",
              height: "91px",
              position: "absolute",
              marginTop: "62px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="blog_page">My_Page</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>My_page</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
