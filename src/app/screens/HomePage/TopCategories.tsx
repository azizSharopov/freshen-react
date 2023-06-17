import { Box, Container, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Autoplay, Pagination, Navigation } from "swiper";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopShops } from "../../screens/HomePage/selector";
import { Shop } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import {
  retrieveChosenShop,
  retrieveTargetProducts,
  retrieveTargetShops,
} from "../../screens/ShopPage/selector";
import { useHistory } from "react-router-dom";

/** REDUX SELECTOR */
const topShopRetriever = createSelector(retrieveTopShops, (topShops) => ({
  topShops,
}));

// /** REDUX SLICE */
// const actionDispatch = (dispatch: Dispatch) => ({
//   setRandomShops: (data: Shop[]) => dispatch(setRandomShops(data)),
//   setChosenShop: (data: Shop) => dispatch(setChosenShop(data)),
//   setTargetProducts: (data: Product[]) => dispatch(setTargetProducts(data)),
// });
// /** REDUX SELECTOR */
// const randomShopsRetriever = createSelector(
//   retrieveRandomShops,
//   (randomShops) => ({
//     randomShops,
//   })
// );
// const chosenShopRetriever = createSelector(
//   retrieveChosenShop,
//   (chosenShop) => ({
//     chosenShop,
//   })
// );
// const targetProductsRetriever = createSelector(
//   retrieveTargetProducts,
//   (targetProducts) => ({
//     targetProducts,
//   })
// );

export function TopCategories(props: any) {
  const { topShops } = useSelector(topShopRetriever);
  console.log("topShops:::", topShops);
  const history = useHistory();

  const chosenShopHandler = (id: string) => {
    // setChosenShopId(id);
    history.push(`/shop`);
    props.targetProductsSearchObj.shop_mb_id = id;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  // const searchShopProductsHandler = (shop: string) => {
  //   targetProductsSearchObj.page = 1;
  //   targetProductsSearchObj.shop_mb_id = shop;
  //   setTargetProductsSearchObj({ ...targetProductsSearchObj });
  // };
  // const searchShopProductsHandler = (shop_mb_id) => {
  //  history.push(`/shop`);
  // };

  // let { shop_id } = useParams<{ shop_id: string }>();
  // const { setRandomShops, setChosenShop, setTargetProducts } = actionDispatch(
  //   useDispatch()
  // );
  // const { randomShops } = useSelector(randomShopsRetriever);
  // const { chosenShop } = useSelector(chosenShopRetriever);
  // const { targetProducts } = useSelector(targetProductsRetriever);
  // const [chosenShopId, setChosenShopId] = useState<string>(shop_id);

  // useEffect(() => {
  //   const shopService = new ShopApiService();
  //   shopService
  //     .getShops({ page: 1, limit: 10, order: "random" })
  //     .then((data) => setRandomShops(data))
  //     .catch((err) => console.log(err));

  //   shopService
  //     .getChosenShop(chosenShopId)
  //     .then((data) => setChosenShop(data))
  //     .catch((err) => console.log(err));

  //   const productService = new ProductApiService();
  //   productService
  //     .getTargetProducts(targetProductsSearchObj)
  //     .then((data) => setTargetProducts(data))
  //     .catch((err) => console.log(err));
  // }, [chosenShopId, targetProductsSearchObj, productRebuild]);

  // const chosenShopHandler = (id: string) => {
  //   setChosenShopId(id);
  //   targetProductsSearchObj.shop_mb_id = id;
  //   setTargetProductsSearchObj({ ...targetProductsSearchObj });
  //   history.push(`/shop/${id}`);
  // };
  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div style={{ background: "#ffffff", marginTop: "30px" }}>
        <Box className="home_top_categ_mb">
          <Box className="home_top_mb">Top Categories Of The Month</Box>
          <Box
            style={{ width: "100%", display: "flex", flexDirection: "row" }}

            // sx={{ mt: "10px" }}
          >
            <Box className={"prev_btn_mb shop-prev"}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: 20 }}
                style={{ color: "#41544A" }}
              />
            </Box>
            <Swiper
              className={"shop_avatars_wrapper_mb"}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".shop-next",
                prevEl: ".shop-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]} // Add Autoplay module
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {topShops.map((ele: Shop) => {
                const image_path = `${serverApi}/${ele.mb_image}`;
                return (
                  <SwiperSlide
                    // onClick={() => chosenShopHandler(ele._id)}
                    style={{ cursor: "pointer" }}
                    key={ele._id}
                    className={"shop_avatars"}
                  >
                    <Box className="home_top_cat_mb">
                      <Box className="home_top_icon_mb">
                        <img
                          style={{
                            backgroundSize: "cover",
                            width: "30px",
                            height: "30px",
                            transition:
                              "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
                          }}
                          src={image_path}
                          alt="home_food"
                        />
                      </Box>
                      <Box className="home_top_tex_mb">{ele.mb_nick}</Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box
              className={"next_btn_mb shop-next"}
              style={{ color: "#41544A" }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
            </Box>
          </Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div style={{ background: "#ffffff" }}>
        <Container className="home_top_categ">
          <Box className="home_top">Top Categories Of The Month</Box>
          <Stack
            style={{ width: "100%", display: "flex" }}
            flexDirection={"row"}
            sx={{ mt: "30px" }}
          >
            <Box className={"prev_btn shop-prev"}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: 40 }}
                style={{ color: "#41544A" }}
              />
            </Box>
            <Swiper
              className={"shop_avatars_wrapper"}
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".shop-next",
                prevEl: ".shop-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]} // Add Autoplay module
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {topShops.map((ele: Shop) => {
                const image_path = `${serverApi}/${ele.mb_image}`;
                return (
                  <SwiperSlide
                    onClick={() => chosenShopHandler(ele._id)}
                    style={{ cursor: "pointer" }}
                    key={ele._id}
                    className={"shop_avatars"}
                  >
                    <Box className="home_top_cat">
                      <Box className="home_top_icon">
                        <img
                          style={{
                            backgroundSize: "cover",
                            width: "57px",
                            height: "57px",
                            transition:
                              "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
                          }}
                          src={image_path}
                          alt="home_food"
                        />
                      </Box>
                      <Box className="home_top_tex">{ele.mb_nick}</Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box className={"next_btn shop-next"} style={{ color: "#41544A" }}>
              <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
            </Box>
          </Stack>
        </Container>
      </div>
    );
  }
}
