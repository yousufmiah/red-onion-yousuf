import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../Assets/images/logo2.png";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img style={{ height: "40px" }} src={logo} alt="" />
          </Navbar.Brand>
          <Nav>
            <FontAwesomeIcon className="cart-icon me-3" icon={faCartShopping} />

            <Link to="/home">
              <Button className="btn btn-success px-4 me-4">Home</Button>
            </Link>
            {user ? (
              <Link to="/login">
                <Button
                  onClick={handleSignOut}
                  className="btn btn-danger px-4 me-4"
                >
                  SignOut
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="btn btn-danger px-4">Login</Button>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
