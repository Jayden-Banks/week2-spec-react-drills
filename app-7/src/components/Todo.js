import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {  
    super(props)
  }
  
  render() {
    return (
      <p className="p-task">{this.props.task}</p>
    )
  }
}

export default Todo