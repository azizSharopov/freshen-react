import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import React from "react";
import Marginer from "../marginer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ClearIcon from "@mui/icons-material/Clear";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useHistory } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartItem } from "../../../types/others";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import OrderApiService from "../../apiServices/orderApiService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";

export default function Basket(props: any) {
  /** INITIALIZATIONS **/
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  // const Basket = (props: any) => {
  //   const { cartItems } = props;

  //   if (!cartItems || cartItems.length === 0) {
  //     // cartItems mavjud emas yoki bo'sh bo'lsa, shunday holatda qanday qilib ko'rsatishni belgilang
  //     return <div>Cart is empty!</div>;
  //   }

  const itemsPrice = cartItems.reduce(
    (a: any, c: CartItem) => a + c.price * c.quantity,
    0
  );
  console.log("itemsPrice:", itemsPrice);
  const shippingPrice = itemsPrice > 100 ? 0 : 5;
  const totalPrice = itemsPrice + shippingPrice;

  // const [product_cnt, setProduct_cnt] = React.useState(1);

  // React.useEffect(() => {
  //   console.log("test");
  // }, [product_cnt]);

  // /** HANDLERS **/
  // const handle_cnt_minus = (event: any) => {
  //   setProduct_cnt((prev) => prev - 1);
  // };
  // const handle_cnt_plus = (event: any) => {
  //   setProduct_cnt((prev) => prev + 1);
  // };

  // const processOrderHandler = async () => {};

  /** HANDLERS **/
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const processOrderHandler = async () => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);
      const order = new OrderApiService();
      await order.createOrder(cartItems);

      onDeleteAll();
      handleClose();

      props.setOrderRebuild(new Date());
      history.push("/orders");
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

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
        <Badge badgeContent={cartItems.length} color="secondary">
          <img src="/icons/cart.png" alt="cart" />
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
                background: "#d53f20",
                position: "absolute",
                top: "30px",
                left: "410px",
              }}
            >
              <HighlightOffIcon />
            </Button>
          </Box>

          <Box className={"orders_main_wrapper"}>
            <Box className={"orders_wrapper"}>
              {cartItems.map((item: CartItem) => {
                const image_path = `${serverApi}/${item.image}`;
                return (
                  <>
                    <Box className={"basket_info_box"}>
                      <Button
                        onClick={() => onDelete(item)}
                        className="x_btn"
                        component="label"
                        style={{
                          marginTop: "5px",
                          background: "#ffffff",
                          color: "#d53f20",
                          minWidth: "0",
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "-2px",
                          left: "390px",
                        }}
                      >
                        <HighlightOffIcon />
                      </Button>
                      <Box>
                        <img src={image_path} className={"product_img"} />
                      </Box>
                      <Box>
                        <Box>
                          <span
                            style={{ textTransform: "uppercase" }}
                            className={"product_name"}
                          >
                            {item.name}
                          </span>
                        </Box>
                        <Box className="inc_box">
                          <Box
                            style={{ marginTop: "7px" }}
                            onClick={() => onRemove(item)}
                          >
                            <RemoveCircleOutlineIcon />
                          </Box>

                          <Box
                            style={{ marginTop: "7px" }}
                            onClick={() => onAdd(item)}
                          >
                            <ControlPointIcon />
                          </Box>

                          <Box sx={{ marginLeft: "60px" }}>{item.quantity}</Box>
                          <Box style={{ marginTop: "7px" }}>
                            <ClearIcon />
                          </Box>
                          <Box sx={{ minWidth: 120 }}>
                            <span> ${item.price}</span>{" "}
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

          {cartItems.length > 0 ? (
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
                Product Subtotal <span>{itemsPrice}</span>
              </Box>

              <Box className="pricebox">
                Estimated Shipping <span>{shippingPrice}</span>
              </Box>
              <Marginer
                direction="horizontal"
                height="1"
                width="2"
                bg="#EAEAEA"
                opsty="1"
              />
              <Box
                className="pricebox"
                sx={{ fontWeight: "600", marginTop: "10px" }}
              >
                Total{" "}
                <span style={{ color: "#86bc42" }}>
                  ${totalPrice} ({itemsPrice} + {shippingPrice})
                </span>
              </Box>

              <Box className="add_card_basket" onClick={processOrderHandler}>
                <Box>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/icons/shopping-cart.png"
                    alt=""
                  />{" "}
                </Box>
                <Box>SHOPPING CART</Box>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
