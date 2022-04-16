import React, { useEffect, useState } from "react";
import "./Choose.css";
import ChooseItem from "../ChooseItem/ChooseItem";

const Choose = () => {
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    fetch("choose.json")
      .then((res) => res.json())
      .then((data) => setChoose(data));
  }, []);
  console.log(choose);
  return (
    <div className="container my-5 ">
      <div className="text-center my-5">
        <button className="btn btn-success px-5 py-3 ">
          Check out your Food
        </button>
      </div>
      <div>
        <h2>Why you choose us</h2>
        <p className="mb-5">
          Barton waited twenty always repair in within we do. An delighted
          offending <br /> curiosity my is dashwoods at. Boy prosperous
          increasing surrounded.
        </p>
      </div>
      <div className="choose-grid">
        {choose.map((item) => (
          <ChooseItem item={item} key={item.id}></ChooseItem>
        ))}
      </div>
    </div>
  );
};

export default Choose;
