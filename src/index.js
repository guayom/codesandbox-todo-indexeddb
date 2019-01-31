import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./task-list";
import NewTask from "./new-task";

import "./styles.css";

class App extends React.Component {
  state = {
    tasks: [
      { id: 1, title: "Take out the trash" },
      {
        id: 2,
        title: "Make pancackes"
      },
      { id: 3, title: "Do the laundry" },
      {
        id: 4,
        title: "Read about react hooks"
      },
      { id: 5, title: "Rewrite this app with hooks" }
    ]
  };

  deleteTask = e => {
    const id = Math.trunc(e.target.value);
    const deleted = this.state.tasks.filter(t => t.id != id);
    this.setState({ tasks: deleted });
  };

  addTask = e => {
    e.preventDefault();
    const taskTitle = e.target.task.value;
    e.target.task.value = "";
    const id =
      this.state.tasks.map(t => t.id).reduce((max, n) => (n > max ? n : max)) +
      1;
    const currenTasks = this.state.tasks;
    const updatedTasks = currenTasks.concat({ id: id, title: taskTitle });
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <NewTask addTask={e => this.addTask(e)} />
        <TaskList tasks={tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
