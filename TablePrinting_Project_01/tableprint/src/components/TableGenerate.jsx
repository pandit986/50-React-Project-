export const TableGenerate = ({ data }) => {
  return (
    <div className="">
      <table className="w-full text-lg text-center mt-4 text-black ">
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
