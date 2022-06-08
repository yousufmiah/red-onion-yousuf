import React, { useEffect, useState } from "react";

import Details from "../Details/Details";
import "./Breakfast.css";

const Breakfast = () => {
  const [breakfasts, setBreakfasts] = useState([]);
  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);

  return (
    <div className="mt-3">
      <div className="col product-grid">
        {breakfasts.map((item) => (
          <Details item={item} key={item.id}></Details>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
