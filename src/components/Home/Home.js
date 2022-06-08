import React from "react";
import "./Home.css";
import Menu from "../Home/Menu/Menu";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Menu></Menu>
    </div>
  );
};

export default Home;
