import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    return (
        <div>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    )
}

export default TaskList