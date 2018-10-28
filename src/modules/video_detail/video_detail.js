import React from "react";
import style from "./../../css/style.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={style.videoDetail}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className={style.details}>
        <div className={style.title}>{video.snippet.title}</div>
        <div className={style.desc}>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;