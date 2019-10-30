import React from 'react';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import { GlobalStyle, AppContainer } from './styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        <VideoPlayer />
      </AppContainer>
    </div>
  );
}

export default App;
