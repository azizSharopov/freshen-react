import React, { useRef } from "react";
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
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import MemberApiService from "../../apiServices/memberApiService";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

// function createData(
//   Id: number,
//   Product: string,
//   Date: string,
//   Payment: string,
//   Status: string,
//   Total: string
// ) {
//   return { Id, Product, Date, Payment, Status, Total };
// }

// const rows = [
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
//   {
//     id: 1,
//     Product_name: "bell-pepper",
//     Data: "2 Iyun, 2023",
//     Product_price: "$4.99",
//     Product_existence: "In stock",
//     Total: "$4.99",
//   },
// ];

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

  const targetLikeTop = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberSetvice = new MemberApiService(),
        like_result: any = await memberSetvice.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      props.setOrderRebuild(new Date());

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
    } catch (err: any) {
      console.log("targetLikeTop ERROR:::", err);
      sweetErrorHandling(err).then();
    }
  };
  const chosenProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
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
                  Product_photo
                </TableCell>
                <TableCell
                  sx={{
                    width: "150px",
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
                    width: "100px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "5px",
                  }}
                >
                  Data
                </TableCell>

                <TableCell
                  sx={{
                    width: "200px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "15px",
                  }}
                >
                  ADD TO CART
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_data" sx={{ border: "none" }}>
              {/* {memberLikedProducts.map((product: Product, index) => {
          const image_url = `${serverApi}/${product.product_images[0].replace(
            /\\/g,
            "/"
          )}`;
          return ( */}
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
                      <HighlightOffIcon />
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
                        width: "50px",
                        fontSize: "16px",
                        fontFamily: "Lato",
                        color: "#86bc42",
                      }}
                    >
                      {product.discounted_price &&
                      product.product_discount?.isValid === true &&
                      product.product_discount?.type === "percentage" ? (
                        <Box className="product_price">
                          <Box className="product_price_current">
                            ${Math.floor(product.discounted_price)}{" "}
                          </Box>

                          <Box className="product_price_old">
                            {" "}
                            ${product.product_price}
                          </Box>
                          <Box className="product_price_value">
                            {product.product_discount?.value}%{" "}
                          </Box>
                        </Box>
                      ) : (
                        <Box className="product_price">
                          <Box className="product_price_current">
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
                        width: "50px",
                        fontSize: "16px",
                        fontFamily: "Lato",
                        color: "#41544A",
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
