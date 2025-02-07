import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Update from "./Update";
import Delete from "./Delete";

function TaskList() {
  const [tasks, setTasks] = useState("");
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleTasks = () => {
    if (tasks.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...taskList];
      updatedTasks[editIndex] = tasks;
      setTaskList(updatedTasks);
      setEditIndex(null);
    } else {
      setTaskList((prevTasks) => [...prevTasks, tasks]);
    }
    setTasks("");
  };

  const handleEdit = (index) => {
    setTasks(taskList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTasks = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <h3>Manage Tasks</h3>
      <div>
       <AddTask tasks={tasks}  setTasks={setTasks} editIndex={editIndex} handleTasks={handleTasks} />
      </div>

      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <Update index={index} handleEdit={handleEdit} />
            
            <Delete index={index} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
