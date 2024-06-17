import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../../utils/Store/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  });
  return (
    <div className={"w-screen "}>
      <iframe
        // width="800"
        // height="400"
        className={"rounded-xl my-5 ml-[-130px] w-9/12 h-4/6"}
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow={"autoplay"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
      <CommentsContainer />
    </div>
  );
}

export default WatchPage;
