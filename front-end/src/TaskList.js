import React from 'react';
import TaskItem from './TaskItem';
import SingleTask from './SingleTask';

const TaskList = (props) => {
    if (props.singleTask) {
        return (
            <SingleTask />
        )
    }
    return (
        <div>
            {props.tasks.map((result) => 
            <TaskItem
             importance={result.task_importance}
             title={result.task_title}
             owner={result.task_owner}
             additionalTask={props.additionalTask}
             /> )}
        </div>
    )
}

//sort={this.state.sort} tasks={this.state.tasks} singleTask={this.state.singleTask} additionalTask={this.state.additionalTask}


// this.state = {
//     loading: true,
//     tasks: null,
//     singleTask: null,
//     additionalTask: null
//   }
export default TaskList;