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

  deleteTask = id => {
    const updatedTasks = this.state.tasks.filter(t => t.id !== id);
    this.setState({ tasks: updatedTasks });
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
    console.log({ updatedTasks });
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1>To-do's with IndexedDB(WIP)</h1>
        <NewTask addTask={e => this.addTask(e)} />
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
