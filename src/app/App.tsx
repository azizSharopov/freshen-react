import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CommunityPage from "./screens/CommunityPage";

import { HelpPage } from "./screens/HelpPage";
import ShopPage from "./screens/ShopPage";
import { HomePage } from "./screens/HomePage";
import { NavbarCommon } from "./components/header";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css";
import "../css/socket.css";
import { AboutPage } from "./screens/AboutPage";
import { Footer } from "./components/footer";
import { ContactPage } from "./screens/ContactPage";

import AuthenticationModal from "./components";
import { Member } from "../types/user";
import { serverApi } from "../lib/config";

import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import MemberApiService from "./apiServices/memberApiService";
import "../app/apiServices/verify";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Product } from "../types/product";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { CartItem, ProductSearchObj } from "../types/others";
import { SocketChats } from "./components/socket/socketChat";

function App() {
  /** INITIALIZATIONS */
  const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(
    null
  );
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);

  useEffect(() => {
    console.log("=== useEffect: App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/icons/default_user.png";
      setVerifiedMemberData(member_data);
    }
  }, [signUpOpen, loginOpen]);

  const [targetProductsSearchObj, setTargetProductsSearchObj] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 20,
      order: "createdAt",
    });
  console.log("targetProductsSearchObjfdghg", targetProductsSearchObj);

  /** HANDLERS */
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  const handleLogOutRequest = async () => {
    try {
      const memberApiService = new MemberApiService();
      await memberApiService.logOutRequest();
      localStorage.removeItem("member_data");
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

  const onAdd = (product: Product) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === product._id
    );
    if (exist) {
      const cart_updated = cartItems.map((item: CartItem) =>
        item._id === product._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      if (product.discounted_result !== 0) {
        let discountedPrice = product.discounted_result;
        const new_item: CartItem = {
          _id: product._id,
          quantity: 1,
          name: product.product_name,
          price: discountedPrice,
          image: product.product_images[0],
        };
        const cart_updated = [...cartItems, { ...new_item }];
        setCartItems(cart_updated);
        localStorage.setItem("cart_data", JSON.stringify(cart_updated));
      } else {
        const new_item: CartItem = {
          _id: product._id,
          quantity: 1,
          name: product.product_name,
          price: product.product_price,
          image: product.product_images[0],
        };
        const cart_updated = [...cartItems, { ...new_item }];
        setCartItems(cart_updated);
        localStorage.setItem("cart_data", JSON.stringify(cart_updated));
      }
    }
  };

  const onRemove = (item: CartItem) => {
    const item_data: any = cartItems.find(
      (ele: CartItem) => ele._id === item._id
    );
    if (item_data.quantity === 1) {
      const cart_updated = cartItems.filter(
        (ele: CartItem) => ele._id !== item._id
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const cart_updated = cartItems.map((ele: CartItem) =>
        ele._id === item._id
          ? { ...item_data, quantity: item_data.quantity - 1 }
          : ele
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onDelete = (item: CartItem) => {
    const cart_updated = cartItems.filter(
      (ele: CartItem) => ele._id !== item._id
    );
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  };
  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cart_data");
  };

  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Router>
      <p className="top_btn" onClick={top}>
        <AirplanemodeActiveIcon />
      </p>
      <NavbarCommon
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
        verifiedMemberData={verifiedMemberData}
        handleLogOutClick={handleLogOutClick}
        handleCloseLogOut={handleCloseLogOut}
        handleLogOutRequest={handleLogOutRequest}
        anchorEl={anchorEl}
        open={open}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
        setOrderRebuild={setOrderRebuild}
      />
      {/* <nav>
          <ul>
            <li>
              <Link to="/shop">ShopPage</Link>
            </li>
            <li>
              <Link to="/community">CommunityPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">MemberPage</Link>
            </li>
            <li>
              <Link to="/help">HelpPage</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </ul>
        </nav> */}

      <Switch>
        <Route path="/shop">
          <ShopPage
            onAdd={onAdd}
            targetProductsSearchObj={targetProductsSearchObj}
            setTargetProductsSearchObj={setTargetProductsSearchObj}
          />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage
            orderRebuild={orderRebuild}
            setOrderRebuild={setOrderRebuild}
          />
        </Route>
        <Route path="/member-page">
          <MemberPage onAdd={onAdd} />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/">
          <HomePage
            onAdd={onAdd}
            targetProductsSearchObj={targetProductsSearchObj}
            setTargetProductsSearchObj={setTargetProductsSearchObj}
          />
        </Route>
      </Switch>
      <SocketChats />
      <Footer />
      <AuthenticationModal
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
        signUpOpen={signUpOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
