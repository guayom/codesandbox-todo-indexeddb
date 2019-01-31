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
`;

const ItemTitle = styled.div`
  flex: 1;
  text-align: left;
`;

const Options = styled.div`
  flex: none;
  width: 90px;
  text-align: right;
`;

export default ({ tasks, deleteTask }) => {
  return (
    <Container>
      {tasks.map(task => (
        <Item key={task.id}>
          <ItemTitle>{task.title}</ItemTitle>
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
