import React from "react";
import BodyContainer from "./body container/BodyContainer";
import Sidebar from "../sidebar/Sidebar";

function Body() {
  return (
    <div className="flex">
      <Sidebar />
      <BodyContainer />
    </div>
  );
}

export default Body;
