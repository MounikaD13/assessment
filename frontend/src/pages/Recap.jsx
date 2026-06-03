import React, { useState, useEffect } from 'react'

export default function Recap() {
    const [task, setTask] = useState("")
    const [filter, setFilter] = useState("")
    const [search, setSearch] = useState("")
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos")
        return savedTodos
            ? JSON.parse(savedTodos)
            : []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [])

    function addtodo() {
        const newTodo = {
            id: Date.now(),
            text: task,
            completed: false
        }
        setTodos([...todos, newTodo])
        setTask('')
    }
    function deleteTodo(id) {
        const update = todos.filter((e) => e.id !== id)
        setTodos(update)
    }
    function toggleTodo(id) {
        const updated = todos.map((i) => i.id === id
            ? { ...i, completed: !i.completed }
            : i
        )
        setTodos(updated);
    }

    const filteredTodos = todos.filter((i) => {
        if (filter === "completed" && !i.completed) {
            return false
        }
        if (filter === "pending" && i.completed) {
            return false
        }
        return i.text.toLowerCase().includes(search.toLowerCase())
    });
    return (
        <div className='justify-center bg-slate-50 text-center'>
            <h1>TODO</h1>
            <div className='flex gap-2 justify-center mb-2'>
                <input type="text" placeholder='Add task' value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className='border p-2 rounded-md' />
                <button onClick={addtodo} className='bg-rose-200 rounded-md p-2'>+</button>
            </div>
            <div className='flex gap-2 justify-center mb-2'>
                <input type="text" placeholder='Search...' value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border p-2 rounded-md' />
                <select value={filter} className='bg-indigo-50 border rounded-sm p-1'
                    onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Complete</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <br />
            {/* <div className='flex gap-2 justify-center'>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Complete</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div> */}
            <hr />
            {filteredTodos.length > 0 ? (
                filteredTodos.map((i) => (
                    <div key={i.id}>
                        <h3>{i.text}</h3>
                        <p>Status: {i.completed ? "completed" : "pending"}</p>
                        <button onClick={() => toggleTodo(i.id)}>
                            {i.completed ? "back" : "complete"}</button>
                        <button onClick={() => deleteTodo(i.id)}>Del</button>
                        <hr />
                    </div>


                ))
            ) : (
                <p>No tasks</p>
            )}
        </div>
    )
}
