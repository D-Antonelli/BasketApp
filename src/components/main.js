import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import Button from "./button";
import TableHeaderRow from "./tableHeaderRow";

const items = [
  {
    name: "Mountain Dew",
    cost: "24.90",
    quantity: 2,
  },

  {
    name: "Desperados",
    cost: "19.90",
    quantity: 1,
  },
  {
    name: "Jack Daniels",
    cost: "18.75",
    quantity: 2,
  },
];

const Main = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [products, setProducts] = useState(items);

  /* Reset items */
  const resetToZero = () => {
    let newArr = products.reduce((acc, obj) => {
      obj.quantity = 0;
      acc.push(obj);
      return acc;
    }, []);
    setProducts(newArr);
  };

  /* Update item quantity in product array */
  const refreshItemQty = (qty, itemIndex) => {
    let newArr = products.slice();
    newArr[itemIndex].quantity = qty;
    setProducts(newArr);
  };

  /* Retrive last basket settings upon page refresh */
  useEffect(() => {
    let cachedArray = JSON.parse(localStorage.getItem("array"));
    if (cachedArray) {
      setProducts(cachedArray);
    }
  }, []);

  /* Cache products in the local storage */
  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    setTotalCost(getTotalCost(products));
  }, [products]);

  const getTotalCost = (items) => {
    try {
      return items.reduce((prev, curr) => prev + curr.cost * curr.quantity, 0);
    } catch (e) {
      console.log("Array is null");
    }
  };

  return (
    <div className="basket h-3/5 p-6 bg-purple-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-lg overflow-y-scroll">
      {/* product title */}
      <TableHeaderRow row1="product" row2="quantity" row3="total" />
      {/* basket*/}
      <div className="items">
        {products &&
          products.length > 0 &&
          products.map((product, index) => (
            <Item
              key={index}
              name={product.name}
              sendQty={(qty) => refreshItemQty(qty, index)}
              cost={product.cost}
              quantity={product.quantity}
            ></Item>
          ))}
      </div>
      {/* basket totals */}
      <div className="totals flex flex-col items-end mt-5">
        <h3 className="font-bold">
          <span className="capitalize mr-5">subtotal:</span>$
          {(totalCost && totalCost.toFixed(2)) || 0}
        </h3>
        <div className="totals-btn-group mt-5">
          <button
            className="capitalize font-medium hover:underline"
            onClick={resetToZero}
          >
            clear
          </button>
          <Link to="/checkout">
            <Button label="checkout"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
