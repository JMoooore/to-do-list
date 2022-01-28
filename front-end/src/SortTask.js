import React from 'react';

const SortTask = (props) => {
    const setSortId = () => {
        props.handleSort("id")
    }
    const setSortOwner = () => {
        props.handleSort("owner")
    }
    const setSortImportance = () => {
        props.handleSort("importance")
    }
    const setSortComplete = () => {
        props.handleSort("complete")
    }
    return (
        <select id='sort-btn' name='sort'>
            <option value='default' selected>Choose Sort</option>
            <option value='id' onClick={setSortId}>Sort by Time</option>
            <option value='owner' onClick={setSortOwner}>Sort by Owner</option>
            <option value='importance' onClick={setSortImportance}>Sort by Importance</option>
            <option value='complete' onClick={setSortComplete}>Sort by Completion</option>
        </select>
    )
}

export default SortTask