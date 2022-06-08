import React from "react";
import "./Home.css";
import Menu from "../Home/Menu/Menu";
import Banner from "./Banner/Banner";
import CheckOut from "./CheckOut/CheckOut";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Menu></Menu>
      <CheckOut></CheckOut>
    </div>
  );
};

export default Home;
