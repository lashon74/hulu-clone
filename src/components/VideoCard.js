import React from "react";
import "../styles/VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src="images/hulu.png" alt="" />
      <p>This is a film about coding</p>
      <h2>Movie title</h2>
      <p>Number of likes</p>
    </div>
  );
}

export default VideoCard;
