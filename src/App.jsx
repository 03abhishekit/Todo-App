import { useState, useEffect } from 'react';
import {BrowserRouter as Router , Routes, Route, NavLink, Navigate} from 'react-router-dom';
import AddTask from './components/AddTask';
import Update from './components/Update';
import Delete from './components/Delete';
import Login from './components/Login';

import './App.css';

function App() {
  const [tasks, setTasks] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[role, setRole] = useState(null);
  
 

  const handleTasks = () =>{
      if(tasks.trim() !== '' && (role === 'Admin' || role === 'user1')){
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
    if(role === 'Admin'){
      setTasks(taskList[index]);
      setEditIndex(index);
    }
  };

  const handleDelete = (index) => {
    if(role === 'Admin'){
      const updatedTasks = taskList.filter((_, taskIndex) => taskIndex !== index);
      setTaskList(updatedTasks);
    }
  };

  return (
    <Router>

      <div  className='todo'>
        <nav className='nav'>
          <NavLink style={{margin:"10px"}} to="/">Home</NavLink>
         
          <NavLink style={{margin:"10px"}} to="/login">Login</NavLink>
        </nav>

        <h3>Todo App</h3>

        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  {role === 'Admin' || role === 'user1' ? (
                    <AddTask tasks={tasks} setTasks={setTasks} editIndex={editIndex} handleTasks={handleTasks} />
                  ) : (
                    <p>You can only view tasks.</p>
                  )}

                  <ul>
                    {taskList.map((task, index) => (
                      <li className="list" key={index}>
                        {task}
                        {role === 'Admin' && (
                          <>
                            <Update index={index} handleEdit={handleEdit} />
                            <Delete index={index} handleDelete={handleDelete} />
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) :
              <p style={{color:"red", fontSize:"20px"}}>User Must have Login to  create your Todos</p>
            }
          />

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
