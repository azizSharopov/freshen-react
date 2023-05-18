import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";

export default function AccauntAddress() {
  const [isEditing, setIsEditing] = useState(false);

  const [addressValue, setAddressValue] = useState(`Daniel Robinson
1418 River Drive, Suite 35 Cottonhall, CA 9622
United States

sale@hitechmart.com
+3 8493 92 932 021`);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleAddressChange = (event: any) => {
    setAddressValue(event.target.value);
  };
  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "30px" }}>
        <span>Address</span>
      </Box>
      <Box
        className="dash_product_tab"
        sx={{
          width: "1000px",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "450px",
            }}
          >
            <span>Billing Address</span>{" "}
            {!isEditing ? (
              <Button
                className="dash_search_btn"
                onClick={handleEditClick}
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  boxShadow: "none",
                  width: "60px",
                  height: "20px",
                  marginLeft: "10px",
                  textDecoration: "underline",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "none",
                  },
                }}
              >
                Edit
              </Button>
            ) : (
              <Button
                className="dash_search_btn"
                onClick={handleSaveClick}
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  boxShadow: "none",
                  width: "60px",
                  height: "20px",
                  marginLeft: "10px",
                  textDecoration: "underline",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "none",
                  },
                }}
              >
                Save
              </Button>
            )}
          </Box>
          <Box>
            <textarea
              style={{ border: isEditing ? "1px solid black" : "none" }}
              className="billing_address"
              name="mb_address"
              value={addressValue}
              disabled={!isEditing}
              onChange={handleAddressChange}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "450px",
            }}
          >
            <span>Shipping Address</span>{" "}
            {!isEditing ? (
              <Button
                className="dash_search_btn"
                onClick={handleEditClick}
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  boxShadow: "none",
                  width: "60px",
                  height: "20px",
                  marginLeft: "10px",
                  textDecoration: "underline",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "none",
                  },
                }}
              >
                Edit
              </Button>
            ) : (
              <Button
                className="dash_search_btn"
                onClick={handleSaveClick}
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  boxShadow: "none",
                  width: "60px",
                  height: "20px",
                  marginLeft: "10px",
                  textDecoration: "underline",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "none",
                  },
                }}
              >
                Save
              </Button>
            )}
          </Box>
          <Box>
            <textarea
              style={{ border: isEditing ? "1px solid black" : "none" }}
              className="billing_address"
              name="mb_address"
              value={addressValue}
              disabled={!isEditing}
              onChange={handleAddressChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
