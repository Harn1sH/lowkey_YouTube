import React from "react";
import search from "../../assets/magnifying.svg";

function Suggestion({ suggest }) {
  console.log(suggest);
  return (
    <li
      className={
        "flex gap-x-5 items-center px-3 py-1 hover:cursor-pointer hover:bg-neutral-200"
      }
    >
      <img src={search} alt="search" className="h-3" />
      <span>{suggest}</span>
    </li>
  );
}

export default Suggestion;
