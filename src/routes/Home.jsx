const Home = ({ isLoggedIn }) => {
    return (
      <div>
        <h3>Welcome to the Todo App</h3>
        {isLoggedIn ? (
          <p>You're logged in. Manage your tasks!</p>
        ) : (
          <h3>Please log in to manage your tasks.</h3>
        )}
      </div>
    );
  };
  
  export default Home;
  