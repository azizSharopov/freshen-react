import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export function SalePage(props: any) {
  const history = useHistory();
  const chosenShopHandler = (id: string) => {
    // setChosenShopId(id);
    history.push(`/shop`);
    props.targetProductsSearchObj.shop_mb_id = id;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };

  return (
    <div style={{ background: "#ffffff", marginTop: "70px" }}>
      <Container>
        <Stack
          className="sale_page"
          style={{ flexDirection: "row", marginTop: "20px" }}
        >
          <Box className="sale_page1">
            <Box
              className="sale_page_info"
              sx={{
                width: "285px",
                height: "151px",
                mt: "80px",
                ml: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box className="sale_page_info1">Fresh Fruit</Box>
              <Box
                className="sale_page_info2"
                sx={{ color: "#ffffff", width: "285px" }}
              >
                Fresh Summer With Just $99.99
              </Box>
              <NavLink to="/shop">
                <Box
                  className="sale_page_info3"
                  onClick={() => chosenShopHandler("646b0d1dc88f933b56ca3fd1")}
                >
                  {" "}
                  SHOP NOW
                </Box>
              </NavLink>
            </Box>
          </Box>

          <Box className="sale_page2">
            <Box
              className="sale_page_info"
              sx={{
                width: "188px",
                height: "151px",
                mt: "84px",
                ml: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                position: "relative",
              }}
            >
              <Box className="sale_page_info1" sx={{ color: "#121212" }}>
                Seasonal Sale
              </Box>
              <Box className="sale_page_info2" sx={{ width: "188px" }}>
                <Box sx={{ color: "#121212" }}>Up To Breads</Box>

                <span style={{ color: "#849D6A" }}>20% Off</span>
              </Box>

              <NavLink to="/shop">
                <Box
                  className="sale_page_info3"
                  onClick={() => chosenShopHandler("646bb01eaf5977f07c50224d")}
                >
                  {" "}
                  SHOP NOW
                </Box>
              </NavLink>
            </Box>
          </Box>

          <Box className="sale_page3">
            <Box
              className="sale_page_info"
              sx={{
                width: "188px",
                height: "151px",
                mt: "84px",
                ml: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                position: "relative",
              }}
            >
              <Box className="sale_page_info1" sx={{ color: "#121212" }}>
                Tasty Healthy
              </Box>
              <Box className="sale_page_info2" sx={{ width: "188px" }}>
                <Box sx={{ color: "#121212", width: "188", height: "40px" }}>
                  Fresh
                </Box>

                <span style={{ color: "#849D6A" }}>Vegetables</span>
              </Box>
              <NavLink to="/shop">
                <Box
                  className="sale_page_info3"
                  onClick={() => chosenShopHandler("646ba70daf5977f07c502247")}
                >
                  {" "}
                  SHOP NOW
                </Box>
              </NavLink>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
