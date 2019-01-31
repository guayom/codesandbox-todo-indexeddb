import React from "react";

export default ({ addTask }) => {
  return (
    <form onSubmit={e => addTask(e)}>
      <input type="text" placeholder="New task..." name="task" />
      <button type="submit">Submit</button>
    </form>
  );
};
