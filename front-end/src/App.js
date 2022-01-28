import React, {Component, useState} from "react";
import axios from "axios";
import SortTask from './SortTask';
import ModifyTask from './ModifyTask';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      tasks: null,
      singleTask: null,
      additionalTask: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/todos')
      .then((response) => {
        this.setState({tasks: response.data})
      })
  }

  render() {
    console.log(this.state.tasks);
    return (
    <div className="App">
      <SortTask />
      <ModifyTask />
      <TaskList />
    </div>
    )
  };
}

export default App;
