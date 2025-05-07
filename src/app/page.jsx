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
      <section className="section">
        <WelcomeMessage name={"Arnau"} />
      </section>
      <section className="section">
        <TaskList />
      </section>
      <section className="section">
        <MissionData />
      </section>
      <section className="section">
        <MessageSubscription />
      </section>
      <section className="section">
        <VideoPlayer />
      </section>
      <section className="section">
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
      </section>
    </div>
  );
}
