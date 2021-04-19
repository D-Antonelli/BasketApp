import React, { useState, useEffect} from 'react';

const Item = ({ name, price, sendQty}) => {
    const [ totalCost, setTotalCost ] = useState(0);
    const [ qty, setQty ] = useState(0);
   
    const onQtyChange = (e) => {
        setQty(e.target.value);
    }


    useEffect(() => {
        setTotalCost(qty * price);
        sendQty(qty);     
    }, [qty]);


    return (
        <div className="item">
        <tr className="itemRow">
        <td>
          <h3>{name}</h3>  
        </td>
        <td>
         <input className="changeQuantity" size="2" maxLength="3" onChange={onQtyChange} value={qty}></input>   
        </td>
        <td className="cost">
          <h4>${totalCost}</h4>  
        </td>
        <td>
            <button>x</button>
        </td>
        </tr>
        </div>
        
    )
}


export default Item;