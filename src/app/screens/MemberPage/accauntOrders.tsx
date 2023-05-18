import React from "react";
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
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Cancel",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "In Progress",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
  {
    id: 1,
    Product: "Lenovo IdeaPad 3 15.6 Laptop - Sand ",
    Date: "Aug 15, 2020",
    Payment: "Paid",
    Status: "Delivered",
    Total: "$56.00",
  },
];

export default function AccauntOrders() {
  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "20px" }}>
        <span>Order</span>
      </Box>
      <Box className="dash_product_tab" sx={{ width: "1000px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#F3F5F6",
                  borderRadius: "6px",
                  mb: "10px",
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "10px",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "15px",
                  }}
                >
                  Order's products
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "17px",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "5px",
                  }}
                >
                  Payment
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "15px",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "15px",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                    paddingLeft: "15px",
                  }}
                >
                  Action
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
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                    }}
                    component="th"
                    scope="row"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                    }}
                  >
                    {row.Product}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                    }}
                  >
                    {row.Date}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                    }}
                  >
                    {row.Payment}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                      color:
                        row.Status === "Delivered"
                          ? "#00A3FF"
                          : row.Status === "Cancel"
                          ? "red"
                          : "orange",
                    }}
                  >
                    {row.Status}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                    }}
                  >
                    {row.Total}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Jost",
                      border: "none",
                    }}
                  >
                    <Button component="label" style={{ minWidth: "0" }}>
                      <img src="/icons/delete.png" alt="upload" />
                    </Button>
                    <Button
                      className="dash_search_btn"
                      sx={{
                        color: "#000000",
                        fontSize: "11px",
                        width: "40px",
                        height: "20px",
                        marginLeft: "10px",
                        border: "2px solid #f5c34b",

                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#f5c34b",
                        },
                      }}
                    >
                      cancel
                    </Button>
                    <Button
                      className="dash_search_btn"
                      sx={{
                        color: "#000000",
                        fontSize: "11px",
                        width: "40px",
                        height: "20px",
                        marginLeft: "10px",
                        border: "2px solid #f5c34b",

                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#f5c34b",
                        },
                      }}
                    >
                      payment
                    </Button>
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
