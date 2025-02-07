function AddTask({ tasks, setTasks, editIndex, handleTasks }) {
  return (
    <>
      <input type="text" value={tasks} placeholder="Enter your Task" onChange={(event) => setTasks(event.target.value)} />
      <button onClick={handleTasks}>{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
    </>
  );
}

export default AddTask;
