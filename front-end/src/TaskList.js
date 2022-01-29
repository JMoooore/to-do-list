import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    if (props.singleTask) {
        return (
            <TaskItem 
                key={props.singleTask.id}
                id={props.singleTask.id}
                importance={props.singleTask.importance}
                title={props.singleTask.title}
                owner={props.singleTask.owner}
             />
        )
    }
    return (
        <div>
            {props.tasks.map((result) => 
            <TaskItem
                handleSingleTask={props.handleSingleTask}
                key={result.task_id}
                id={result.task_id}
                importance={result.task_importance}
                title={result.task_title}
                owner={result.task_owner}
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