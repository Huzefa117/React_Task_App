import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{
    id : 1,
    text : "Doctor Appointment",
    day: "Feb 15th at 2:30pm",
    reminder: true
  },
  {
    id : 2,
    text : "Meeting at School",
    day: "Feb 16th at 2:30pm",
    reminder: true
  },
  {
    id : 3,
    text : "Food Shopping",
    day: "Feb 17th at 2:30pm",
    reminder: false
  }])


  //delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }
//Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}: task))
  }


  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>) : ("No Tasks To Show")}
    </div>
  );
}

export default App;
