import React, { useEffect, useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  MenuItem,
  Pagination,
  Rating,
  Select,
  Stack,
} from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import { NavLink, useHistory } from "react-router-dom";
import Marginer from "../../components/marginer";
import { Favorite } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

// REDUX
import { createSelector } from "reselect";
import {
  retrieveChosenProduct,
  retrieveChosenShop,
  retrieveTargetProducts,
  retrieveTargetShops,
} from "../../screens/ShopPage/selector";
import { Shop } from "../../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenShop,
  setTargetProducts,
  setTargetShops,
  setChosenProduct,
} from "../../screens/ShopPage/slice";
import { verifiedMemberData } from "../../apiServices/verify";
import { Product } from "../../../types/product";
import { useParams } from "react-router-dom";
import { ProductSearchObj } from "../../../types/others";
import ProductApiService from "../../apiServices/productApiService";
import { serverApi } from "../../../lib/config";
import ShopApiService from "../../apiServices/shopApiService";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Review } from "../../../types/follow";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenShop: (data: Shop) => dispach(setChosenShop(data)),
  setTargetProducts: (data: Product[]) => dispach(setTargetProducts(data)),
  setTargetShops: (data: Shop[]) => dispach(setTargetShops(data)),
});

/** REDUX SELECTOR */
const targetShopsRetriever = createSelector(
  retrieveTargetShops,
  (targetShops) => ({
    targetShops,
  })
);

const chosenShopRetriever = createSelector(
  retrieveChosenShop,
  (chosenShop) => ({
    chosenShop,
  })
);
const targetProductsRetriever = createSelector(
  retrieveTargetProducts,
  (targetProducts) => ({
    targetProducts,
  })
);
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);

