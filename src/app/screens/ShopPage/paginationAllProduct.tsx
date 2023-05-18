import React from "react";
import { Box, Container, Pagination, PaginationItem } from "@mui/material";
import "../../../css/shop.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PaginationAllProducts() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
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
    </Box>
  );
}
