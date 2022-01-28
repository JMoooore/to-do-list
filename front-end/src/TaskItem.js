import React from 'react';

const TaskItem = (props) => {
    return (
        <div className='task-item'>
            <div className='task-owner'>Owner={props.owner}</div>
            <div className='task-importance'>Importance={props.importance}</div>
            <div className='task-importance'>Task Text={props.title}</div>
        </div>
    )
}

//key={result.id} importance={result.task_importance} title={task_title} owner={task_owner}

export default TaskItem