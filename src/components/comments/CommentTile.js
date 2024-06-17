import React from "react";

function CommentTile({ name, comment }) {
  return (
    <div
      className={
        "flex items-center gap-x-5 bg-neutral-100 p-3 rounded-2xl w-8/12"
      }
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt=""
        className={"h-10"}
      />
      <div className={"flex flex-col"}>
        <span className={"font-bold"}>{name}</span>
        <span>{comment}</span>
      </div>
    </div>
  );
}

export default CommentTile;
