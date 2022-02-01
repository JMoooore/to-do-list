import React from 'react';  

const BackButton = (props) => {

    const emptySingleTask = () => {
        props.handleSingleTask(null)
    }

    return (
        <button type="button" onClick={emptySingleTask}>Go Back</button>
    )
}

export default BackButton