import "./App.css";
import Video from "./Video";
import axios from "./axios";
import { useEffect, useState } from "react";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <h1>build mern</h1>
      <div className="app_videos">
        {videos.map(
          ({ channel, description, likes, shares, messages, song, url }) => (
            <Video
              channel={channel}
              description={description}
              likes={likes}
              shares={shares}
              messages={messages}
              url={url}
              song={song}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
