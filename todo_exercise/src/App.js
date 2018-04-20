import React, { Component } from 'react';
import './App.css';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {toDoItems: []};
  this.handleEntry = this.handleEntry.bind(this);
  }

  handleEntry(item) {
    let newState = {toDoItems: [...this.state.toDoItems, item]};
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <h1>Simpe ToDo app</h1><br/>
        <ToDoInput onEntry={this.handleEntry}/><br/>
        <ToDoList items={this.state.toDoItems} />
      </div>
    );
  }
}

export default App;
