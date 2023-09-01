import React, { useReducer } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Pagintaion({ current, setPage, limit }) {
  const active =
    "ml-2  w-12 tracking-wide rounded-full bg-primary text-white  flex justify-center align-center items-center h-12";
  const deactive =
    "ml-2  w-12 tracking-wide rounded-full bg-primary opacity-60 text-white flex justify-center align-center items-center h-12";
  return (
    <div className=" flex justify-center font-light text-xl flex-row  ">
      <span
        className={current === 1 ? 'hidden' : active}
        onClick={current === 1 ? null : () => setPage(current - 1)}
        disabled={current === 1}
      >
        <IoIosArrowBack />
      </span>
      <span className="border ml-2 font-light border-white w-12 tracking-wide rounded-full bg-gray-200 text-primary flex justify-center align-center items-center h-12">
        {current}
      </span>
      <button
        className={current === limit ? 'hidden' : active}
        onClick={
          current === limit
            ? null
            : () => {
                setPage(current + 1);
              }
        }
        disabled={current === limit}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagintaion;
