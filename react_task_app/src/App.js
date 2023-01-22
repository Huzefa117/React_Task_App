import { useState } from "react";
import AddTasks from "./components/AddTasks";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)  
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

  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
     <Header onAdd = {() => setShowAddTask(!showAddTask)}
     showAdd = {showAddTask}/>
     {showAddTask &&<AddTasks onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>) 
     : ("No Tasks To Show")}
    </div>
  );
}

export default App;
