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
      sort: "id"
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/todos?sort=id`)
      .then((response) => {
        this.setState({tasks: response.data, loading: false})
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sort !== prevState.sort) {
      this.setState({loading: true})
      axios.get(`http://localhost:3000/todos?sort=${this.state.sort}`)
      .then((response) => {
        this.setState({tasks: response.data, loading: false})
      })
    }
  }

  handleSort = (selection) => {
    this.setState((state) => {
      return {sort: selection}
    })
  }

  render() {
    return (
    <div className="App">
      {this.state.loading ? 
      <Loading />
      :
      <>
        <SortTask handleSort={this.handleSort}/>
        <ModifyTask />
        <TaskList tasks={this.state.tasks} singleTask={this.state.singleTask} additionalTask={this.state.additionalTask}/>
      </>
      }
    </div>
    )
  };
}

export default App;
