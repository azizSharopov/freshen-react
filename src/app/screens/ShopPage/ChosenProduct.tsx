import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Favorite } from "@mui/icons-material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Rating,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ReviewsComponent } from "./reviews";

import Marginer from "../../components/marginer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { BestPage } from "../HomePage/BestPage";

export default function ChosenPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  /** INITIALIZATIONS **/
  const [value, setValue] = React.useState("1");

  const [tabValue, settabValue] = React.useState("a");

  const [product_cnt, setProduct_cnt] = React.useState(1);

  React.useEffect(() => {
    console.log("test");
  }, [product_cnt]);
  /** HANDLERS **/
  const handle_cnt_minus = (event: any) => {
    setProduct_cnt((prev) => prev - 1);
  };
  const handle_cnt_plus = (event: any) => {
    setProduct_cnt((prev) => prev + 1);
  };
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handleChangetablist = (event: any, newValue: string) => {
    settabValue(newValue);
  };

  return (
    <div>
      <div className="ChosenPage">
        <div>
          <img src="/icons/imagechosen.png" alt="" />
        </div>
        <Container>
          <Box
            sx={{
              width: "334px",
              height: "24px",
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Box className="chosen_page">Home / Shop / </Box>
            <Box className="chosen_page"> Fruits / </Box>
            <Box className="chosen_page1">Pineapple (Tropical Gold) 1 lb </Box>
          </Box>
        </Container>
      </div>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            width: "520px",
            height: "678px",
          }}
        >
          <Box className="img_part_product">
            <Box className="img_part_product1">
              <Swiper
                // style={{
                //   "--swiper-navigation-color": "#fff",
                //   "--swiper-pagination-color": "#fff",
                // }}
                style={{ width: "420px", height: "420px" }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="/homepage/natural-part.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/homepage/garlic-white-surface.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/homepage/garlic.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/homepage/garlic-white-surface.jpg" />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Box>
          <Box>
            <Swiper
              // onSwiper={setThumbsSwiper}
              style={{ width: "516px", height: "121px" }}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper3"
            >
              <SwiperSlide>
                <img src="/homepage/garlic-white-surface.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/homepage/garlic.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/homepage/natural-part.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/homepage/garlic.jpg" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Stack>
        <Stack className="chosen_pro_info">
          <Box className="chosen_instock">
            <Box className="chosen_instock1">IN STOCK</Box>
          </Box>
          <Box className="chosen_pro_name">Pineapple (Tropical Gold) 1 lb</Box>
          <Box className="product_reting_chosen">
            <Rating size="small" name="read-only" value={4} readOnly />
            <Box>4,057 reviews</Box>
          </Box>
          <Box className="product_price_box">
            <Box>
              $17.99 <span>$21</span>
            </Box>
          </Box>
          <Box className="product_box_text">
            Feugiat malesuada a a elit varius diam hac ad penatibus tellus
            vivamus suscipit duis suspendisse diam ac adipiscing mauris.
          </Box>
          <Box className="add_cart_buy">
            <Box className="count_cart_buy">
              <Box className="add_change" onClick={handle_cnt_minus}>
                -
              </Box>
              {product_cnt}
              <Box className="add_change" onClick={handle_cnt_plus}>
                +
              </Box>
            </Box>
            <Box className="add_card_chosen">
              <Box>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/icons/shopping-cart.png"
                  alt=""
                />{" "}
              </Box>
              <Box>ADD TO CART</Box>
            </Box>
          </Box>
          <Box className="chosen_heart">
            <img src="/icons/heart.png" alt="chosen_heart" /> Add to Wishlist
          </Box>
          <Box sx={{ mt: "30px", mb: "20px" }}>
            <Box className="spes_box">
              <Box className="spes_type">SKU:</Box>
              <Box className="spes_value">OG1203</Box>
            </Box>
            <Box className="spes_box">
              <Box className="spes_type">Categories:</Box>
              <Box className="spes_value">Meats</Box>
            </Box>
            <Box className="spes_box">
              <Box className="spes_type">Share:</Box>
              <Box className="sns_icons">
                <Box>
                  <img src="/icons/fc.png" alt="fc" />
                </Box>
                <Box>
                  <img src="/icons/tw1.png" alt="fc" />
                </Box>
                <Box>
                  <img src="/icons/ins.png" alt="fc" />
                </Box>
                <Box>
                  <img style={{ width: "15px" }} src="/icons/tg.png" alt="fc" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>

        <Stack className="chosen_pro_info1">
          {" "}
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/fast.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                Free Delivery
              </span>
              <span>For all oders over $99</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/credit-card.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                Secure Payment
              </span>
              <span>100% secure payment</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/returning.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                7 Days Return
              </span>
              <span>If goods have problems</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info">
            <Box>
              <img src="/icons/support.png" alt="" />
            </Box>
            <Box className="chosen_delivery_info1">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "17px",
                  color: "#121212",
                }}
              >
                24/7 Support
              </span>
              <span>Dedicated support</span>
            </Box>
          </Box>
          <Box className="chosen_delivery_info" sx={{ marginTop: "180px" }}>
            <img
              style={{ height: "350px", width: "280px" }}
              src="/homepage/fresh-vegetab.jpg"
              alt=""
            />
          </Box>
        </Stack>
      </Container>
      <Container>
        <Stack sx={{ mt: "30px", width: "960px", height: "auto" }}>
          <TabContext value={tabValue}>
            <Box className="chosen_tablist">
              <TabList onChange={handleChangetablist}>
                <Tab
                  label={<Box className="chosen_tablist1">Description</Box>}
                  value={"1"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      borderBottom: "2px solid #000000",
                      borderColor: "#86bc42",
                    },
                  }}
                />
                <Tab
                  label={
                    <Box className="chosen_tablist1">
                      Additional information
                    </Box>
                  }
                  value={"2"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected ": {
                      color: "#000000;",
                      borderBottom: "2px solid #000000",
                      borderColor: "#86bc42;",
                    },
                  }}
                />
                <Tab
                  label={<Box className="chosen_tablist1"> Reviews (9)</Box>}
                  value={"3"}
                  className="tablist_style"
                  sx={{
                    "&.Mui-selected": {
                      color: "#000000;",
                      borderBottom: 2,
                      borderColor: "#86bc42;",
                    },
                  }}
                />
              </TabList>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box sx={{ marginTop: "50px" }}>
              <TabPanel value={"1"}>
                <Box className="desc_tab">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                </Box>
              </TabPanel>
              <TabPanel value={"2"}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TableContainer
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Table
                      style={{
                        display: "table",
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: "0 8px",
                      }}
                    >
                      <TableBody>
                        <TableRow
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #EBEBEB",
                          }}
                        >
                          <TableCell style={{ fontWeight: "600" }}>
                            Weight
                          </TableCell>
                          <TableCell>1 kg</TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #EBEBEB",
                          }}
                        >
                          <TableCell style={{ fontWeight: "600" }}>
                            Dimensions{" "}
                          </TableCell>
                          <TableCell>224 × 65 × 564 cm </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #EBEBEB",
                          }}
                        >
                          <TableCell style={{ fontWeight: "600" }}>
                            Brand{" "}
                          </TableCell>
                          <TableCell>Evoylink </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
              <TabPanel value={"3"}>
                <Box sx={{ display: "flex", gap: "110px" }}>
                  <Box>
                    <ReviewsComponent />
                  </Box>
                  <Box>
                    <Box className="write_review_section">
                      <Box className="write_review_box">
                        <Box className="count_of_review"> Add a review </Box>

                        <Box className="rating_select">
                          Your Rating{" "}
                          <Rating
                            size="small"
                            name="controlled"
                            value={4}
                            readOnly
                          />
                        </Box>
                        <Box className="rating_select"> Your Review</Box>
                        <Box className="write_review_box">
                          <textarea
                            name="comment_content"
                            className="comment_content"
                            value={""}
                          ></textarea>
                        </Box>
                        <Box className="review_submit_btn">SUBMIT</Box>
                      </Box>

                      <Box className="wrire_review_box"></Box>
                    </Box>
                  </Box>
                </Box>
              </TabPanel>
            </Box>
          </TabContext>
        </Stack>
      </Container>

      <div>
        <BestPage />
      </div>
    </div>
  );
}
