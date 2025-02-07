import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Logout from "./routes/Logout"; 
import TaskList from "./components/TaskList";


import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn");
  });

  const [isSignIn, setIsSignIn] = useState(() => {
    return localStorage.getItem("isSignIn");
  });


  return (
    <Router>
      <>
      <nav className="nav">
          <nav className="home">
          <NavLink  to="/">Home</NavLink>
          </nav>
          <nav>
                {
                  isLoggedIn ? (
                    <>
                      <NavLink to="/Logout">Logout</NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink to="/Login">Login</NavLink>
                      <NavLink to="/SignUp">Sign Up</NavLink>
                    </>
                  )
                }
              </nav>

        </nav>
      </>
      <div>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn} setIsSignIn={setIsSignIn} />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setIsSignIn={setIsSignIn} />} />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn}  />} />
          <Route path="/tasks" element={isLoggedIn ? <TaskList /> : <div>Please log in to manage tasks.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
