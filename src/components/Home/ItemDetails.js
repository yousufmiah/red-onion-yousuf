import React, { useContext } from "react";
import { ItemsContext } from "../../App";

const ItemDetails = () => {
  const [items] = useContext(ItemsContext);
  console.log(items);
  return (
    <div className="text-center">
      <h2>Details:</h2>
      <div>
        <img style={{ height: "400px" }} src={items?.img} alt="" />
        <h4>{items?.name}</h4>
        <p>{items?.description}</p>
        <h4>{items?.price}</h4>
      </div>
    </div>
  );
};

export default ItemDetails;
