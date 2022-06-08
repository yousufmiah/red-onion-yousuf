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

const Details = (props) => {
  const { img, name, description, price } = props.item;

  return (
    <div>
      <img src={img} alt="" />
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
