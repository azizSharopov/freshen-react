import React, { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckIcon from "@mui/icons-material/Check";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  MenuItem,
  Pagination,
  Rating,
  Select,
  Stack,
} from "@mui/material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import { NavLink } from "react-router-dom";
import Marginer from "../../components/marginer";
import { Favorite } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const products_list = Array.from(Array(20).keys());
console.log(products_list);

export function AllProducts() {
  return (
    <div>
      <div className="shopPage">
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
            <Box className="shop_page">shop</Box>
            <Box className="shop_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>Shop</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "60px",
            marginTop: "50px",
          }}
        >
          <Stack
            className="shop_pro"
            style={{ width: "300px", height: "570px" }}
          >
            <Box className="shop_categ">PRODUCT CATEGORIES</Box>
            <Box className="shop_categ_text">
              <span>Hot Offers</span>
              <span>(12)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>New Arrivals</span>
              <span>(23)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Fruits</span>
              <span>(34)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Vegetables</span>
              <span>(45)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Drinks</span>
              <span>(56)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Bakery</span>
              <span>(67)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Butter & Egges</span>
              <span>(78)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Milks & Creams</span>
              <span>(58)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Meats</span>
              <span>(34)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Fish</span>
              <span>(16)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Cofee & Tea</span>
              <span>(89)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Cookies</span>
              <span>(63)</span>
            </Box>
            <Box className="shop_categ_text">
              <span>Chocolates</span>
              <span>(49)</span>
            </Box>
          </Stack>
          <Stack className="shop_ads"></Stack>
        </Stack>
        <Box sx={{ marginTop: "50px" }}></Box>
        <Marginer
          direction="horizontal"
          height="1"
          width="2"
          bg="#EAEAEA"
          opsty="1"
        />

        <Box className="count_sort_products_section">
          <Box className="count_products_section">
            <Box>
              {" "}
              Showing <span style={{ fontWeight: "600" }}>1–20</span> of{" "}
              <span style={{ fontWeight: "600" }}>200</span> results
            </Box>
            {/* <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">20</a>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">40</a>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">60</a>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">all</a>
            </Box> */}
          </Box>
          <Box className="sort_products_section">
            <Box>
              <FormControl
                sx={{
                  width: "100%",
                  background: "#ffffff",
                  border: "none",
                }}
                className="sort_select"
              >
                <Select
                  sx={{
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
                    fontWeight: "700",
                    fontSize: "13px",
                    color: "#121212",
                  }}
                  value={"shop_prod_sort"}
                  className="sort_select"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"shop_prod_sort"}>Default sorting</MenuItem>
                  <MenuItem value={"best"}>Sort by best seller</MenuItem>
                  <MenuItem value={"latest"}>Sort by latest</MenuItem>
                  <MenuItem value={"sales"}>Sort by sales</MenuItem>
                  <MenuItem value={"high"}>Sort by price: low to high</MenuItem>
                  <MenuItem value={"low"}>Sort by price: high to low</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Stack
          className={"shop_pro_wrapper"}
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "40px",
          }}
        >
          {products_list.map((ele, index) => {
            return (
              <Box
                className="shop_sliderbest"
                sx={{
                  border: "1px solid #41544A",
                  margin: "5px",
                }}
              >
                <Box className="shop_slider_img_best">
                  <img
                    style={{
                      backgroundSize: "cover",
                      width: "200px",
                      height: "200px",
                    }}
                    src="/homepage/cucumber.jpg"
                    alt=""
                  />

                  <Box className="like_view_boxbest">
                    <Box className="like_view_box2best">
                      <Button
                        className={"like_view_btnbest"}
                        style={{ left: "36px" }}
                        disableTouchRipple
                      >
                        {/* hover -> */}
                        <Checkbox
                          icon={<FavoriteBorder style={{ color: "black" }} />}
                          id={`${index}`}
                          checkedIcon={<Favorite style={{ color: "red" }} />}
                          checked={false}
                          disableTouchRipple
                        />
                      </Button>
                    </Box>
                    <Box className="like_view_box2best"></Box>
                  </Box>
                </Box>
                <Box className="product_infobest">
                  <Box className="brand_namebest">FRUITS</Box>
                  <Box className="product_retingbest">
                    <Rating size="small" name="read-only" value={4} readOnly />
                  </Box>
                  <Box className="product_namebest">
                    Fresh Strawberry - 100% Organic. Natural
                  </Box>
                  <Box className="add_card_btnbest">
                    <Box>
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src="./icons/shopping-cart.png"
                        alt=""
                      />{" "}
                    </Box>
                    <Box>ADD TO CART</Box>
                  </Box>
                  <Box className="product_pricebest">
                    <Box className="product_price_currentbest">$11.99</Box>
                    <Box className="product_price_oldbest">$15</Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
        <Stack className="shop_pagination">
          <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color="secondary"
              />
            )}
          />
        </Stack>
      </Container>
    </div>
  );
}
