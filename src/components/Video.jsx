"use client";

import ReactVideoRecorder from "react-video-recorder";

export function Video({ videoBlobRef }) {
  return (
    <ReactVideoRecorder
      constraints={{
        audio: true,
        video: true,
      }}
      mimetype="video/mp4"
      countdownTime={0}
      onRecordingComplete={async (blob) => {
        videoBlobRef.current = blob;
      }}
      isOnInitially
      showReplayControls
    />
  );
}
