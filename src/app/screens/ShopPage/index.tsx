import React from "react";
import { Container } from "@mui/material";
import "../../../css/shop.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AllProducts } from "./AllProducts";
import ChosenProduct from "./ChosenProduct";

export default function ShopPage(props: any) {
  const shop = useRouteMatch();
  return (
    <div style={{ background: "#ffffff" }}>
      <Switch>
        <Route path={`${shop.path}/:product_id`}>
          <ChosenProduct onAdd={props.onAdd} />
        </Route>
        <Route path={`${shop.path}`}>
          <AllProducts onAdd={props.onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
