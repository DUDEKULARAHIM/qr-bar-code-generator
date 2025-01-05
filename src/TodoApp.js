// import React, { useState } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]); // State to store the list of todos
//   const [task, setTask] = useState(""); // State to store the current input

//   // Add a new task
//   const addTask = () => {
//     if (task.trim() === "") {
//       alert("Task cannot be empty!");
//       return;
//     }
//     setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
//     setTask("");
//   };

//   // Toggle completion status of a task
//   const toggleTask = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Delete a task
//   const deleteTask = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div style={{ margin: "20px auto", maxWidth: "400px", textAlign: "center" }}>
//       <h1>To-Do List</h1>
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "70%",
//             marginRight: "10px",
//             borderRadius: "5px",
//           }}
//         />
//         <button
//           onClick={addTask}
//           style={{
//             padding: "10px",
//             backgroundColor: "blue",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Add
//         </button>
//       </div>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               marginBottom: "10px",
//               textDecoration: todo.completed ? "line-through" : "none",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <span
//               onClick={() => toggleTask(todo.id)}
//               style={{
//                 cursor: "pointer",
//                 color: todo.completed ? "gray" : "black",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => deleteTask(todo.id)}
//               style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 border: "none",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       {todos.length === 0 && <p>No tasks to display!</p>}
//     </div>
//   );
// };

// export default TodoApp;








import React, { useState } from "react";

const TodoApp = () => {
  // State for storing tasks
  const [tasks, setTasks] = useState([]); // Example: ["Task 1", "Task 2"]
  const [inputValue, setInputValue] = useState(""); // Holds the value typed by the user

  // Function to add a task
  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("Please type something!");
      return;
    }
    setTasks([...tasks, inputValue]); // Add the new task to the list
    setInputValue(""); // Clear the input box
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove the task at the given index
    setTasks(newTasks); // Update the list
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h1>Simple To-Do List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue} // Bind the input value to state
          onChange={(e) => setInputValue(e.target.value)} // Update input value on typing
          placeholder="Enter a task"
          style={{
            padding: "10px",
            width: "70%",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)} // Delete this task
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks added yet!</p>}
    </div>
  );
};

export default TodoApp;
