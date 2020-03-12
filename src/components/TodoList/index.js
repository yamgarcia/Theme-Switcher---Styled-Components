import React from "react";
import styled from "styled-components";

const initValue = ["buy coffee", "study react.js", "call mom"];

const List = styled.ul`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 30px;

  li {
    line-height: 36px;
  }
`;

const TodoList = () => {
  return (
    <List>
      <ul>
        {initValue.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </List>
  );
};

export default TodoList;
