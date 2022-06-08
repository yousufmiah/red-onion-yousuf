import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { img, name, description, price } = props.item;
  return (
    <div className="card productItem">
      <img src={img} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <p className="card-text">
          <small>{description}</small>
        </p> */}
        <h5>{price}</h5>
        <button className="btn btn-primary">Details</button>
      </div>
    </div>
  );
};

export default ProductItem;
