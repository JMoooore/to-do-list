import React from 'react';

const TaskItem = (props) => {
    const handleTask = () => {
        const singleTask = {
            key: props.id,
            importance: props.importance,
            title: props.title,
            owner: props.owner
        }  
        props.handleSingleTask(singleTask)
    }

    return (
        <div className='task-item' onClick={handleTask}>
            <div className='task-owner'>Owner={props.owner}</div>
            <div className='task-importance'>Importance={props.importance}</div>
            <div className='task-importance'>Task Text={props.title}</div>
        </div>
    )
}

//key={result.id} importance={result.task_importance} title={task_title} owner={task_owner}

export default TaskItem