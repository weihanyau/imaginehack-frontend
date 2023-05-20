"use client";

import ReactVideoRecorder from "react-video-recorder";

export function Video() {
  return (
    <ReactVideoRecorder
      constraints={{
        audio: true,
        video: true,
      }}
      mimetype="video/mp4"
      countdownTime={0}
      onRecordingComplete={async (videoBlob) => {
        const formData = new FormData();
        formData.append("file", videoBlob);

        fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        })
          .catch((e) => {
            console.log(e);
          })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          });
      }}
      isOnInitially
      showReplayControls
    />
  );
}
