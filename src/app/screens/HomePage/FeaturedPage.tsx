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
      </Container>
    </div>
  );
}
