import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import "./Lunch.css";

const Lunch = () => {
  const [lunches, setLunches] = useState([]);
  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setLunches(data));
  }, []);

  return (
    <div className="mt-3">
      <div className="col product-grid">
        {lunches.map((item) => (
          <Details item={item} key={item.id}></Details>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
