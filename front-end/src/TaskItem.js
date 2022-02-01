import React, { useState } from 'react';

const TaskItem = (props) => {
    const handleTask = () => {
        const singleTask = {
            id: props.id,
            importance: props.importance,
            title: props.title,
            owner: props.owner,
            complete: props.complete
        }  
        props.handleSingleTask(singleTask)
    }

    const [isActive, setActive] = useState(props.complete);
    const handleToggle = () => {
        console.log(props.complete);
        setActive(!isActive)
        props.setComplete(props.id)
    }
    

    return (
        <div className={`task-item ${isActive ? "clicked-item": null}`}>
            {/* <label className='checkbox-label' onChange={handleToggle}> */}
                <input type='checkbox' className='checkbox' onChange={handleToggle}></input>
            {/* </label> */}
            <div className='task-title' onClick={handleTask}>{props.title}</div>
            <div className='task-owner' onClick={handleTask}>{props.owner}</div>
            {/* <div className='task-importance' onClick={handleTask}>Importance={props.importance}</div> */}
        </div>
    )
}

export default TaskItem

// //key={result.id} importance={result.task_importance} title={task_title} owner={task_owner}
// export default function App() {
//   const [isActive, setActive] = useState("false");
//   const handleToggle = () => {
//     setActive(!isActive);  };
//   return (
//     <div className={isActive ? "app" : null}>      <h1>Hello react</h1>
//       <button onClick={handleToggle}>Toggle class</button>    </div>
//   );
// }