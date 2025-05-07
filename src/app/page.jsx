"use client";

import "./home.css";
import WelcomeMessage from "@/app/S03/welcome-message/page";
import MissionData from "./S04/mission-data/MissionData";
import TaskList from "./S03/task/TaskList";
import MessageSubscription from "./S04/subscription/MessageSubscription";
import VideoPlayer from "./S05/video-player/VideoPlayer";
import useTimer from "./S05/use-timer/UseTimer";

export default function Home() {
  const { time, isRunning, start, pause, reset } = useTimer(10, false);
  return (
    <div>
      <WelcomeMessage name={"Arnau"} />
      <TaskList />
      <MissionData />
      <MessageSubscription />
      <VideoPlayer />
      <div className="container">
        <h2>Tiempo: {time}</h2>
        <button onClick={start} disabled={isRunning}>
          Iniciar
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pausar
        </button>
        <button onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
}
