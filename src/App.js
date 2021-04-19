import React, { useState, useEffect } from "react";
import "./App.css";

import Item from "./components/item";

const App = () => {
  const [totalCost, setTotalCost] = useState(0);

  const [products, setProducts] = useState([
    {
      name: "Mountain Dew",
      cost: "$9.99",
      quantity: 0,
    },

    {
      name: "Desperados",
      cost: "$15.50",
      quantity: 0,
    },
    {
      name: "Jack Daniels",
      cost: "$13.40",
      quantity: 0,
    },
  ]);

  const resetToZero = () => {
    products.forEach((item) => item.quantity = 0);
    setProducts([...products]);
  };

  const getTotalCost = (items) => {
    return items.reduce(
      (prev, curr) => prev + curr.cost.replace("$", "") * curr.quantity,
      0
    );
  };

  useEffect(() => {
    setTotalCost(getTotalCost(products));
  }, [products]);

  return (
    <div className="App">
      <div className="basket" data-testid="basket">
        <div className="items">
          {products.map((product, index) => (
            <Item
              key={index}
              name={product.name}
              sendQty={(qty) => {
                products[index].quantity = qty;
                setProducts([...products]);
              }}
              price={product.cost.replace("$", "")}
              quantity={product.quantity}
            ></Item>
          ))}
        </div>
        <div className="totals">
          <h3>${totalCost}</h3>
          <div className="totals-btn-group">
            <button
              onClick={() => {
                resetToZero(); 
              }}
            >
              clear
            </button>
            <button>checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
