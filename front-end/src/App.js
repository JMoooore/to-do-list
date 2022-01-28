import React, {Component, useState} from "react";
import axios from "axios";
import SortTask from './SortTask';
import ModifyTask from './ModifyTask';
import TaskList from './TaskList';
import Loading from "./Loading";

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
        this.setState({tasks: response.data, loading: false})
      })
  }

  render() {
    return (
    <div className="App">
      {this.state.loading ? 
      <Loading />
      :
      <>
        <SortTask />
        <ModifyTask />
        <TaskList tasks={this.state.tasks} singleTask={this.state.singleTask} additionalTask={this.state.additionalTask}/>
      </>
      }
    </div>
    )
  };
}

export default App;
