import React from 'react';
import TaskItem from './TaskItem';
import BackButton from  './BackButton';

const TaskList = (props) => {
    if (props.singleTask) {
        return (
            <>
                <TaskItem
                    setComplete={props.setComplete}
                    key={props.singleTask.id}
                    id={props.singleTask.id}
                    importance={props.singleTask.importance}
                    title={props.singleTask.title}
                    owner={props.singleTask.owner}
                    complete={props.singleTask.complete}
                />
                <BackButton handleSingleTask={props.handleSingleTask}/>
            </>
        )
    }
    return (
        <div className='task-list'>
            {props.tasks.map((result) => 
            <TaskItem
                setComplete={props.setComplete}
                handleSingleTask={props.handleSingleTask}
                key={result.task_id}
                id={result.task_id}
                importance={result.task_importance}
                title={result.task_title}
                owner={result.task_owner}
                complete={result.task_complete}
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