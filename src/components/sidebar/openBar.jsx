import React from "react";

function OpenBar() {
  return (
    <div className={""}>
      <ul className="">
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <div>
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Watchlater</h1>
        <ul>
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
