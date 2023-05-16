import React from "react";
import { Container } from "@mui/material";
import "../../../css/shop.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenBlog from "./chosenBlog";
import AllBlogs from "./allBlogs";

export default function Community() {
  const blog = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route path={`${blog.path}/:blog_id`}>
          <ChosenBlog />
        </Route>
        <Route path={`${blog.path}`}>
          <AllBlogs />
        </Route>
      </Switch>
    </Container>
  );
}
