import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Products.css";

const Products = () => {
  const [items, setItems] = useState("");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleBreakfastItem = () => {
    const item = products.filter("breakfast");
    setItems(item);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <div className="button-item">
          <a href="">Breakfast</a>
          <a className="mx-5" href="">
            Lunch
          </a>
          <a href="">Dinner</a>
        </div>
        {/* <button onClick={handleBreakfastItem}>Breakfast</button>
        <button className="mx-5">Lunch</button>
        <button>Dinner</button> */}
      </div>
      <div className="col product-grid">
        {products.map((item) => (
          <ProductItem item={item} key={item.id}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default Products;
