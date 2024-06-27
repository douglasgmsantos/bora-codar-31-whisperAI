import ytdl from "ytdl-core";
import fs from "fs";

export const downloader = (videoId) =>
  new Promise((resolve, reject) => {
    const videoURL = "https://youtube.com/watch?v=" + videoId;
    console.log("[START_DOWNLOAD]");

    ytdl(videoURL, {
      quality: "lowestaudio",
      filter: "audioonly",
    })
      .on("end", () => {
        console.log("[END_DOWNLOAD]");
        resolve();
      })
      .on("error", () => {
        console.log("[ERROR_DOWNLOAD]");
        reject();
      })
      .pipe(fs.createWriteStream("audio.mp4"));
  });
