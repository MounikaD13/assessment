import React, { useState } from "react"

export default function TodoApp() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  function addTodo() {
    //if any empty added then to avoid
    if (task.trim() === "") return
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((i) => i.id !== id);
    setTodos(updatedTodos);
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((i) =>
      i.id === id
        ? { ...i, completed: !i.completed }
        : i
    );
    setTodos(updatedTodos);
  }

  const filteredTodos = todos.filter((i) => {
    if (filter === "completed") {
      return i.completed ;
    }
    if (filter === "pending") {
      return !i.completed;
    }
    return true;
  });

  return (
    <div className="text-center">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <br />
      <div className="flex gap-3 w-50 justify-center text-center ">
        <button onClick={() => setFilter("all")}>
          All
        </button>
        <button onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button onClick={() => setFilter("pending")}>
          Pending
        </button>
      </div>
      <hr />

      {filteredTodos.length > 0 ? (
        filteredTodos.map((i) => (
          <div key={i.id}>
            <h3>
              {i.text}
            </h3>
            <p>
              Status :
              {i.completed
                ? " Completed"
                : " Pending"}
            </p>
            <button
              onClick={() => toggleTodo(i.id)}>
              {i.completed
                ? "Back"
                : "Complete"}
            </button>
            <button
              onClick={() => deleteTodo(i.id)}>
              Delete
            </button>
            <hr />
          </div>
        ))
      ) : (
        <p>No Tasks Found</p>
      )}
    </div>
  );
}

