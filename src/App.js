import React, { useState, useEffect } from "react";
import "./App.css";

import Item from "./components/item";

const App = () => {
  const [ totalCost, setTotalCost ] = useState(0);
  const [ itemTotal, setItemTotal ] = useState(0);

  const [products] = useState([
    {
      name: 'Mountain Dew',
      cost: '$9.99',
    },

    {
      name: 'Desperados',
      cost: '$15.50'
    },
    {
      name: 'Jack Daniels',
      cost: '$13.40'
    }
  ]);

  useEffect(() => {
    setTotalCost(totalCost + itemTotal);
  }, [itemTotal])
  

  return (
    <div className="App">
      <div className="basket" data-testid="basket">
        <div className="items">
          {products.map((product, index) => (
            <Item
              key={index}
              name={product.name}
              sendData={setItemTotal}
              price={product.cost.replace("$", "")}
            ></Item>
          ))}
        </div>
        <div className="totals">
          <h3>{totalCost}</h3>
          <div className="totals-btn-group">
            <button>clear</button>
            <button>check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
