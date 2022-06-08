import React, { useEffect, useState } from "react";
import DinnerItem from "../DinnerItem/DinnerItem";
import "./Dinner.css";

const Dinner = () => {
  const { dinner, setDinner } = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return (
    <div>
      {dinner.map((item) => (
        <DinnerItem item={item} key={item.id}></DinnerItem>
      ))}
    </div>
  );
};

export default Dinner;
