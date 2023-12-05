import React from 'react';

const TaskForm({onAddTask})=>{

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({title, description});
        setTitle('');
        setDescription('');
    };

    return(
        <form onSubmit={handleSubmit} id='task-form'>
            <input 
                type="text" 
                name="title-task" 
                id="title-task" 
                placeholder="Intitulé de la tâche ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />     
            <textarea 
                name="description" 
                id="description" 
                placeholder="Description de la tâche"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button classname="button-form" type="submit">Valider</button>
        </form>
    )
}

export default TaskForm;