import React, {useState} from 'react';
import axios from 'axios';

const NewTask = (props) => {
    const [state, setState] = React.useState({
        title: "",
        owner: "",
        importance: null
      })

      function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

      function onSubmit(event) {
          event.preventDefault()
          const newTask = {...state}
          axios.post(`http://localhost:3000/todos`, newTask)
          
      }

    
    return (
        // <div className='modify-btn'>This is the buttons to ModifyTask</div>
        <form className='modify-btn'>
            <label>
                Title
                <input
                type="text"
                name="title"
                onChange={handleChange}
                />
            </label>
            <label>
                Owner
                <input
                type="text"
                name="owner"
                onChange={handleChange}
                />
            </label>
            <label>
                Importance
                <input
                type="number"
                name="importance"
                onChange={handleChange}
                />
            </label>
            <input className='btn' type="submit" value="New Task" onClick={onSubmit}></input>
        </form>
    )
}



export default NewTask