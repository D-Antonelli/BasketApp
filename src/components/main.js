import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import Item from "./item";
import TableHeaderRow from "./tableHeaderRow";


//https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
const items = [
  {
    name: "Mountain Dew",
    cost: "14.50",
    quantity: 2,
  },

  {
    name: "Desperados",
    cost: "20.00",
    quantity: 6,
  },
  {
    name: "Jack Daniels",
    cost: "18.75",
    quantity: 4,
  },
];

const Main = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [products, setProducts] = useState(items);

  /* Cache products in the local storage */
  const cacheProductList = (JSONList) => {
    localStorage.setItem("array", JSON.stringify(JSONList));
  };

  /* Reset items */
  const resetToZero = () => {
    let newArr = products.reduce((acc, obj) => {
      obj.quantity = 0;
      acc.push(obj);
      return acc;
    }, []);
    setProducts(newArr);
    cacheProductList(products);
  };

  /* Update item quantity in product array */
  const refreshItemQty = (qty, itemIndex) => {
    let newArr = products.slice();
    newArr[itemIndex].quantity = qty;
    setProducts(newArr);
    cacheProductList(products);
  };

  useEffect(() => {
    setTotalCost(getTotalCost(products));
  }, [products]);

  /* Retrive last basket settings upon page refresh */
  useEffect(() => {
    let cachedArray = JSON.parse(localStorage.getItem("array"));
    setProducts(cachedArray);
  }, []);

  const getTotalCost = (items) => {
    try {
      return items.reduce(
        (prev, curr) => prev + curr.cost.replace("$", "") * curr.quantity,
        0
      );
    } catch (e) {
      console.log("Array is null");
    }
  };

//   const onCheckout = () => {
//       return <Redirect to="/checkout"/>
//   }

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
              sendQty={(qty) => {
                refreshItemQty(qty, index);
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
          {(totalCost && totalCost.toFixed(2)) || 0}
        </h3>
        <div className="totals-btn-group mt-5">
          <button
            className="capitalize font-medium hover:underline"
            onClick={resetToZero}
          >
            clear
          </button>
           <Link
              to="/checkout"
            >
          <button className="ml-4 capitalize border-2 py-2 px-8 font-medium rounded-xl bg-indigo-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
