// Logout.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/Login"); 
  }, [setIsLoggedIn, navigate]);

  return <div>You have logged out. Redirecting...</div>;
};

export default Logout;
