import React from 'react';

// const SortTask = (props) => {
//     const setSortId = () => {
//         props.handleSort("id")
//     }
//     const setSortOwner = () => {
//         props.handleSort("owner")
//     }
//     const setSortImportance = () => {
//         props.handleSort("importance")
//     }
//     const setSortComplete = () => {
//         props.handleSort("complete")
//     }
//     return (
//         <select id='sort-btn' name='sort'>
//             <option value='default' selected>Choose Sort</option>
//             <option value='id' onClick={setSortId}>Sort by Time</option>
//             <option value='owner' onClick={setSortOwner}>Sort by Owner</option>
//             <option value='importance' onClick={setSortImportance}>Sort by Importance</option>
//             <option value='complete' onClick={setSortComplete}>Sort by Completion</option>
//         </select>
//     )
// }

const SortTask = (props) => {

    const handleChange = (event) => {
        props.handleSort(event)
    }

    return (
          <select id='sort-btn' value={props.sort} onChange={handleChange}>            
            <option value="id">Sort by Time</option>
            <option value="complete">Sort by Completion</option>
            <option value="owner">Sort by Owner</option>
            <option value="importance">Sort by Importance</option>
          </select>
    )
}

export default SortTask