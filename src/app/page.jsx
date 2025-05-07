import "./home.css";
import WelcomeMessage from "@/app/S03/welcome-message/page";
import MissionData from "./S04/mission-data/MissionData";
import TaskList from "./S03/task/TaskList";
import MessageSubscription from "./S04/subscription/MessageSubscription";
import VideoPlayer from "./S05/video-player/VideoPlayer";

export default function Home() {
  return (
    <div>
      <WelcomeMessage name={"Arnau"} />
      <TaskList />
      <MissionData />
      <MessageSubscription />
      <VideoPlayer />
    </div>
  );
}
