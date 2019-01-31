import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  margin: 0;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  ${props => props.done && "text-decoration: line-through;"}
  color: ${props => (props.done ? "#ddd" : "#000")};
`;

const ItemTitle = styled.div`
  flex: 1;
  text-align: left;
`;

const Options = styled.div`
  flex: none;
  width: auto;
  text-align: right;

  button {
    margin-left: 5px;
  }
`;

export default ({ tasks, deleteTask, changeStatus }) => {
  return (
    <Container>
      {tasks.map(task => (
        <Item key={task.id} done={task.done}>
          <ItemTitle>
            <input
              type="checkbox"
              value={task.done}
              data-id={task.id}
              onClick={changeStatus}
            />
            {task.title}
          </ItemTitle>
          <Options>
            <button onClick={deleteTask} value={task.id}>
              Delete
            </button>
          </Options>
        </Item>
      ))}
    </Container>
  );
};
