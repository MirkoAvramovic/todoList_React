import React, { useState } from 'react'

const todoListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', //center vertically on the screen
    backgroundColor: '#00cc00',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
};

function TodoList() {
    const [tasks, setTasks] = useState([]); // State to store the list of tasks
    const [taskText, setTaskText] = useState(''); // State to store the current task text

    const addTask = () => {
        if (taskText.trim() === '') return; // Don't add empty tasks

        setTasks([...tasks, taskText]); //Add the new task to the list
        setTaskText(''); // Clear the task input field
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div style={todoListStyle}>
            <h1>My To-do list</h1>

            <div>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

