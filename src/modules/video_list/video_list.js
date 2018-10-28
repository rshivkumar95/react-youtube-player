import React from "react";
import VideoListItem from "./video_list_item";
import style from "./../../css/style.css";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className={style.listGroup}>
      {videoItems}
    </ul>
  );
};

export default VideoList;