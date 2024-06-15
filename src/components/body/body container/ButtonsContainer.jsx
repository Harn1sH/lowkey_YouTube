import React from "react";
import Buttons from "./buttons";
import { buttonList } from "../../../utils/buttonList";

function ButtonsContainer() {
  //console.log(buttonList);
  return (
    <div className={"flex gap-x-3 mt-4 mx-2"}>
      {buttonList.map((b) => {
        return <Buttons key={b} value={b} />;
      })}
    </div>
  );
}

export default ButtonsContainer;
