import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    return (
        <div>
            {props.tasks.map((result) => 
            <TaskItem
             key={result.task_id}
             importance={result.task_importance}
             title={result.task_title}
             owner={result.task_owner}
             sort={props.sort}
             singleTask={props.singleTask}
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