import React from "react";
import "./ChooseItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCar,
  faCartShopping,
  faGolfBall,
  faHouseCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const ChooseItem = (props) => {
  const { name, img, description } = props.item;
  return (
    <div className="choose-item ">
      <div className="text-center">
        <img src={img} alt="" />
      </div>
      <div className="d-flex mt-5">
        <div className="me-3">
          <FontAwesomeIcon className="f-icon" icon={faBell} />
        </div>
        <div className="text-left">
          <h5>{name}</h5>
          <p className="mt-3">{description}</p>
        </div>
      </div>

      {/* <Link>See more...</Link> */}
    </div>
  );
};

export default ChooseItem;
