import React from "react";
import useData from "../Hook/useData";
import Details from "../Details/Details";
import "./Breakfast.css";

const Breakfast = () => {
  const [breakfast] = useData();

  return (
    <div>
      <h2>breakfast</h2>
      {breakfast.map((item) => (
        <Details item={item} key={item.id}></Details>
      ))}
    </div>
  );
};

export default Breakfast;
