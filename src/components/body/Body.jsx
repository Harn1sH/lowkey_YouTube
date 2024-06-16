import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Head from "../header/Head";
import { useDispatch } from "react-redux";
import { closeSearch } from "../../utils/Store/slice/appSlice";

function Body() {
  const dispatch = useDispatch();

  return (
    <div className="">
      <Head />
      <div className={"flex"} onClick={() => dispatch(closeSearch())}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
