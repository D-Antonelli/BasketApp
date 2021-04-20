import React, { useState, useEffect } from "react";

import Item from "./components/item";
import Title from "./components/title";

const App = () => {
  const [totalCost, setTotalCost] = useState(0);

  const [products, setProducts] = useState([
    {
      name: "Mountain Dew",
      cost: "$14.50",
      quantity: 2,
    },

    {
      name: "Desperados",
      cost: "$20.00",
      quantity: 6,
    },
    {
      name: "Jack Daniels",
      cost: "$18.75",
      quantity: 4,
    }
  ]);

  const resetToZero = () => {
    products.forEach((item) => (item.quantity = 0));
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
    <div className="App h-screen bg-indigo-200 text-lg overflow-hidden">
      {/*container*/}
      <div
        className="basket h-3/5 p-6 bg-purple-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-lg overflow-y-scroll"
        data-testid="basket"
      >
        {/* product title */}
        <Title />
        {/* basket*/}
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
        {/* basket totals */}
        <div className="totals flex flex-col items-end mt-5">
          <h3 className="font-bold">
            <span className="capitalize mr-5">subtotal:</span>$
            {totalCost.toFixed(2)}
          </h3>
          <div className="totals-btn-group mt-5">
            <button
              className="capitalize font-medium hover:underline"
              onClick={resetToZero}
            >
              clear
            </button>
            <button className="ml-4 capitalize border-2 py-2 px-8 font-medium rounded-xl bg-indigo-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default App;
