import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/taskform.module.scss";

const enter = <FontAwesomeIcon icon={faArrowRight} size="2x" className={styles.submit} />
const cross = <FontAwesomeIcon icon={faXmark} className={styles.cross} />

export default function TaskForm(props) {
    const [taskInput, setTaskInput] = useState("");

    const handleInputChange = function (event) {
        setTaskInput(event.target.value)
    }

    const deleteInput = () => {
        setTaskInput("")
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles["task-input-wrapper"]}>
                <input
                    name="taskText"
                    className={styles["task-input"]}
                    type="text"
                    placeholder="Input a task here!"
                    minLength="1"
                    maxLength="28"
                    value={taskInput}
                    onChange={handleInputChange}
                />
                <div
                    className={styles["task-input-clear"]}
                    onClick={deleteInput}
                >
                    {cross}
                </div>
            </div>
            <button className={styles["task-submit-button"]}>
                {enter}
            </button>
        </form>
    );
};
