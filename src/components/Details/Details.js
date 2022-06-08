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
    // <>
    //   <div
    //     onClick={() => handleItems(item)}
    //     className="col-lg-4 col-md-6 col-12 text-decoration-none text-black"
    //   >
    //     <div className="text-center p-4 py-5 single-container">
    //       <img className="w-50 mx-auto" src={img} alt="" />
    //       <h5>{name}</h5>
    //       <p className="opacity-75">{des}</p>
    //       <p className="fw-bold">${price}</p>
    //     </div>
    //   </div>
    // </>
  );
};

export default Details;
