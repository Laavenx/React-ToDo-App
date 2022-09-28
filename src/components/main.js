import React, { useState } from "react";
import TaskItem from "./taskitem.js";
import TaskForm from "./taskform.js";
import { v4 } from "uuid";
import "../styles/main.scss";

export default function Main() {
    const [taskList, setTaskList] = useState([]);

    const deleteTask = function (id) {
        setTimeout(() => {
            setTaskList(taskList.filter(
                input => {
                    return input.id !== id;
                }
            ));
        }, 150);
    };

    const handleSubmit = function (event) {
        const formData = new FormData(event.target);

        setTaskList(taskList.concat(
            {
                id: v4(),
                taskText: formData.get("taskText"),
            }
        ));
        event.preventDefault();
    };

    return (
        <main>
            <div className="task-create">
                <TaskForm
                    handleSubmit={(e) => handleSubmit(e)}
                />
            </div>
            <div className="task-wrapper">
                {taskList.map((task) => (
                    <TaskItem name={task.taskText}
                        key={task.id}
                        id={task.id}
                        color={task.color}
                        onRemove={() => deleteTask(task.id)}
                    />
                ))}
            </div>
        </main>
    );
};