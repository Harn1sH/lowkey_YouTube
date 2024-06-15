import React from "react";

function CloseBar() {
  return (
    <div className={"flex justify-end"}>
      <div className={"mt-2"}>
        <ul className={"flex flex-col gap-y-[50px]"}>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
          <li>You</li>
        </ul>
      </div>
    </div>
  );
}

export default CloseBar;
