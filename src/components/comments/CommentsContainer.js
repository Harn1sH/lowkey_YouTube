import React from "react";
import CommentTile from "./CommentTile";

function CommentsContainer({ comments }) {
  return (
    <div className={""}>
      <span className={""}>
        {comments.map((comment) => {
          return (
            <div className={""}>
              <CommentTile name={comment.name} comment={comment.comment} />
              <div className={"pl-3 ml-5 border-l-2 border-black"}>
                <CommentsContainer comments={comment.replies} />
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default CommentsContainer;
