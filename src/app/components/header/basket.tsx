import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Marginer from "../marginer";

const promote_list = [1, 2, 3];

export default function Basket(props: any) {
  /** INITIALIZATIONS **/
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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

  /** HANDLERS **/
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const processOrderHandler = async () => {};

  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={1} color="secondary">
          <img src="/icons/cart.svg" alt="cartcha" />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className={"basket_frame"}>
          <Box className={"all_check_box"}>
            {false ? <div>Cart is empty!</div> : <div>Your Cart</div>}{" "}
            <Button
              onClick={handleClose}
              className="x_btn"
              component="label"
              style={{
                minWidth: "0",
                width: "30px",
                height: "30px",
                backgroundColor: "#eaeaea",
                position: "absolute",
                top: "30px",
                left: "410px",
              }}
            >
              <img style={{ width: "15px" }} src="/icons/x.png" alt="upload" />
            </Button>
          </Box>

          <Box className={"orders_main_wrapper"}>
            <Box className={"orders_wrapper"}>
              {promote_list.map(() => {
                const image_path = "/homepage/laptop.png";
                return (
                  <>
                    <Box className={"basket_info_box"}>
                      <Button
                        className="x_btn"
                        component="label"
                        style={{
                          minWidth: "0",
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "-2px",
                          left: "390px",
                        }}
                      >
                        <img
                          style={{ width: "10px" }}
                          src="/icons/x.png"
                          alt="upload"
                        />
                      </Button>
                      <Box>
                        <img src={image_path} className={"product_img"} />
                      </Box>
                      <Box>
                        <Box>
                          <span className={"product_name"}>
                            Apple MacBook Pro with Apple M1 Chip
                          </span>
                        </Box>
                        <Box className="inc_box">
                          <Box
                            className="count_cart_buy "
                            sx={{ width: "90px", height: "35px" }}
                          >
                            <Box
                              className="add_change"
                              sx={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "17.5px",
                              }}
                              onClick={handle_cnt_minus}
                            >
                              -
                            </Box>
                            {product_cnt}
                            <Box
                              className="add_change"
                              sx={{ width: "35px", height: "35px" }}
                              onClick={handle_cnt_plus}
                            >
                              +
                            </Box>
                          </Box>

                          <Box sx={{ minWidth: 120 }}>
                            <span>$3.399</span>{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Marginer
                      direction="horizontal"
                      height="1"
                      width="2"
                      bg="#EAEAEA"
                      opsty="1"
                    />
                  </>
                );
              })}
            </Box>
          </Box>

          {true ? (
            <Box className={"to_order_box"}>
              <Marginer
                direction="horizontal"
                height="1"
                width="2"
                bg="#EAEAEA"
                opsty="1"
              />
              <Box>
                <span className={"price_text"}>Cart Total</span>
              </Box>
              <Box className="pricebox">
                Product Subtotal <span>$229</span>
              </Box>
              <Box className="pricebox">
                Order Discounts <span>-$30.01</span>
              </Box>
              <Box className="pricebox">
                Estimated Shipping <span>Free</span>
              </Box>
              <Marginer
                direction="horizontal"
                height="1"
                width="2"
                bg="#EAEAEA"
                opsty="1"
              />
              <Box className="pricebox" sx={{ fontWeight: "600" }}>
                Total <span>$229</span>
              </Box>
              <Button
                onClick={processOrderHandler}
                startIcon={<ShoppingCartIcon />}
                variant={"contained"}
                sx={{ color: "#041e42" }}
              >
                Place Order
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
