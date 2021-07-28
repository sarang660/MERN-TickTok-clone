import React, { useRef, useState } from "react";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";
function Video({ url, channel, description, likes, messages, shares, song }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        className="video_player"
        src={url}
      ></video>
      <VideoFooter channel={channel} song={song} description={description} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
