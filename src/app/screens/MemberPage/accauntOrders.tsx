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
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },

  {
    id: 1,
    Order: "#2418",
    Data: "2 Iyun, 2023",
    Actions: "Paid",
    Status: "Delivered",
    Total: "$148.99",
  },
];

export default function AccauntOrders() {
  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "20px" }}>
        <span>Order</span>
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
                    paddingLeft: "15px",
                  }}
                >
                  ORDER
                </TableCell>
                <TableCell
                  sx={{
                    width: "150px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "15px",
                  }}
                >
                  DATA
                </TableCell>
                <TableCell
                  sx={{
                    width: "150px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "17px",
                  }}
                >
                  STATUS
                </TableCell>
                <TableCell
                  sx={{
                    width: "200px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "5px",
                  }}
                >
                  TOTAL
                </TableCell>
                <TableCell
                  sx={{
                    width: "50px",
                    fontSize: "13px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                    paddingLeft: "15px",
                  }}
                >
                  ACTIONS
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
                      fontFamily: "Lato",
                      border: "none",
                    }}
                  >
                    {row.Order}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Lato",
                      border: "none",
                    }}
                  >
                    {row.Data}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Lato",
                      border: "none",
                      color:
                        row.Status === "Delivered"
                          ? "#86bc42"
                          : row.Status === "Cancel"
                          ? "red"
                          : "orange",
                    }}
                  >
                    {row.Status}
                  </TableCell>

                  <TableCell
                    sx={{
                      width: "200px",
                      fontSize: "13px",
                      fontFamily: "Lato",
                      border: "none",
                    }}
                  >
                    {row.Total}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "50px",
                      fontSize: "13px",
                      fontFamily: "Lato",
                      border: "none",
                    }}
                  >
                    <HighlightOffIcon />
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
