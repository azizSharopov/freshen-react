import React from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

function createData(
  Id: number,
  member: string,
  phone: string,
  buying_rank: number
) {
  return {
    Id,
    member,
    phone,
    buying_rank,
  };
}

const rows = [
  {
    id: 1,
    member_name: "Raykhon Asadova",
  },
  {
    id: 1,
    member_name: "Dili",
  },
  {
    id: 1,
    member_name: "Nigor",
  },
  {
    id: 1,
    member_name: "Dunyo Azizova",
  },
  {
    id: 1,
    member_name: "Guli",
  },
];

export default function AccountFollowings(props: any) {
  return (
    <Box className="dash_tabpanels">
      <Box className="dash_head_text">
        <span>Following</span>
      </Box>
      <Box className="dash_search product_table">
        <TableContainer component={Paper}>
          <Table
            sx={{ width: "700px" }}
            size="small"
            aria-label="a dense table"
          >
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
                    width: "50px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                  }}
                >
                  N
                </TableCell>
                <TableCell
                  sx={{
                    width: "150px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Jost",
                  }}
                >
                  Photo
                </TableCell>
                <TableCell
                  sx={{
                    width: "300px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    width: "100px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Lato",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_data" sx={{ border: "none" }}>
              {rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": {},
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Lato",
                    }}
                    component="th"
                    scope="row"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                    }}
                  >
                    <Box
                      sx={{
                        width: "70px",
                        height: "70px",
                      }}
                    >
                      <img
                        style={{
                          backgroundSize: "cover",
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          border: "1px solid #86bc42",
                        }}
                        src="/homepage/portrait.jpg"
                        alt="follow"
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Lato",
                    }}
                  >
                    {row.member_name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Lato",
                    }}
                  >
                    <Button
                      className="dash_search_btn"
                      sx={{
                        color: "#ffffff",
                        fontSize: "13px",
                        width: "100px",
                        height: "25px",

                        backgroundColor: "#86bc42",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#ffffff",
                          border: "1px solid #eaeaea",
                          color: "#121212",
                        },
                      }}
                    >
                      Follow back
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
