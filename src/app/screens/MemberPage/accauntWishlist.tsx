import React, { useEffect, useRef, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { retriveMemberLikedProducts } from "./selector";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import MemberApiService from "../../apiServices/memberApiService";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import ProductApiService from "../../apiServices/productApiService";
import { verifiedMemberData } from "../../apiServices/verify";
import { setMemberLikedProducts } from "./slice";

const actionDispatch = (dispach: Dispatch) => ({
  setMemberLikedProducts: (data: Product[]) =>
    dispach(setMemberLikedProducts(data)),
});

const memberLikedProductsRetriever = createSelector(
  retriveMemberLikedProducts,
  (memberLikedProducts) => ({
    memberLikedProducts,
  })
);

export default function AccauntWishlist(props: any) {
  const history = useHistory();
  const refs: any = useRef([]);
  const { memberLikedProducts } = useSelector(memberLikedProductsRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const { setMemberLikedProducts } = actionDispatch(useDispatch());

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getProductsMemberLiked(verifiedMemberData?._id)
      .then((data) => setMemberLikedProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };

  const targetLikeProduct = async (e: any, id: string) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberSetvice = new MemberApiService(),
        like_result: any = await memberSetvice.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      setProductRebuild(new Date());

      assert.ok(like_result, Definer.auth_err1);

      console.log("e.target::::", e.target);
      const refElement = refs.current[like_result.like_ref_id];
      if (refElement) {
        if (like_result.like_status > 0) {
          e.target.style.fill = "red";
          refElement.innerHTML++;
        } else {
          e.target.style.fill = "white";
          refElement.innerHTML--;
        }
      }

      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "20px" }}>
        <span>Wishlist</span>
      </Box>
      <Box className="dash_product_tab" sx={{ width: "900px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#ebebeb",
                  borderRadius: "6px",
                  mb: "10px",
                  width: "900px",
                }}
              >
                <TableCell
                  sx={{
                    width: "150px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  X
                </TableCell>
                <TableCell
                  sx={{
                    width: "150px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Product_photo
                </TableCell>
                <TableCell
                  sx={{
                    width: "250px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Product_name
                </TableCell>
                <TableCell
                  sx={{
                    width: "50px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Product_price
                </TableCell>

                <TableCell
                  sx={{
                    width: "200px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    width: "200px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  ADD TO CART
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_data" sx={{ border: "none" }}>
              {memberLikedProducts.map((product: Product, index) => {
                const image_url = `${serverApi}/${product.product_images[0]}`;
                console.log("productname", product?.product_name);

                return (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: "none",
                      },
                      border: "none",
                    }}
                  >
                    <TableCell
                      sx={{
                        width: "50px",
                        fontSize: "13px",
                        fontFamily: "Lato",
                      }}
                    >
                      <Box>
                        <HighlightOffIcon
                          onClick={(e) => {
                            targetLikeProduct(e, product._id);
                          }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "150px",
                        fontSize: "13px",
                        fontFamily: "Lato",
                      }}
                    >
                      {" "}
                      <Box
                        sx={{
                          width: "90px",
                          height: "90px",
                        }}
                      >
                        <img
                          style={{
                            backgroundSize: "cover",
                            width: "90px",
                            height: "90px",

                            border: "1px solid #86bc42",
                          }}
                          src={image_url}
                          alt="follow"
                        />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "150px",
                        fontSize: "16px",
                        fontFamily: "Lato",
                      }}
                    >
                      {" "}
                      {product.product_name}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "150px",
                        fontSize: "16px",
                        fontFamily: "Lato",
                        color: "#86bc42",
                      }}
                    >
                      {product.discounted_price &&
                      product.product_discount?.isValid === true &&
                      product.product_discount?.type === "percentage" ? (
                        <Box
                          className="product_price"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
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
                    </TableCell>

                    <TableCell
                      sx={{
                        width: "150px",
                        fontSize: "13px",
                        fontFamily: "Lato",
                      }}
                    ></TableCell>

                    <TableCell
                      sx={{
                        width: "250px",
                        height: "50px",
                        position: "relative",
                      }}
                    >
                      <Box
                        className="add_card_mypage"
                        onClick={(e) => {
                          props.onAdd(product);
                          e.stopPropagation();
                        }}
                      >
                        <Box>
                          <img
                            style={{ width: "20px", height: "20px" }}
                            src="/icons/shopping-cart.png"
                            alt=""
                          />{" "}
                        </Box>
                        <Box>ADD TO CART</Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
