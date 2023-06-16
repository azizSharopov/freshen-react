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
import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Marginer from "../marginer";
import { verifiedMemberData } from "../../apiServices/verify";
import { Logout } from "@mui/icons-material";
import Basket from "./basket";
import ProductApiService from "../../apiServices/productApiService";
import { setTargetProducts } from "../../screens/ShopPage/slice";
import { Product } from "../../../types/product";
import { retrieveTargetProducts } from "../../screens/ShopPage/selector";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

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

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const targetProductsActionDispatch = (dispatch: Dispatch) => ({
  setTargetProducts: (data: Product[]) => dispatch(setTargetProducts(data)),
});

/** REDUX SELECTOR */
const targetProductsRetriever = createSelector(
  retrieveTargetProducts,
  (targetProducts) => ({
    targetProducts,
  })
);

export function NavbarCommon(props: any) {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const { setTargetProducts } = targetProductsActionDispatch(useDispatch());
  const { targetProducts } = useSelector(targetProductsRetriever);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleInputChange = (event: any) => {
    history.push(`/shop`);
    setSearchValue(event.target.value);
    const productService = new ProductApiService();

    productService
      .getTargetProductsBySearch(event.target.value)
      .then((data) => setTargetProducts(data))
      .catch((err) => console.log(err));

    setProductRebuild(new Date());
  };

  useEffect(() => {}, [productRebuild]);

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
          sx={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box className="logo">
            <img src="/icons/logo.svg" alt="logo" />
          </Box>
          <Box
            className="select"
            sx={{
              width: "490px",
              height: "50px",

              background: "white",
              display: "flex",
              flexDirection: "row",
              borderRadius: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <input
                className="searchinput"
                type="text"
                placeholder="Search products..."
                onChange={handleInputChange}
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
                      width: "30px",
                      height: "29px",
                    }}
                    src="/icons/1144.jpg"
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
            <Box
              className="hover-line"
              sx={{ marginLeft: "20px", marginTop: "5px" }}
            >
              <Link to="/member-page">
                <img src="/icons/heart.png" alt="heart" />
              </Link>
            </Box>
            <Box className="icon_box">
              <Basket
                cartItems={props.cartItems}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                onDelete={props.onDelete}
                onDeleteAll={props.onDeleteAll}
                setOrderRebuild={props.setOrderRebuild}
              />
            </Box>

            {/* <Box className="icon_box">
              <Badge badgeContent={3} color="secondary">
                <NotificationsNoneRoundedIcon />
              </Badge>
            </Box> */}
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
          {verifiedMemberData ? (
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
          ) : null}
          {verifiedMemberData ? (
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
          ) : null}
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
