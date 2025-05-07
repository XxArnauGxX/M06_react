"use client";

import { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current && videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current && videoRef.current.pause();
  };

  const handleVolume = (e) => {
    if (videoRef.current) {
      videoRef.current.volume = e.target.value;
    }
  };

  return (
    <div className="container">
      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls={false}
      />
      <button onClick={handlePlay}>Reproducir</button>
      <button onClick={handlePause}>Pausar</button>
      <label>
        Volumen:
        <input
          type="range"
          min="0"
          max="100"
          step="0.01"
          defaultValue="1"
          onChange={handleVolume}
        />
      </label>
    </div>
  );
}
