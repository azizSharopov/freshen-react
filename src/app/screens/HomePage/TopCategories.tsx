import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function TopCategories() {
  return (
    <div style={{ background: "#ffffff" }}>
      <Container>
        <Stack className="home_top_categ">
          <Box className="home_top">Top Categories Of The Month</Box>
          <Stack
            className="home_top_categories"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/groceries.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Food & Grocery</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/bread.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Bakery</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/salad.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Vegetables</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/pineapple.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Fruits</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/salmon.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Sea Food</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/steak.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Fresh Meat</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/egg.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Butter & Eggs</Box>
                </Box>
              </NavLink>
            </Box>
            <Box className="home_top_cat">
              <NavLink to="/food">
                <Box className="home_top_cat">
                  <Box className="home_top_icon">
                    <img src="./homepage/milk.png" alt="home_food" />
                  </Box>
                  <Box className="home_top_tex">Milks & Creams</Box>
                </Box>
              </NavLink>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
