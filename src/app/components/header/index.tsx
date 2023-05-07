import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
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
  "Bakery",
  "Chocolate",
  "Cookies",
  "Coffee",
  "Fresh fruit",
  "Vegetables",
  "Meat",
  "Milks",
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
            <img src="/icons/logo.png" alt="logo" />
          </Box>
          <Box
            className="select"
            sx={{
              width: "740px",
              height: "50px",
              ml: "40px",
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
            <Box sx={{ paddingTop: "5px" }}>
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
            <Box className="icon_box">
              <NavLink style={{ marginTop: "8px" }} to="/login">
                <img src="./icons/default_user.png" alt="user" />
              </NavLink>
            </Box>
            <Box className="icon_box">
              <Badge badgeContent={3} color="secondary">
                <img src="./icons/heart.png" alt="heart" />
              </Badge>
            </Box>
            <Box className="icon_box">
              <Badge badgeContent={3} color="secondary">
                <img src="./icons/cart.png" alt="cart" />
              </Badge>
            </Box>
            <Box>
              {/* Total */}
              $244.99
            </Box>
            <Box className="icon_box">
              <Badge badgeContent={3} color="secondary">
                <NotificationsNoneRoundedIcon />
              </Badge>
            </Box>
          </Box>
        </Stack>

        <Marginer
          direction="horizontal"
          height="2"
          width="1"
          bg="#013113"
          opsty="0.1"
        />
        <Stack
          className="navbar_footer"
          sx={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box className="nav_footer">
            {/* {!verifiedMemberData ? ( */}
            <Button
              variant="contained"
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
              // onClick={() => setValue(!value)}
              onClick={props.handleSignUpOpen}
            >
              Sign up
            </Button>
            {/* ) : null} */}
          </Box>

          <Stack
            position={"relative"}
            display={"flex"}
            flexDirection={"row"}
            width={"40%"}
            height={"50px"}
            gap="30px"
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
          </Stack>

          <Stack sx={{ display: "flex", gap: "10px", flexDirection: "row" }}>
            <Box
              sx={{
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
                <img src="./icons/phone.png" alt="phone" />
              </Box>
              <Box className="nav_tex" sx={{ color: "#121212" }}>
                HOTLINE
              </Box>
            </Box>
            <Box className="nav_tex" sx={{ color: "#86BC42" }}>
              998990070007
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
