import React from "react";
import CommentTile from "./CommentTile";

function CommentsContainer(props) {
  return (
    <div className={"ml-[-130px]"}>
      <span className={" font-bold text-xl"}>Comments</span>
      <CommentTile
        name={"Akshay Saini"}
        comment={"YEAAAAAAAAHHH LESSSGOOOOOOOOO"}
      />
    </div>
  );
}

export default CommentsContainer;
