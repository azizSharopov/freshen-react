import React from "react";
import { Container } from "@mui/material";
import "../../../css/blog.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import AllBlogs from "./allBlogs";
import ChosenBlog from "./chosenBlog";

export default function Community() {
  const blog = useRouteMatch();
  return (
    <div style={{ background: "#ffffff" }}>
      <Switch>
        <Route path={`${blog.path}/:blog_id`}>
          <ChosenBlog />
        </Route>
        <Route path={`${blog.path}`}>
          <AllBlogs />
        </Route>
      </Switch>
    </div>
  );
}
