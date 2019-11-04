const GetTime = videoSeconds => {
  let minutes = Math.floor(videoSeconds / 60);
  let seconds = Math.floor(videoSeconds - minutes * 60);

  let displayedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let displayedminutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  let displayedTime = `${displayedminutes}:${displayedSeconds}`;
  return displayedTime;
};

export default GetTime;
