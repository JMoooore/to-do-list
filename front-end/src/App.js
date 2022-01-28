import React, {Component, useState} from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/todos')
      .then((response) => {
        this.setState({todos: response.data})
      })
  }

  render() {
    console.log(this.state.todos);
    return (
    <div className="App">
      This is just a div
    </div>
    )
  };
}

export default App;
