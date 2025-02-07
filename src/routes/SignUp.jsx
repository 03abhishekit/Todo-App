import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setIsLoggedIn, setIsSignIn }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setIsSignIn(true);

      // Retrieve existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Create a new user object
      const newUser = { userName, email, password };

      // Add the new user to the existing users array
      existingUsers.push(newUser);

      // Save the updated users array to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // localStorage.setItem("isSignIn", "true");
      // localStorage.setItem("email", email); 
      // localStorage.setItem("password", password);

      navigate("/Login");
    } else {
      setError("Passwords do not match");
    }
  };


  
  return (
    <>
      <h3>Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            value={userName}
            placeholder="Enter userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Enter E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;




  
 

