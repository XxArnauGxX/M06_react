import "./home.css";
import WelcomeMessage from "@/app/S03/welcome-message/page";
import MissionData from "./S04/mission-data/MissionData";
import TaskList from "./S03/task/TaskList";

export default function Home() {
  return (
    <div>
      <WelcomeMessage name={"Arnau"} />
      <TaskList />
      <MissionData />
    </div>
  );
}