export function AllProducts(props: any) {
  /** INITIALIZATIONS */
  const history = useHistory();
  let { shop_id } = useParams<{ shop_id: string }>();
  const { setTargetShops, setChosenShop, setTargetProducts } = actionDispatch(
    useDispatch()
  );
  const { targetShops } = useSelector(targetShopsRetriever);
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenShop } = useSelector(chosenShopRetriever);
  const { targetProducts } = useSelector(targetProductsRetriever);
  const [chosenShopId, setChosenShopId] = useState<string>(shop_id);

  const [imageSrc, setImageSrc] = useState("/homepage/all_pro.jpg");
  // const [props.targetProductsSearchObj, props.setTargetProductsSearchObj] =
  //   useState<ProductSearchObj>({
  //     page: 1,
  //     limit: 20,
  //     order: "createdAt",
  //     shop_mb_id: shop_id,
  //   });
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const handlePaginationChange = (event: any, value: number) => {
    props.targetProductsSearchObj.page = value;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  useEffect(() => {
    const shopService = new ShopApiService();
    // shopService
    //   .getShops({ page: 1, limit: 20, order: "random" })
    //   .then((data) => setTargetShops(data))
    //   .catch((err) => console.log(err));

    // shopService
    //   .getChosenShop(chosenShopId)
    //   .then((data) => setChosenShop(data))
    //   .catch((err) => console.log(err));

    const productService = new ProductApiService();
    productService
      .getTargetProducts(props.targetProductsSearchObj)
      .then((data) => setTargetProducts(data))
      .catch((err) => console.log(err));
  }, [chosenShopId, props.targetProductsSearchObj, productRebuild]);

  /** HANDLERS */
  const chosenShopHandler = (id: string) => {
    setChosenShopId(id);
    props.targetProductsSearchObj.shop_mb_id = id;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
    history.push(`/shop/${id}`);
  };
  const shop_mb_nick = chosenShop?.mb_nick;

  const searchShopProductsHandler = (shop: string) => {
    props.targetProductsSearchObj.page = 1;
    props.targetProductsSearchObj.shop_mb_id = shop;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  const searchShopAllProductsHandler = (shop: string) => {
    props.targetProductsSearchObj.page = 1;
    props.targetProductsSearchObj.order = shop;
    props.targetProductsSearchObj.shop_mb_id = undefined;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };
  const searchOrderHandler = (order: string) => {
    props.targetProductsSearchObj.page = 1;
    props.targetProductsSearchObj.order = order;
    props.setTargetProductsSearchObj({ ...props.targetProductsSearchObj });
  };

  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };

  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: e.target.id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <div className="shopPage">
        <div>
          <img src="/homepage/image 28.png" alt="" />
        </div>
        <Container>
          <Box
            sx={{
              width: "135px",
              height: "91px",
              position: "absolute",
              marginTop: "62px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="shop_page">shop</Box>
            <Box className="shop_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>Shop</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "60px",
            marginTop: "50px",
          }}
        >
          <Stack
            className="shop_pro"
            style={{ width: "300px", height: "570px" }}
          >
            <Box className="shop_categ">PRODUCT CATEGORIES</Box>

            <Box
              className="shop_categ_text"
              onClick={() => {
                searchShopAllProductsHandler("createdAt");
                setImageSrc("/homepage/all_pro.jpg");
              }}
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
            >
              <span>All product</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopAllProductsHandler("product_likes");
                setImageSrc("/homepage/m-s.jpg");
              }}
            >
              <span>Best product</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopAllProductsHandler("product_price");
                setImageSrc("/homepage/price.jpg");
              }}
            >
              <span>Product price</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646b0d1dc88f933b56ca3fd1");
                setImageSrc("/homepage/fru.jpg");
              }}
            >
              <span>Fruits</span>
            </Box>

            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646b0d41c88f933b56ca3fd4");
                setImageSrc("/homepage/lamb.jpg");
              }}
            >
              <span>Meats</span>
            </Box>

            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646ba6e0af5977f07c502244");
                setImageSrc("/homepage/Seafood.jpg");
              }}
            >
              <span>Fish</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646ba70daf5977f07c502247");
                setImageSrc("/homepage/vege.jpg");
              }}
            >
              <span>Vegetables</span>
            </Box>

            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646bb01eaf5977f07c50224d");
                setImageSrc("/homepage/breads.jpg");
              }}
            >
              <span>Bakery</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646bb04faf5977f07c502250");
                setImageSrc("/homepage/eggbut.jpg");
              }}
            >
              <span>Butter & Egges</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("646ba793af5977f07c50224a");
                setImageSrc("/homepage/milkpro.jpg");
              }}
            >
              <span>Milks & Creams</span>
            </Box>
            <Box
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              className="shop_categ_text"
              onClick={() => {
                searchShopProductsHandler("6483315dff2df1ce67e83fee");
                setImageSrc("/homepage/coftea.jpg");
              }}
            >
              <span>Cofee & Tea</span>
            </Box>

            <Box
              className="shop_categ_text"
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              onClick={() => {
                searchShopProductsHandler("6483301dff2df1ce67e83fce");
                setImageSrc("/homepage/tom.jpg");
              }}
            >
              <span>Drinks</span>
            </Box>
            <Box
              className="shop_categ_text"
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "35px",
                color: "#121212",
              }}
              onClick={() => {
                searchShopProductsHandler("64832faaff2df1ce67e83fa4");
                setImageSrc("/homepage/nut.jpg");
              }}
            >
              <span>Chocolates</span>
            </Box>
          </Stack>
          <Box className="shop_ads">
            <img
              style={{ width: "900px", height: "600px" }}
              src={imageSrc}
              alt="shop_page"
            />
          </Box>
        </Stack>
        <Box sx={{ marginTop: "50px" }}></Box>
        <Marginer
          direction="horizontal"
          height="1"
          width="2"
          bg="#EAEAEA"
          opsty="1"
        />

        <Box className="count_sort_products_section">
          <Box className="count_products_section">
            <Box>
              {" "}
              Showing <span style={{ fontWeight: "600" }}>1–20</span> of{" "}
              <span style={{ fontWeight: "600" }}>{targetProducts.length}</span>{" "}
              results
            </Box>
            {/* <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">20</a>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">40</a>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">60</a>
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
            <Box>
              <a href="#">all</a>
            </Box> */}
          </Box>
          <Box className="sort_products_section">
            <Box>
              <FormControl
                sx={{
                  width: "100%",
                  background: "#ffffff",
                  border: "none",
                }}
                className="sort_select"
              >
                <Select
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    fontWeight: "700",
                    fontSize: "13px",
                    color: "#121212",
                  }}
                  value={"shop_prod_sort"}
                  className="sort_select"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"shop_prod_sort"}>Default sorting</MenuItem>
                  <MenuItem
                    value={"best"}
                    onClick={() => searchOrderHandler("product_likes")}
                  >
                    Sort by best seller
                  </MenuItem>
                  <MenuItem
                    value={"latest"}
                    onClick={() => searchOrderHandler("createdAt")}
                  >
                    Sort by latest
                  </MenuItem>
                  <MenuItem value={"sales"}>Sort by sales</MenuItem>
                  <MenuItem
                    value={"high"}
                    onClick={() => searchOrderHandler("product_price")}
                  >
                    Sort by price: low to high
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Stack
          className={"shop_pro_wrapper"}
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "40px",
          }}
        >
          {targetProducts.map((product: Product) => {
            const image_path = `${serverApi}/${product.product_images[0]}`;
            return (
              <Box
                className="shop_sliderbest"
                onClick={() => chosenProductHandler(product._id)}
                key={product._id}
                sx={{
                  border: "1px solid #ebebeb",
                  margin: "5px",
                }}
              >
                <Box className="shop_slider_img_best">
                  <img
                    style={{
                      backgroundSize: "cover",
                      width: "210px",
                      height: "210px",
                    }}
                    src={image_path}
                    alt=""
                  />
                  {product.discounted_price &&
                  product.product_discount?.isValid === true &&
                  product.product_discount?.type === "percentage" ? (
                    <Box
                      sx={{ zIndex: "5", position: "absolute" }}
                      className="product_sale_shop"
                    >
                      {product.product_discount?.value}%{" "}
                    </Box>
                  ) : null}
                  <Box
                    sx={{ marginBottom: "130px" }}
                    className="like_view_boxbest"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Checkbox
                      icon={<img src="/icons/heart_green.png" alt="" />}
                      id={product._id}
                      checkedIcon={<img src="/icons/heart_red.png" alt="" />}
                      onClick={targetLikeProduct}
                      /*@ts-ignore*/
                      checked={
                        product?.me_liked && product?.me_liked[0]?.my_favorite
                          ? true
                          : false
                      }
                    />
                  </Box>
                </Box>
                <Box className="product_infobest" sx={{ marginTop: "20px" }}>
                  <Box className="brand_namebest">
                    {product?.member_data[0]?.mb_nick}
                  </Box>
                  <Box className="product_retingbest">
                    <Rating
                      size="small"
                      name="read-only"
                      value={
                        product.reviews && product.reviews.length > 0
                          ? (product.reviews as Review[])[0]?.average_rating
                          : 0
                      }
                      readOnly
                    />
                  </Box>
                  <Box className="product_namebest">{product.product_name}</Box>

                  <Box>
                    {" "}
                    <Button
                      className={"add_card_btnbest"}
                      onClick={(e) => {
                        props.onAdd(product);
                        e.stopPropagation();
                      }}
                      sx={{
                        color: "#ffffff",
                        fontSize: "14px",
                        width: "240px",
                        height: "30px",
                        background: "#86bc42",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#86bc42",
                        },
                      }}
                    >
                      <img
                        src={"/icons/shopping-cart.png"}
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "700",
                          lineHeight: "16px",
                        }}
                      >
                        ADD TO CART
                      </span>
                    </Button>
                  </Box>

                  <Box className="product_pricebest">
                    {product.discounted_price &&
                    product.product_discount?.isValid === true &&
                    product.product_discount?.type === "percentage" ? (
                      <Box
                        className="product_price"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "15px",
                        }}
                      >
                        <Box
                          className="product_price_current"
                          sx={{
                            color: "#86bc42",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          ${product.discounted_price}{" "}
                        </Box>

                        <Box
                          className="product_price_old"
                          sx={{
                            textDecorationLine: "line-through",
                            color: "#7a7878",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          {" "}
                          ${product.product_price}
                        </Box>
                      </Box>
                    ) : (
                      <Box className="product_price">
                        <Box
                          className="product_price_current"
                          sx={{
                            color: "#86bc42",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          ${product.product_price}
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Pagination
            count={
              props.targetProductsSearchObj.page >= 3
                ? props.targetProductsSearchObj.page + 1
                : 3
            }
            page={props.targetProductsSearchObj.page}
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
            onChange={handlePaginationChange}
          />
        </Box>
      </Container>
    </div>
  );
}
