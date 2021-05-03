const TableHeaderRow = ({row1, row2, row3}) => {
  return (
    <table className="title-row hidden bg-gray-300 pt-2 pb-2 md:block">
      <thead>
        <tr>
          <td>
            <h3 className="w-96 capitalize font-bold">{row1}</h3>
          </td>
          <td>
            <h3 className="w-32 capitalize font-bold">{row2}</h3>
          </td>
          <td className="w-32 capitalize font-bold">{row3}</td>
        </tr>
      </thead>
    </table>
  );
};

export default TableHeaderRow;