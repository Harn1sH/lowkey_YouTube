import React, { useState } from "react";
import menu from "../../assets/hamburgerMenu.svg";
import search from "../../assets/magnifying.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/Store/slice/appSlice";
import SearchBar from "../search bar/SearchBar";

function Head() {
  const dispatch = useDispatch();
  //grid  p-4 grid-flow-col shadow-xl
  return (
    <div
      className="grid  p-4 grid-flow-col shadow-xl"
      //onBlur={() => setShowSuggestions(false)}
    >
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
      <SearchBar />
      <div className="col-span-2 flex justify-center items-center">
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
