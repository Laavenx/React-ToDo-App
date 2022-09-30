import React, { useState } from "react";
import TaskItem from "./taskitem.js";
import TaskForm from "./taskform.js";
import { v4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "../styles/main.scss";

const cross = <FontAwesomeIcon icon={faXmark} className="cross" />

export default function Main() {
    const [taskList, setTaskList] = useState([]);
    const [taskUpdateForm, setTaskUpdateForm] = useState(null);

    const deleteTask = function (id, event) {
        event.stopPropagation();
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

    const handleTaskUpdateForm = function (task) {
        setTaskUpdateForm(
            {
                name: task.taskText,
                id: task.id,
                task: task
            }
        )
    }

    const updateTask = function (event, task) {
        const formData = new FormData(event.target);
        task.taskText = formData.get("taskText");
        setTaskUpdateForm(null);
        event.preventDefault();
    }

    return (
        <main className={taskUpdateForm ? "block" : ""}>
            <div className="task-create">
                <TaskForm
                    handleSubmit={(e) => handleSubmit(e)}
                    currentText=""
                />
            </div>
            <div className="task-wrapper">
                {taskList.map((task) => (
                    <TaskItem name={task.taskText}
                        key={task.id}
                        id={task.id}
                        onRemove={(e) => deleteTask(task.id, e)}
                        onClick={() => handleTaskUpdateForm(task)}
                    />
                ))}
            </div>
            {taskUpdateForm &&
                <div className="popup">
                    <div
                        onClick={() => (setTaskUpdateForm(null))}
                        className="cross-wrapper"
                    >
                        {cross}
                    </div>
                    <h2>Edit Task</h2>
                    <TaskForm
                        handleSubmit={(e) => updateTask(e, taskUpdateForm.task)}
                        currentText={taskUpdateForm.name}
                    />
                </div>
            }
        </main>
    );
};