import React from "react";

function LiveChatTile({ name, comment }) {
  return (
    <div className={"flex items-center my-2  gap-x-2"}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        className={"h-9"}
        alt=""
      />
      <div className={"font-bold"}>{name}</div>
      <div>{comment}</div>
    </div>
  );
}

export default LiveChatTile;
