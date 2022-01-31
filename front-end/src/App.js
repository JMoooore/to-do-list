import React, {Component} from "react";
import axios from "axios";
import SortTask from './SortTask';
import NewTask from './NewTask';
import TaskList from './TaskList';
import Loading from "./Loading";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      tasks: null,
      singleTask: null,
      sort: "id"
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/todos?sort=id`)
      .then((response) => {
        this.setState({tasks: response.data, loading: false})
      })
  }

  handleSort = (event) => {
    this.setState({loading: true, sort: event.target.value})
    axios.get(`http://localhost:3000/todos?sort=${event.target.value}`)
      .then((response) => {
        console.log(event.target.value);
        this.setState({tasks: response.data, loading: false})
      })
  }

  handleSingleTask = (obj) => {
    this.setState({singleTask: obj})
  }

  handleSetComplete = (id) => {
    axios.patch(`http://localhost:3000/todos/${id}`, {complete: " "})
  }

  render() {
    return (
    <div className="App">
      {this.state.loading ? 
      <Loading />
      :
      <>
        <SortTask sort={this.state.sort} handleSort={this.handleSort}/>
        <NewTask />
        <TaskList tasks={this.state.tasks} singleTask={this.state.singleTask} handleSingleTask={this.handleSingleTask} setComplete={this.handleSetComplete}/>
      </>
      }
    </div>
    )
  };
}

export default App;
