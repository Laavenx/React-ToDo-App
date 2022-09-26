import React, { useState, useEffect } from "react";
import "../styles/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TaskItem from "./taskitem.js";
import { v4 } from "uuid";

const enter = <FontAwesomeIcon icon={faArrowRight} size="2x" className="submit" />

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
        console.log(taskList);
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
                <form onSubmit={handleSubmit}>
                    <input
                        name="taskText"
                        className="task-input"
                        type="text"
                        placeholder="Input a task here!"
                        minLength="1"
                        maxLength="28"
                    />
                    <button className="task-submit-button">
                        {enter}
                    </button>
                </form>
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