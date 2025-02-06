import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setRole }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = () => {
    if (userName === "Abhi@123" && password === "12345") {
      localStorage.setItem("role", "Admin");
      setRole("Admin");
      setIsLoggedIn(true);
      setError("");
      navigate("/");
    } else if (userName === "raj@123" && password === "56789") {
      localStorage.setItem("role", "user1");
      setRole("user1");
      setIsLoggedIn(true);
      setError("");
      navigate("/");
    } else if (userName === "raj@456" && password === "98765") {
      localStorage.setItem("role", "user2");
      setRole("user2");
      setIsLoggedIn(true);
      setError("");
      navigate("/");
    } else {
      setError("Invalid Username or Password");
    }
  };
  
  const handleUserName = (e)=>{
    setUserName(e.target.value);
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  return (
    <>
      <h3>Login</h3>
       
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="text" placeholder="Enter your Username" onChange={handleUserName} />
      <br /><br />
      <input type="password" placeholder="Enter your Password" onChange={handlePassword } />
      <br /><br />
      <button className="btn" onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
