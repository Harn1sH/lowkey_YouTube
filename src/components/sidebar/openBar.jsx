import React from "react";

function OpenBar({ ismenuOpen }) {
  return (
    <div
      className={
        ismenuOpen
          ? "flex flex-col gap-y-4 px-3 w-[12rem]  ml-[-12px] shadow-lg transition-all duration-200 h-screen absolute z-30 bg-white"
          : "px-3 w-[12rem] shadow-lg flex flex-col gap-y-2 ml-[-200px] transition-all duration-200 h-screen absolute bg-white"
      }
    >
      <ul className="flex font-semibold flex-col gap-y-1">
        <li className={"font-bold"}>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Shorts</h1>
      <div>
        <h1 className="font-bold">Subscriptions</h1>

        <ul className={"font-semibold"}>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
          <li>Movies</li>
        </ul>
      </div>
      <h1 className={"font-bold"}>You</h1>
      <div>
        <h1 className="font-bold">Watchlater</h1>
        <ul className={"font-semibold"}>
          <li>playList 1</li>
          <li>playList 2</li>
          <li>playList 3</li>
          <li>playList 4</li>
        </ul>
      </div>
    </div>
  );
}

export default OpenBar;
