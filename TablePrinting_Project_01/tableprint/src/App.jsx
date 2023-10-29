import { useState } from "react";
import { TableGenerate } from "./components/TableGenerate";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [order, setOrder] = useState(false);
  const [data, setData] = useState([]);

  const generateData = () => {
    let data = [];
    let count;
    order ? (count = row * col) : (count = 1);
    for (let i = 0; i < row; i++) {
      let rows = [];
      for (let j = 0; j < col; j++) {
        rows.push(order ? count-- : count++);
      }
      data.push(rows);
    }
    setData(data);
  };

  function togglerHandler() {
    setToggle((prev) => !prev);
    generateData();
  }
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col items-center  h-screen w-full">
        <div className="w-[70%] mx-auto border ">
          {/* Row And Column Div */}
          <div className="flex flex-row justify-center items-center gap-24 mt-7">
            <div className="flex items-center gap-4">
              <label
                htmlFor="large-input"
                className=" text-xl font-bold text-gray-900 "
              >
                Row:
              </label>
              <input
                type="number"
                id="large-input"
                onChange={(e) => {
                  e.target.value <= 20
                    ? setRow(e.target.value)
                    : toast.error("Enter Number Less Than 20");
                }}
                className="block py-4 justify-center border-cyan-700 border-2 font-extrabold text-2xl bg-gray-300 cursor-auto w-24"
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="large-input"
                className=" text-xl font-bold text-gray-900 "
              >
                Col:
              </label>
              <input
                type="number"
                id="large-input"
                onChange={(e) => {
                  e.target.value <= 20
                    ? setCol(e.target.value)
                    : toast.error("Enter Number Less Than 20");
                }}
                className="block py-4 justify-center border-cyan-700 border-2 font-extrabold text-2xl bg-gray-300 cursor-auto w-24"
              />
            </div>
          </div>
          {/* Radio Button Div */}
          <div className="flex flex-row  items-center justify-center gap-5 mt-7">
            <p className="font-semibold text-xl ">Order:</p>
            <div className="flex items-center ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                checked={order === false}
                onChange={() => setOrder((prev) => !prev)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-xl font-bold  text-gray-900 dark:text-gray-300"
              >
                Ascending
              </label>
            </div>
            <div className="flex items-center ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                checked={order === true}
                onChange={() => setOrder((prev) => !prev)}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-xl font-bold  text-gray-900 dark:text-gray-300"
              >
                Descending
              </label>
            </div>
            <button
              type="button"
              onClick={togglerHandler}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-lg px-5 py-4  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Process
            </button>
          </div>
          {/* Table Printing Div */}
          {toggle && <TableGenerate data={data}></TableGenerate>}
        </div>
      </div>
    </>
  );
}
