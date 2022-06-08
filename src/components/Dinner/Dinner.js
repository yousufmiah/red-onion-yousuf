import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import "./Dinner.css";

const Dinner = () => {
  const [Dinners, setDinners] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinners(data));
  }, []);

  return (
    <div className="mt-3">
      <div className="col product-grid">
        {Dinners.map((item) => (
          <Details item={item} key={item.id}></Details>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
