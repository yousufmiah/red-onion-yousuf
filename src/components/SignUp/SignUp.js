import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import banner from "../Assets/images/bannerbackground.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, hookerror] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // const navigateLogin = () => {
  //   navigate("./login");
  // };

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }

  const handleCreateSignInUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password is not match.");
      return;
    } else if (password.length < 6) {
      setError("Password Minimum 6 Characters.");
      return;
    } else {
      createUserWithEmailAndPassword(email, password);
      console.log(name, email, password);
    }
  };

  return (
    <div
      className="pt-4 bg-color"
      style={{ backgroundImage: `url(${banner})`, height: "100vh" }}
    >
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className=" container neo mx-auto w-25 justify-content-center "
      >
        <h2 className="text-center ">Sign Up</h2>
        <form onSubmit={handleCreateSignInUser}>
          <div className="form-container">
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required
            />
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="Password"
              id=""
              placeholder="Confirm Password"
              required
            />
            {error}
            <input className="btn btn-danger" type="submit" value="Sign Up" />
          </div>
        </form>
        <p className="mt-3 text-center">
          Already Have an Account?
          <Link to="/login" className="text-primary text-decoration-none ms-2">
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
