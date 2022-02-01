import React from 'react';  

const DeleteButton = (props) => {

    const deleteSingleTask = () => {
        props.deleteTask(props.id)
        props.handleSingleTask(null)
    }

    return (
        <button type="button" className='btn' id='delete-button' onClick={deleteSingleTask}>Delete Task</button>
    )
}

export default DeleteButton