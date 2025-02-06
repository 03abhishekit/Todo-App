import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleTasks = () =>{
      if(tasks.trim() !== ''){
          if(editIndex !== null){
            const updatedTasks = taskList.map((task, index) =>
            index === editIndex ? tasks : task);
            setTaskList(updatedTasks);
            setEditIndex(null);
          }else{
            setTaskList([...taskList, tasks]);
          }
          setTasks('');
      }
  }

  

  const handleEdit = (index) => {
    setTasks(taskList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTasks = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(updatedTasks);
  };

  return (
    <>
      <div className='todo'>
        <h3>Todo App</h3>

        <input
          type="text"
          value={tasks}
          placeholder="Enter your Task"
          onChange={(event) => setTasks(event.target.value)}
        />

        <button onClick={handleTasks}>
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>

        <ul>
          {taskList.map((task, index) => (
            <li className='list' key={index}>
              {task}
              <button className='btn' onClick={() => handleEdit(index)}>Edit</button>
              <button className='btn' onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
