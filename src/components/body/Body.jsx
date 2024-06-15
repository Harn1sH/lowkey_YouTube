import React from "react";
import BodyContainer from "./body container/BodyContainer";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
