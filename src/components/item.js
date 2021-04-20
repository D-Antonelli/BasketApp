import React, { useState, useEffect } from "react";

const Item = ({ name, price, sendQty, quantity}) => {
  const [totalCost, setTotalCost] = useState(0);

  const onQtyChange = (e) => {
      let userQtyInput = e.target.value;
      //check if quantity is number && not floating number
      if(!isNaN(userQtyInput) && !userQtyInput.includes("." || ",")) {
        sendQty((userQtyInput));
      }
  };

  useEffect(() => {
    setTotalCost(quantity* price);
  }, [price, quantity]);

  return (
    <div className="item h-16 flex items-center border-b-2">
      <tr className="itemRow">
        <td className="w-96">
          <h3 className="font-bold">{name}</h3>
        </td>
        <td className="w-32">
          <input
            className="changeQuantity capitalize border rounded h-8 text-center"
            size="2"
            maxLength="3"
            onChange={onQtyChange}
            value={quantity}
          ></input>
        </td>
        <td className="cost w-32">
          <h4>${totalCost}</h4>
        </td>
        <td>
          <button>x</button>
        </td>
      </tr>
    </div>
  );
};

export default Item;
