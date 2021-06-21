import React from "react";
import Header from "./components/header/Header.ui";
import VideoPlayer from "./components/videoplayer/VideoPlayer.ui";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <VideoPlayer />
    </div>
  );
}

export default App;
