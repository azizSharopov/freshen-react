import React from "react";
import { Box, Button, Container, Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const promote_list = [1, 2, 3, 4, 5, 6];
export default function AccauntWishlist() {
  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "30px" }}>
        <span>Wistlist</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "1050px",
        }}
      >
        {promote_list.map((ele, index) => {
          return (
            <Box className="products_slideronsale" sx={{ width: "251px" }}>
              <Button
                className="x_btn"
                component="label"
                style={{ minWidth: "0", backgroundColor: "#eaeaea" }}
              >
                <img
                  style={{ width: "15px" }}
                  src="/icons/x.png"
                  alt="upload"
                />
              </Button>
              <Box className="products_slider_img_boxonsale">
                <img src="/homepage/smartwatch2.png" alt="" />

                <Box
                  className="add_card_btnonsale"
                  sx={{ backgroundColor: "#F5C34B", color: "black" }}
                >
                  <Box>Add to Cart</Box> <AddShoppingCartIcon />
                </Box>
              </Box>
              <Box className="product_infoonsale">
                <Box className="brand_nameonsale">SAMSUNG{index}</Box>
                <Box className="product_nameonsale">
                  Apple Watch SE (GPS) 40mm Space Grey Aluminum Case with
                </Box>
                <Box className="product_retingonsale">
                  <Rating size="small" name="read-only" value={4} readOnly />
                  <Box>3,014 reviews</Box>
                </Box>
                <Box className="product_priceonsale">
                  <Box className="product_price_currentonsale">$32.50</Box>
                  <Box className="product_price_oldonsale">$45</Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
