import React from "react";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCar,
  faCartShopping,
  faGolfBall,
  faHouseCircleXmark,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h5>{price}</h5>
      <button>
        <FontAwesomeIcon className="f-icon" icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Details;
