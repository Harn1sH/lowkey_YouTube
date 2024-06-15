import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../../utils/Store/slice/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  });
  return (
    <div>
      <iframe
        width="800"
        height="400"
        className={"rounded-xl my-5 ml-[-130px]"}
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
      <iframe></iframe>
    </div>
  );
}

export default WatchPage;
