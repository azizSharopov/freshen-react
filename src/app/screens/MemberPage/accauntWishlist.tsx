import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Box,
  Container,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  PaginationItem,
  Button,
} from "@mui/material";

function createData(
  Id: number,
  Product: string,
  Date: string,
  Payment: string,
  Status: string,
  Total: string
) {
  return { Id, Product, Date, Payment, Status, Total };
}

const rows = [
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
  {
    id: 1,
    Product_name: "bell-pepper",
    Data: "2 Iyun, 2023",
    Product_price: "$4.99",
    Product_existence: "In stock",
    Total: "$4.99",
  },
];

export default function AccauntOrders() {
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
                    width: "50px",
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
                    width: "100px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "15px",
                  }}
                >
                  Existence
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
              {rows.map((row, index) => (
                <TableRow
                  key={row.id}
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
                        src="/shop_photo/bell-pepper.jpg"
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
                    {row.Product_name}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "50px",
                      fontSize: "16px",
                      fontFamily: "Lato",
                      color: "#86bc42",
                    }}
                  >
                    {row.Product_price}
                  </TableCell>

                  <TableCell
                    sx={{
                      width: "150px",
                      fontSize: "13px",
                      fontFamily: "Lato",
                    }}
                  >
                    {row.Data}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "50px",
                      fontSize: "16px",
                      fontFamily: "Lato",
                      color: "#41544A",
                    }}
                  >
                    {row.Product_existence}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "250px",
                      height: "50px",
                      position: "relative",
                    }}
                  >
                    <Box className="add_card_mypage">
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
