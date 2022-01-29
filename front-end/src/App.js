import React, {Component} from "react";
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
      additionalTask: null,
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

  render() {
    return (
    <div className="App">
      {this.state.loading ? 
      <Loading />
      :
      <>
        <SortTask sort={this.state.sort} handleSort={this.handleSort}/>
        <ModifyTask />
        <TaskList tasks={this.state.tasks} singleTask={this.state.singleTask} additionalTask={this.state.additionalTask}/>
      </>
      }
    </div>
    )
  };
}

export default App;
