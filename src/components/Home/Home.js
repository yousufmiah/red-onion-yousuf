import React from "react";
import "./Home.css";
import banner from "../Assets/images/bannerbackground.png";
import Footer from "../Footer/Footer";
import Choose from "../Choose/Choose";
import Products from "../Products/Products";
import Breakfast from "../Breakfast/Breakfast";

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})`, height: "500px" }}
        className=" flex-column align-items-center d-flex justify-content-center home-color"
      >
        <div>
          <h2 className="text-center align-items-center">
            Best food waiting for your belly
          </h2>
        </div>
        <div>
          <nav className=" input-search navbar navbar-light bg-light">
            <form className="container-fluid">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <button
                  className="input-group-text btn btn-danger"
                  id="basic-addon1"
                >
                  Search
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
      <div className="container">
        <Products></Products>
        {/* <Breakfast></Breakfast> */}
        <Choose></Choose>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
