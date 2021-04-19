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
    <div className="item">
      <tr className="itemRow">
        <td>
          <h3>{name}</h3>
        </td>
        <td>
          <input
            className="changeQuantity"
            size="2"
            maxLength="3"
            onChange={onQtyChange}
            value={quantity}
          ></input>
        </td>
        <td className="cost">
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
