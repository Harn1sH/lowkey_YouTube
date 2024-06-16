import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const videos = await data.json();
    setVideos(videos.items);
    console.log(videos);
  };
  return (
    <div className={"m-5 grid grid-cols-3 gap-y-6"}>
      {videos.map((video) => {
        return (
          <Link to={`/watch/?v=${video.id}`} key={video.id}>
            <VideoCard video={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
