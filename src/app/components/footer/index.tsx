import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Marginer from "../marginer";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

export function Footer() {
  const { isMobile } = useDeviceDetect();
  if (isMobile()) {
    return (
      <div
        className="freshen_footer"
        style={{
          backgroundColor: "#ffffff",
          height: "700px",
        }}
      >
        <Box className="footer">
          <Box
            sx={{
              // paddingTop: "100px",
              width: "100%",
              height: "338px",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "50px",
            }}
          >
            <Box className="follows" sx={{ width: "90%" }}>
              <Box>
                <img src="/icons/logo12.svg" alt="logo" />
              </Box>
              <Box className="service_link" sx={{ mt: "10px" }}>
                Collins Street West, Victoria 8007, Australia.
              </Box>

              <Box className="service_links" sx={{ mt: "5px" }}>
                <Box className="sns_icons">
                  <Box>
                    <img src="/icons/fs.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/tw.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/insta.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/youtube.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/p.png" alt="fc" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="footer_help"
              sx={{
                width: "80%",
                // marginLeft: "60px",
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box className="sec_name">NEED HELP</Box>
              <Box className="footer_phone_contact">
                <Box>
                  <img
                    src="/icons/phone-call.png"
                    alt="footer_phone"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Box>
                <Box className="footer_call">
                  <Box className="footer_phone">99899 007 00 01</Box>
                  <Box className="service_time">
                    <Box>Tuesday-Friday: 9:00-21:00 </Box>
                    <Box>Saturday-Sunday: 11:00-22:00</Box>
                  </Box>
                </Box>
              </Box>
              <Box className="footer_phone_contact" sx={{ mt: "70px" }}>
                <Box>
                  <img
                    src="/icons/Vector.png"
                    alt="footer_email"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Box>
                <Box className="service_link">oder@freshen.com</Box>
              </Box>
            </Box>

            <Box sx={{ mt: "50px" }}></Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box className="footer_ft_mb">
              <Box className="footer_ft2_mb">
                <img src="/icons/image 30.png" alt="cards" />
              </Box>
              <Box className="footer_ft1_mb">
                © 2023 Freshen. Made with love.
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div className="freshen_footer" style={{ backgroundColor: "#ffffff" }}>
        <Container className="footer">
          <Stack className="footer_head">
            <Box className="ft_head">
              <Box sx={{ width: "50px", height: "50px" }}>
                <img src="/icons/icon.png" alt="" />
              </Box>
              <Box className="ft_head_tex">
                <Box
                  className="ft_head_tex1"
                  sx={{ width: "284px", height: "30px" }}
                >
                  SIGN UP FOR NEWSLETTER
                </Box>
                <Box
                  className="ft_head_tex2"
                  sx={{ width: "366px", height: "30px" }}
                >
                  Subscribe to the weekly newsletter for all the latest updates
                </Box>
              </Box>
            </Box>

            <Box className="subscribtion">
              <Box className="subscribtion_input">
                <form action="">
                  <span className="subscribtion_input_color">
                    <input type="text" placeholder="Your Email..." />
                  </span>
                  <span>
                    <Button>Subscribe</Button>
                  </span>
                </form>
              </Box>
            </Box>
          </Stack>
          <Stack
            sx={{
              paddingTop: "100px",
              width: "1200px",
              height: "338px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box className="follows" sx={{ width: "172px" }}>
              <Box>
                <img src="/icons/logo12.svg" alt="logo" />
              </Box>
              <Box className="service_link" sx={{ mt: "40px" }}>
                Collins Street West, Victoria 8007, Australia.
              </Box>
              <Box sx={{ mt: "40px" }}>
                <NavLink className="service_link" to="/contact">
                  SHOW ON MAP
                </NavLink>
              </Box>
              <Box className="service_links" sx={{ mt: "20px" }}>
                <Box className="sns_icons">
                  <Box>
                    <img src="/icons/fs.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/tw.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/insta.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/youtube.png" alt="fc" />
                  </Box>
                  <Box>
                    <img src="/icons/p.png" alt="fc" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="footer_help">
              <Box className="sec_name">NEED HELP</Box>
              <Box className="footer_phone_contact">
                <Box>
                  <img
                    src="/icons/phone-call.png"
                    alt="footer_phone"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Box>
                <Box className="footer_call">
                  <Box className="footer_phone">99899 007 00 01</Box>
                  <Box className="service_time">
                    <Box>Tuesday-Friday: 9:00-21:00 </Box>
                    <Box>Saturday-Sunday: 11:00-22:00</Box>
                  </Box>
                </Box>
              </Box>
              <Box className="footer_phone_contact" sx={{ mt: "70px" }}>
                <Box>
                  <img
                    src="/icons/Vector.png"
                    alt="footer_email"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Box>
                <Box className="service_link">oder@freshen.com</Box>
              </Box>
            </Box>
            <Box className="footer_info">
              <Box className="sec_name">INFORMATION</Box>
              <Box className="service_links" sx={{ mt: "40px" }}>
                <Box className="service_link">Delivery Information</Box>
                <Box className="service_link">Privacy Policy</Box>
                <Box className="service_link">Terms & Conditions</Box>
                <Box className="service_link">Contact</Box>
                <Box className="service_link">Returns</Box>
                <Box className="service_link">Affilate</Box>
              </Box>
            </Box>
            <Box className="footer_account">
              <Box className="sec_name">ACCOUNT</Box>
              <Box className="service_links" sx={{ mt: "40px" }}>
                <Box className="service_link">My account</Box>
                <Box className="service_link">History</Box>
                <Box className="service_link">Wishlist</Box>
                <Box className="service_link">Shipping</Box>
                <Box className="service_link">Privacy Policy</Box>
                <Box className="service_link">Help</Box>
              </Box>
            </Box>
            <Box className="footer_stores">
              <Box className="sec_name">OUR STORES</Box>
              <Box className="service_links" sx={{ mt: "40px" }}>
                <Box className="service_link">New York</Box>
                <Box className="service_link">London SF</Box>
                <Box className="service_link">Los Angeles</Box>
                <Box className="service_link">Chicago</Box>
                <Box className="service_link">Las Vegas</Box>
              </Box>
            </Box>
          </Stack>
          <Stack sx={{ mt: "100px" }}></Stack>
          <Marginer
            direction="horizontal"
            height="1"
            width="2"
            bg="#EAEAEA"
            opsty="1"
          />
          <Stack className="footer_ft">
            <Box className="footer_ft1">© 2023 Freshen. Made with love.</Box>
            <Box className="footer_ft2">
              <img src="/icons/image 30.png" alt="cards" />
            </Box>
          </Stack>
        </Container>
      </div>
    );
  }
}
