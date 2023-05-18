import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import "../../../css/contact.css";
import Marginer from "../../components/marginer";

export function ContactPage() {
  return (
    <div style={{ background: "#ffffff" }}>
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
            <Box className="blog_page">Contact</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>Contact</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container
        sx={{
          height: "160px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Box className="contact_box">
          <Box sx={{ textAlign: "center" }}>
            <img src="/icons/map 1.png" alt="contact" />
          </Box>
          <Box className="contact_text">OUR STORE</Box>
          <Box className="contact_text1">
            Collins Street West, Victoria 8007, Australia.
          </Box>
        </Box>
        <Marginer
          direction="horizontal"
          height="1"
          width="2"
          bg="#EAEAEA"
          opsty="1"
        />
        <Box className="contact_box">
          <Box sx={{ textAlign: "center" }}>
            <img src="/icons/phone-call 1.png" alt="contact" />
          </Box>
          <Box className="contact_text">HOTLINE</Box>
          <Box className="contact_text1">998990070007</Box>
        </Box>
        <Marginer
          direction="horizontal"
          height="1"
          width="2"
          bg="#EAEAEA"
          opsty="1"
        />
        <Box className="contact_box">
          <Box sx={{ textAlign: "center" }}>
            <img src="/icons/email 1.png" alt="contact" />
          </Box>
          <Box className="contact_text">EMAIL CONTACT</Box>
          <Box className="contact_text1">order@freshen.com</Box>
        </Box>
        <Marginer
          direction="horizontal"
          height="1"
          width="2"
          bg="#EAEAEA"
          opsty="1"
        />{" "}
        <Box className="contact_box">
          <Box sx={{ textAlign: "center" }}>
            <img src="/icons/wall-clock 1.png" alt="contact" />
          </Box>
          <Box className="contact_text">Working Hours</Box>
          <Box className="contact_text1">
            <Box>Tuesday-Friday: 9:00-21:00 </Box>
            <Box>Saturday-Sunday: 11:00-22:00</Box>
          </Box>
        </Box>
      </Container>
      <div className="contact_map">
        <div className="contact_map_left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2101.483670841735!2d128.74860979874222!3d35.84012654268713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35660c6b13a8445f%3A0xe156ddac1165f65b!2z7Luk7ZS87ZSM66CI7J207IqkIOyYgeuCqOuMgOygkA!5e0!3m2!1sru!2skr!4v1677553801830!5m2!1sru!2skr"
            width="100%"
            height="724px"
            style={{ height: "724px" }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Stack className="contact_map_right">
          <Stack className={"admin_letter_box"}>
            <Stack className={"admin_letter_container"}>
              <Box className={"admin_letter_frame"}>
                <span>Have Questions? Get in touch!</span>
              </Box>
              <form
                action={"#"}
                method={"POST"}
                className={"admin_letter_frame"}
              >
                <div className={"admin_input_box"}>
                  <label>Name</label>
                  <input type={"text"} name={"mb_nick"} placeholder={"Name"} />
                </div>
                <div className={"admin_input_box"}>
                  <label>Email</label>
                  <input
                    type={"text"}
                    name={"mb_email"}
                    placeholder={"Email"}
                  />
                </div>
                <div className={"admin_input_box"}>
                  <label>Message</label>
                  <textarea name={"mb_msg"} placeholder={"Message"}></textarea>
                </div>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "30px" }}
                >
                  <Button
                    variant="contained"
                    type={"submit"}
                    style={{
                      width: "240px",
                      height: "50px",
                      background: "#86BC42",
                      borderRadius: "4px",
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: "#FFFFFF",
                      position: "relative",
                    }}
                  >
                    {" "}
                    GET IN TOUCH
                  </Button>
                </Box>
              </form>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
