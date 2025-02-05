import { loadingMessage } from "./loading";

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.YTPlayer = null;

export function getVideoId(url) {
  const [_, id] = url.split("v=");
  const [videoId, other] = id.split("&");
  return videoId;
}

export function loadVideo(url) {
  loadingMessage("Carregando vídeo do Youtube");
  const videoId = getVideoId(url);

  return new Promise((resolve, reject) => {
    window.YTPlayer = new YT.Player("youtubeVideo", {
      videoId,
      events: {
        onReady: () => resolve(),
      },
    });
  });
}
