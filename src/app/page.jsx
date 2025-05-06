import "./home.css";
import WelcomeMessage from "@/app/S03/welcome-message/page";
import Task from "./S03/task/page";

export default function Home() {
  return (
    <>
      <WelcomeMessage name={"Arnau"} />
      <Task />
    </>
  );
}
