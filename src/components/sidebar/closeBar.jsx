import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../../utils/Store/slice/appSlice";

function CloseBar({ isMenuCollapsed }) {
  return (
    <div
      className={
        isMenuCollapsed ? "ml-[-110px] transition-all duration-300" : ""
      }
    >
      <div className={"mt-2 font-bold"}>
        <ul className={"flex flex-col gap-y-[50px]"}>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Subscription</li>
          <li>You</li>
        </ul>
      </div>
    </div>
  );
}

export default CloseBar;
