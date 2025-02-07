import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, setIsSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      
      const users = JSON.parse(localStorage.getItem("users")) || [];

      
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/tasks");
      } else {
        setError("Email or password is incorrect.");
      }
    } else {
      setError("Please fill in both fields.");
    }
  };

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Log In</button>
    </form>
    </>
  );
};

export default Login;
