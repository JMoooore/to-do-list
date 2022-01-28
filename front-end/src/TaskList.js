import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    return (
        <div>
            {props.tasks.map((result) => <TaskItem key={result.id} importance={result.task_importance} title={result.task_title} owner={result.task_owner}/> )}
        </div>
    )
}


// this.state = {
//     loading: true,
//     tasks: null,
//     singleTask: null,
//     additionalTask: null
//   }
export default TaskList;