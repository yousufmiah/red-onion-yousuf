import React from "react";
import logo from "../Assets/images/logo2.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="pt-5 pb-5 ps-5 footer-container bg-dark">
      <div className=" logo-text">
        <div>
          <img style={{ height: "40px" }} src={logo} alt="" />
        </div>
        <div className="d-flex justify-content-around">
          <div className="footer-text ">
            <p>About Onion Food</p>
            <p>Read Our Blog</p>
            <p>Sign up to deliver</p>
            <p>Add your restaurant</p>
          </div>
          <div className="copyright ">
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>View All cities</p>
            <p>Restaurant near me</p>
          </div>
        </div>
      </div>

      <div className="copy-right mt-5">
        <div>
          <p>
            <small className="copy">Copyright @ Red Onion</small>
          </p>
        </div>
        <div className="d-flex justify-content-evenly">
          <p>
            <small>Privacy Policy.</small>
          </p>
          <p>
            <small>Terms of Use</small>
          </p>
          <p>
            <small>Pricing</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
