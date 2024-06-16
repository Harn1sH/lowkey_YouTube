import React from "react";

function SearchTile({ video }) {
  return (
    <div
      className={"flex gap-x-[5rem] border-b-2 pb-6 cursor-pointer mb-4 mx-3"}
    >
      <img
        src={video?.snippet?.thumbnails?.medium?.url}
        alt="img"
        className={"rounded-xl "}
      />
      <div className={"w-6/12"}>
        <ul className={"flex flex-col gap-y-2 justify-between"}>
          <li className={"font-bold"}>{video?.snippet?.title}</li>
          <li className={"text-neutral-500 text-sm flex items-center gap-x-5"}>
            <img
              className="h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
              alt="userIcon"
            />
            <span>{video?.snippet?.channelTitle}</span>
          </li>
          <li className={"text-neutral-500 text-sm truncate"}>
            {video?.snippet.description}
          </li>
          <li className={"text-neutral-500 text-sm"}>
            {Math.floor(
              new Date(video?.snippet?.publishTime).getTime() / 100000000,
            )}{" "}
            views
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchTile;
