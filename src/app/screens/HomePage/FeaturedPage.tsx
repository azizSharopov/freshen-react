import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export function FeaturedPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      <Container>
        <Box className="home_top">Featured Products</Box>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          width={"100%"}
          sx={{ mt: "25px" }}
        >
          <Box className={"shop_filter_box"}>
            <Button
              className="button_tex"
              variant={"contained"}
              sx={{ "&:hover": { background: "#86bc42", color: "#ffffff" } }}
              onClick={() => "createdAt"}
            >
              All
            </Button>
            <Button
              className="button_tex"
              variant={"contained"}
              sx={{ "&:hover": { background: "#86bc42", color: "#ffffff" } }}
              onClick={() => "product_price"}
            >
              Butter & Eggs
            </Button>
            <Button
              className="button_tex"
              variant={"contained"}
              sx={{ "&:hover": { background: "#86bc42", color: "#ffffff" } }}
              onClick={() => "product_likes"}
            >
              Fruits
            </Button>
            <Button
              className="button_tex"
              variant={"contained"}
              sx={{ "&:hover": { background: "#86bc42", color: "#ffffff" } }}
              onClick={() => "product_views"}
            >
              Vegetables
            </Button>
            <Button
              className="button_tex"
              variant={"contained"}
              sx={{ "&:hover": { background: "#86bc42", color: "#ffffff" } }}
              onClick={() => "product_views"}
            >
              bread
            </Button>
          </Box>
        </Stack>
        <Stack>
          <Box className="products_slider">
            <Box className="products_slider_img_box">
              <img src="/homepage/smartwatch2.png" alt="" />

              <Box className="add_card_btn">
                <Box> Add to Cart</Box> <AddShoppingCartIcon />
              </Box>
              <Box className="like_view_box">
                <Box className="like_view_box2">
                  <Button
                    className={"like_view_btn"}
                    style={{ left: "36px" }}
                    disableTouchRipple
                  >
                    {/* hover -> */}
                    <Checkbox
                      icon={<FavoriteBorder style={{ color: "black" }} />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      checked={false}
                      disableTouchRipple
                    />
                  </Button>
                </Box>
                <Box className="like_view_box2">
                  <Button className={"like_view_btn"} disableTouchRipple>
                    <Checkbox
                      disableTouchRipple
                      style={{ top: "38px", left: "2px" }}
                      icon={
                        <VisibilityOutlinedIcon style={{ color: "black" }} />
                      }
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className="product_info">
              <Box className="brand_name">SAMSUNG</Box>
              <Box className="product_name">
                Apple Watch SE (GPS) 40mm Space Grey Aluminum Case with
              </Box>
              <Box className="product_reting">
                <Rating size="small" name="read-only" value={4} readOnly />
                <Box>3,014 reviews</Box>
              </Box>
              <Box className="product_price">
                <Box className="product_price_current">$32.50</Box>
                <Box className="product_price_old">$45</Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
