import React from 'react';
import Task from '../Task/Task';
import './TaskList';

const TaskList = ({task, onMove, onEdit, onDelete}) =>{
    return (
        <div className="task-list">
            {task.map(task=>(
                <Task key={task.id} task={task} onMove={onMove} onEdit={onEdit} onDelete={onDelete}></Task>
            ))}
        </div>
    )
}

export default TaskList;