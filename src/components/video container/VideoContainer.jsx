import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../utils/constants";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const videos = await data.json();
    setVideos(videos.items);
  };

  return (
    <div>
      <VideoCard video={videos[0]} />
    </div>
  );
}

export default VideoContainer;
