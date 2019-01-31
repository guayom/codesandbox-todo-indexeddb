import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./task-list";
import NewTask from "./new-task";
import ToggleCompleted from "./toggle-completed";

import "./styles.css";

const originalShowOnlyIncomplete =
  JSON.parse(localStorage.getItem("__showOnlyIncomplete")) || false;

class App extends React.Component {
  state = {
    showOnlyIncomplete: originalShowOnlyIncomplete,
    tasks: [
      {
        id: 1,
        title: "Take out the trash",
        done: false
      },
      {
        id: 2,
        title: "Make pancackes",
        done: true
      },
      {
        id: 3,
        title: "Do the laundry",
        done: true
      },
      {
        id: 4,
        title: "Read about react hooks",
        done: false
      },
      {
        id: 5,
        title: "Rewrite this app with hooks",
        done: false
      }
    ]
  };

  deleteTask = e => {
    const id = Math.trunc(e.target.value);
    const deleted = this.state.tasks.filter(t => t.id != id);
    this.setState({ tasks: deleted });
  };

  addTask = e => {
    e.preventDefault();
    const taskField = e.target.task;
    const taskTitle = taskField.value;
    const currentTasks = this.state.tasks;
    const id =
      currentTasks.map(t => t.id).reduce((max, n) => (n > max ? n : max)) + 1;
    const updatedTasks = currentTasks.concat({
      id: id,
      title: taskTitle,
      done: false
    });
    this.setState({ tasks: updatedTasks });
    taskField.value = "";
  };

  changeStatus = e => {
    const currentTasks = this.state.tasks;
    const taskToUpdate = currentTasks.find(
      t => t.id === Math.trunc(e.target.dataset.id)
    );
    taskToUpdate.done = !taskToUpdate.done;
    this.setState({ tasks: currentTasks });
  };

  toggleShowOnlyIncomplete = () => {
    const newState = !this.state.showOnlyIncomplete;
    localStorage.setItem("__showOnlyIncomplete", newState);
    this.setState({ showOnlyIncomplete: newState });
  };

  render() {
    const { tasks, showOnlyIncomplete } = this.state;
    return (
      <div className="App">
        <NewTask addTask={e => this.addTask(e)} />
        <TaskList
          tasks={tasks}
          deleteTask={this.deleteTask}
          changeStatus={this.changeStatus}
          showOnlyIncomplete={showOnlyIncomplete}
        />
        <ToggleCompleted
          handleChange={this.toggleShowOnlyIncomplete}
          checked={showOnlyIncomplete}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
