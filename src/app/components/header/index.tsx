import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Marginer from "../marginer";
import Basket from "./basket";
import { verifiedMemberData } from "../../apiServices/verify";
import { Logout } from "@mui/icons-material";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Fruits",
  "Meats",
  "Fishs",
  "Vegetables",
  "Drinks",
  "Bakery",
  "Butter & Egges",
  "Milks & Creams",
  "Coffee & Tea",
  "Cookies",
  "Chocolates",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function NavbarCommon(props: any) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="freshen_navbar">
      <div className="navbar_header">
        <Container
          className="nav_header"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack
            className="nav_head"
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="nav_head1"
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src="/icons/phone-call.png" alt="phone" />
              </Box>
              <Box
                className="nav_text"
                sx={{
                  color: "#ffffff",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "30px",
                }}
              >
                +8210 8257 8505
              </Box>
            </Box>
            <Box
              className="nav_head1"
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src="/icons/Vector.png" alt="email" />
              </Box>
              <Box className="nav_text" sx={{ color: "#ffffff" }}>
                sharopovaziz23@gmail.com
              </Box>
            </Box>
          </Stack>
          <Stack
            className="nav_head"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            WE wish YOU the BEST
          </Stack>
          <Stack
            className="nav_head"
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="nav_head1"
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src="/icons/phone-call.png" alt="phone" />
              </Box>
              <Box
                className="nav_text"
                sx={{
                  color: "#ffffff",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "30px",
                }}
              >
                +8210 8257 8505
              </Box>
            </Box>
            <Box
              className="nav_head1"
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src="/icons/Vector.png" alt="email" />
              </Box>
              <Box className="nav_text" sx={{ color: "#ffffff" }}>
                sharopovaziz23@gmail.com
              </Box>
            </Box>
          </Stack>
        </Container>
      </div>
      <Container>
        <Stack
          className="navbar_middle"
          sx={{ width: "100%", flexDirection: "row" }}
        >
          <Box className="logo">
            <img src="/icons/logo.svg" alt="logo" />
          </Box>
          <Box
            className="select"
            sx={{
              width: "620px",
              height: "50px",
              ml: "20px",
              background: "white",
              display: "flex",
              flexDirection: "row",
              borderRadius: "6px",
            }}
          >
            <FormControl sx={{ m: 0, mb: 1, width: 130, height: 30 }}>
              <Select
                sx={{
                  mt: "0px",

                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },

                  fontSize: "15px",
                  color: "#041E42",
                }}
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em
                        className="nav_tex"
                        style={{
                          color: "#121212",
                        }}
                      >
                        All Category
                      </em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {" "}
                <MenuItem disabled value="">
                  <em className="searchselect">All Category</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ paddingTop: "10px" }}>
              <Marginer
                direction="vertical"
                height="30"
                width="1"
                bg="#D6D6D6"
                opsty="1"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <input
                className="searchinput"
                type="text"
                placeholder="Search products..."
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#86BC42",
                  borderRadius: "0px 4px 4px 0px",
                  width: "50px",
                  marginRight: "0px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <img src="/icons/search 1.png" alt="search" />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {!verifiedMemberData ? (
              <Box className="icon_box" onClick={props.handleLoginOpen}>
                <Box style={{ marginTop: "8px" }}>
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "24px",
                    }}
                    src="/icons/default_user.png"
                    alt="user"
                  />
                </Box>
                <Box className="login">Login</Box>
              </Box>
            ) : (
              <img
                style={{ width: "50px", height: "50px", borderRadius: "24px" }}
                src={verifiedMemberData.mb_image}
                onClick={props.handleLogOutClick}
              />
            )}
            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "#86bc42" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            <Box className="icon_box">
              <Badge badgeContent={3} color="secondary">
                <img src="/icons/heart.png" alt="heart" />
              </Badge>
            </Box>
            <Box className="icon_box">
              <Basket />
            </Box>
            <Box>
              {/* Total */}
              $99.99
            </Box>
            <Box className="icon_box">
              <Badge badgeContent={3} color="secondary">
                <NotificationsNoneRoundedIcon />
              </Badge>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Marginer
        direction="horizontal"
        height="2"
        width="1"
        bg="#013113"
        opsty="0.1"
      />
      <Container
        className="navbar_footer"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack className="nav_footer">
          {/* {!verifiedMemberData ? ( */}
          {!verifiedMemberData ? (
            <Button
              variant="contained"
              style={{
                width: "170px",
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
              // onClick={() => setValue(!value)}
              onClick={props.handleSignUpOpen}
            >
              Sign up
            </Button>
          ) : null}
          {/* ) : null} */}
        </Stack>

        <Stack
          position={"relative"}
          display={"flex"}
          flexDirection={"row"}
          width={"50%"}
          height={"60px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/"
              // activeClassName="underline"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
            >
              HOME
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/shop"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              SHOP
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/community"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              BLOGS
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/orders"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              ORDER
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/member-page"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              MY PAGE
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/help"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              INFO
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/about"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              ABOUT
            </NavLink>
          </Box>
          <Box className="hover-line" onClick={props.setPath}>
            <NavLink
              to="/contact"
              style={{
                color: "#121212",
                textDecoration: "none",
              }}
              activeClassName="underline"
            >
              CONTACT
            </NavLink>
          </Box>
        </Stack>

        <Stack sx={{ display: "flex", gap: "10px", flexDirection: "row" }}>
          <Box
            sx={{
              width: "100px",
              display: "flex",
              gap: "10px",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "16px",
            }}
          >
            <Box>
              <img src="/icons/phone.png" alt="phone" />
            </Box>
            <Box className="nav_tex" sx={{ color: "#121212" }}>
              HOTLINE
            </Box>
          </Box>
          <Box className="nav_tex" sx={{ color: "#86BC42" }}>
            998990070007
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
