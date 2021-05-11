import React from "react";

const TableHeaderRow = ({ row1, row2, row3 }) => {
  return (
    <React.Fragment>
      <tr className="bg-gray-300 title-row bg-gray-300">
        <th className="capitalize font-bold text-left py-2 w-1/2">{row1}</th>
        <th className="capitalize font-bold text-left py-2 w-1/4">{row2}</th>
        <th className="capitalize font-bold text-left py-2 w-1/4">{row3}</th>
        <th></th>
      </tr>
    </React.Fragment>
  );
};

export default TableHeaderRow;
