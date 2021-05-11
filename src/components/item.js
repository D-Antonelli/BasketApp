import React, { useState, useEffect } from "react";

const Item = ({ name, cost, sendQty, quantity }) => {
  const [totalCost, setTotalCost] = useState(0);

  const onQtyChange = (e) => {
    let userQtyInput = e.target.value;
    //check if quantity is number && not floating number
    if (!isNaN(userQtyInput) && !userQtyInput.includes("." || "," || "-")) {
      sendQty(userQtyInput);
    }
  };

  useEffect(() => {
    setTotalCost(quantity * cost);
  }, [cost, quantity]);

  return (
    <React.Fragment className="item h-16 flex items-center" data-testid="item">
      <tr className="itemRow border-b-2">
        <td className="font-bold py-4">{name}</td>
        <td className="py-4">
          <input
            className="changeQuantity capitalize border rounded h-8 text-center"
            size="2"
            maxLength="3"
            onChange={onQtyChange}
            value={quantity}
          ></input>
        </td>
        <td className="cost py-4">
          ${totalCost >= 0 ? totalCost.toFixed(2) : NaN}
        </td>
        <td className="py-4">
          <button>x</button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Item;
