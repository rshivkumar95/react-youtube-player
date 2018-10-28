import React from "react";
import style from "./../../css/style.css";

const mediaBodyStyle = {
    padding : "10px"
};
const mediaHeadingStyle = {
    "maxHeight" : "50px",
    "overflow" : "hidden"
};
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className={style.listGroupItem}>
      <div className="media video-list">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body" style={mediaBodyStyle}>
          <div className="media-heading" style={mediaHeadingStyle}>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;