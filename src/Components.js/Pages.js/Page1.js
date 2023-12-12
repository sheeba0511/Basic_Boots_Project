import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

import Intro from "../Layout.js/Intro";
import Compo from "../Layout.js/Compo";
import Forms from "../Layout.js/Forms";
import Content from "../Layout.js/Content";
import NotFound from "../Layout.js/NotFound";
export default function Page1() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/introduction" element={<Intro />}></Route>
          <Route path="/components" element={<Compo />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/content" element={<Content />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>{" "}
      {/* Router DOM :-- There are 3 points to relocate  through URL.
      1- BrowserRouter (Grandparent)
      2- Router(Parent)
      3- Route(Child)
      There are 3 route bcz we have 3 pages (Home.js,Login.js, Register.js ).
      In Component we use the props And in this route there are 2 props (Path, Element) */}
    </>
  );
}
