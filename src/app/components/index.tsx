import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { sweetErrorHandling } from "../../lib/sweetAlert";
import { Definer } from "../../lib/Definer";
import assert from "assert";
import MemberApiService from "../apiServices/memberApiService";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #86bc42",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function AuthenticationModal(props: any) {
  //**INITIALIZATIONS **/
  const classes = useStyles();

  const [mb_nick, set_mb_nick] = useState<string>("");
  const [mb_phone, set_mb_phone] = useState<number>(0);
  const [mb_password, set_mb_password] = useState<string>("");

  //**HANDLERS*/
  const handleUsername = (e: any) => {
    set_mb_nick(e.target.value);
    console.log(mb_nick);
  };
  const handlePhone = (e: any) => {
    set_mb_phone(e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password(e.target.value);
    console.log(mb_password);
  };

  const handleSignupRequest = async () => {
    try {
      const is_fulfilled = mb_nick != "" && mb_phone != 0 && mb_password != "";
      assert.ok(is_fulfilled, Definer.input_err1);
      const signup_data = {
        mb_nick: mb_nick,
        mb_phone: mb_phone,
        mb_password: mb_password,
      };
      console.log(mb_nick);
      const memberApiService = new MemberApiService();
      await memberApiService.signupRequest(signup_data);

      props.handleSignUpClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
      props.handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const is_fulfilled = mb_nick != "" && mb_password != "";
      assert.ok(is_fulfilled, Definer.input_err1);
      const login_data = {
        mb_nick: mb_nick,
        mb_password: mb_password,
      };
      console.log(mb_nick);
      const memberApiService = new MemberApiService();
      await memberApiService.loginRequest(login_data);

      props.handleLoginClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
      props.handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  const passwordKeyDownHandler = (e: any) => {
    if (e.key == "Enter" && props.signUpOpen) {
      handleSignupRequest();
    } else if (e.key == "Enter" && props.loginOpen) {
      handleLoginRequest();
    }
  };

  return (
    <div>
      {/*@ts-ignore*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.signUpOpen}
        onClose={props.handleSignUpClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.signUpOpen}>
          <Stack
            className={classes.paper}
            direction={"column"}
            sx={{ width: "500px", borderRadius: "6px" }}
          >
            <Box>
              <a
                style={{
                  fontWeight: "700px",
                  fontSize: "16px",
                  marginLeft: "50px",
                }}
              >
                Already registered?
              </a>
              <a
                onClick={() => {
                  props.handleLoginOpen();
                  props.handleSignUpClose();
                }}
                style={{ color: "#86bc42", marginLeft: "20px" }}
              >
                Login
              </a>
            </Box>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Sign up</h2>
              <TextField
                onChange={handleUsername}
                sx={{
                  marginTop: "8px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "121212",
                  width: "365px",
                  height: "55px",
                  marginBottom: "20px",
                }}
                id="filled-basic"
                label="User name"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#121212",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                  },
                }}
              />
              <TextField
                onChange={handlePhone}
                sx={{
                  marginTop: "8px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "121212",
                  width: "365px",
                  height: "55px",
                  marginBottom: "20px",
                }}
                id="filled-basic"
                label="User phone"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#121212",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                  },
                }}
              />
              <TextField
                onChange={handlePassword}
                onKeyPress={passwordKeyDownHandler}
                sx={{
                  marginTop: "8px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "121212",
                  width: "365px",
                  height: "55px",
                  marginBottom: "20px",
                }}
                id="filled-basic"
                label="User password"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#121212",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                  },
                }}
              />

              <Fab
                style={{
                  marginTop: "20px",
                  width: "200px",
                  height: "40px",
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
                onClick={handleSignupRequest}
                variant="extended"
                color="primary"
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      {/*@ts-ignore*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.loginOpen}
        onClose={props.handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.loginOpen}>
          <Stack
            className={classes.paper}
            direction={"column"}
            sx={{ width: "500px", borderRadius: "6px" }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Log in</h2>
              <TextField
                onChange={handleUsername}
                sx={{
                  marginTop: "8px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "121212",
                  width: "365px",
                  height: "55px",
                  marginBottom: "20px",
                }}
                id="filled-basic"
                label="User Name"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#121212",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                  },
                }}
              />
              <TextField
                onChange={handlePassword}
                sx={{
                  marginTop: "8px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "121212",
                  width: "365px",
                  height: "55px",
                  marginBottom: "20px",
                }}
                id="filled-basic"
                label="User password"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#121212",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                  },
                }}
                onKeyPress={passwordKeyDownHandler}
              />
              <Fab
                onClick={handleLoginRequest}
                style={{
                  marginTop: "20px",
                  width: "200px",
                  height: "40px",
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
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
