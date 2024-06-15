import React from "react";
import menu from "../../assets/hamburgerMenu.svg";
import search from "../../assets/magnifying.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/Store/slice/appSlice";

function Head() {
  const dispatch = useDispatch();
  //grid  p-4 grid-flow-col shadow-xl
  return (
    <div className="grid  p-4 grid-flow-col shadow-xl">
      <div className="flex col-span-1 gap-x-3  items-center">
        <div
          className={
            "hover:bg-neutral-100 cursor-pointer rounded-full p-2 active:bg-neutral-200"
          }
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          <img src={menu} className="h-8 " alt="menu" />
        </div>
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="yt"
        />
      </div>
      <div className="col-span-10 flex justify-center items-center ">
        <input
          type="text"
          className="w-1/2 rounded-l-2xl p-2 border-gray-400 border-t border-b border-l"
          placeholder={"Search"}
          name=""
          id=""
        />
        <button
          className={
            "border-gray-400 border-t border-b p-2 px-4 rounded-r-2xl text-center bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200"
          }
          type="submit"
        >
          <img src={search} alt="search" className="h-6" />
        </button>
      </div>
      <div className="col-span-2">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="userIcon"
        />
      </div>
    </div>
  );
}

export default Head;
