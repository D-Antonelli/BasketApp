const Title = () => {
  return (
    <table className="title-row hidden bg-gray-300 pt-2 pb-2 md:block">
      <tr>
        <td>
          <h3 className="w-96 capitalize font-bold">product</h3>
        </td>
        <td>
          <h3 className="w-32 capitalize font-bold">quantity</h3>
        </td>
        <td className="w-32 capitalize font-bold">total</td>
      </tr>
    </table>
  );
};

export default Title;