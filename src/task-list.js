import React from "react";

export default ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.id} - {task.title}
        </li>
      ))}
    </ul>
  );
};
