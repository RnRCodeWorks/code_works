import React from "react";
import '../styles/TaskItem.css';

function TaskItem(props) {
    // Need checkbox, title, description
    return (
        <div className="taskBox">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default TaskItem;