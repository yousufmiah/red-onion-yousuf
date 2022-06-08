import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../../App";
import "./Details.css";

const Details = ({ item }) => {
  const [items, setItems] = useContext(ItemsContext);

  const navigate = useNavigate();

  const { name, img, description, price } = item || {};

  const handleItems = (item) => {
    navigate("/itemDetails");

    const newItem = [item];

    setItems(newItem);
  };

  return (
    <div className="card productItem">
      <img src={img} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <small>{description}</small>
        </p>
        <h5>{price}</h5>
        <button onClick={() => handleItems(item)} className="btn btn-primary">
          Details
        </button>
      </div>
    </div>
  );
};

export default Details;
