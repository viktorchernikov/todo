import Header from "./components/Header"
import ContentWrapper from "./components/ContentWrapper"

import TaskManager from "./types/TaskManager"
import TaskListView from "./components/TaskList/TaskListView"
import { useEffect, useState } from "react"


function App() {
  const storageTaskList = JSON.parse(localStorage.getItem("tasks"));
  const storageLastId = parseInt(localStorage.getItem("lastId"));
  //const storageTaskList = null;
  //const storageLastId = null;

  const [taskList, setTaskList] = useState(storageTaskList ? storageTaskList : []);
  const [lastId, setLastId] = useState(storageLastId ? storageLastId : -1);
  const taskManager = new TaskManager(taskList, setTaskList, lastId, setLastId);


  useEffect(() => {
    function handleBeforeUnload(event) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
      localStorage.setItem("lastId", lastId);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
  });

  return (
    <>
      <Header/>
      <ContentWrapper>
        <TaskListView manager={taskManager}/>
      </ContentWrapper>
    </>
  )
}

export default App
