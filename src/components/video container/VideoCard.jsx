import React from "react";

function VideoCard({ video }) {
  //const { channelTitle, title, thumbNails } = video.snippet;
  return (
    <div
      className={
        "w-11/12 shadow-md p-2 rounded-md hover:scale-[1.05] duration-200 cursor-pointer"
      }
    >
      <img
        src={video?.snippet?.thumbnails?.medium?.url}
        className={"rounded-lg"}
        alt="temp"
      />
      <ul className={"flex flex-col justify-between"}>
        <li className={"font-bold"}>{video?.snippet?.title}</li>
        <li className={"text-neutral-500 text-sm"}>
          {video?.snippet?.channelTitle}
        </li>
        <li className={"text-neutral-500 text-sm"}>
          {video?.statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
}

export default VideoCard;
