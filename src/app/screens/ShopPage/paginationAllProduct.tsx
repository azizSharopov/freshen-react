import React from "react";
import { Box, Container, Pagination, PaginationItem } from "@mui/material";
import "../../../css/shop.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function PaginationAllProducts() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
      <Pagination
        count={3}
        page={2}
        renderItem={(item) => (
          <PaginationItem
            className="pagination_item"
            components={{
              previous: ArrowBackIosIcon,
              next: ArrowForwardIosIcon,
            }}
            {...item}
            color="primary"
          />
        )}
      />
    </Box>
  );
}
