import React from 'react';
import TaskItem from './TaskItem';

const SingleTask = (props) => {
    return (
        <TaskItem
            importance={props.task_importance}
            title={props.task_title}
            owner={props.task_owner}
            additionalTask={props.additionalTask}
        />
    )
}

export default SingleTask