import React from 'react';
import './Task.css';

const Task = ({task, onMove, onEdit, onDelete}) =>{
    return (
        <div className="task" draggable onDragStart={(e) => onMove(e, task)}>
            <h3 className='task-title'>{task.title}</h3>
            <div className="icons">
                <span class="material-symbols-outlined" className='edit-button' onClick={() => onEdit(task.id)}></span>
                <span class="material-symbols-outlined" className='delete-button' onClick={() => onDelete(task.id)}></span>                
            </div>
        </div>
    )
}

export default Task;
