import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import banner from "../Assets/images/bannerbackground.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate("/home");
  }

  const handleFormLogIn = (event) => {
    if (!user) {
      setError("email not found.");
    }
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  return (
    <div
      className="pt-4 bg-color"
      style={{ backgroundImage: `url(${banner})`, height: "100vh" }}
    >
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="container neo pt-4 mx-auto w-25 justify-content-center "
      >
        <h2 className="text-center ">Login</h2>
        <form onSubmit={handleFormLogIn}>
          <div className="form-container">
            <input
              onBlur={emailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />
            <input
              onBlur={passwordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
            {error}
            <input className="btn btn-danger" type="submit" value="Login" />
          </div>
        </form>
        <p className="mt-3 text-center">
          New to Red Onion?
          <Link to="/signUp" className="text-primary text-decoration-none ms-2">
            Please Sign Up
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
