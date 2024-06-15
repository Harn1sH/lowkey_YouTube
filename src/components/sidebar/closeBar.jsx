import React from "react";

function CloseBar({ ismenuOpen }) {
  return (
    <div className={""}>
      <div className={"mt-2 font-bold"}>
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
