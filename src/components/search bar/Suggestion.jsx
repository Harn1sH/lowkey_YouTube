import React from "react";
import search from "../../assets/magnifying.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSearch } from "../../utils/Store/slice/appSlice";

function Suggestion({ suggest }) {
  const dispatch = useDispatch();
  return (
    <Link to={`/results/?s=${suggest}`} onClick={() => dispatch(closeSearch())}>
      <li
        className={
          "flex gap-x-5 items-center px-3 py-1 hover:cursor-pointer hover:bg-neutral-200"
        }
      >
        <img src={search} alt="search" className="h-3" />
        <span>{suggest}</span>
      </li>
    </Link>
  );
}

export default Suggestion;
